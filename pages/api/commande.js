// pages/api/commande.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { cartItems, livraisonDetails, modePaiement, total } = req.body;

    try {
      // Créer la commande
      const commande = await prisma.commande.create({
        data: {
          dateEnreg: new Date(),
          valide: true,
          annuleParClient: false,
          localisation: `${livraisonDetails.ville}, ${livraisonDetails.quartier}`,
          qte: cartItems.reduce((acc, item) => acc + item.quantity, 0),
          dateValidation: new Date(),
          modePaiement,
          utilisateurId: 1 // Remplacez par l'ID de l'utilisateur connecté
        }
      });

      // Ajouter les articles de la commande
      for (const item of cartItems) {
        if (!item.id) {
          return res.status(400).json({ error: 'ID de la bouteille de gaz manquant dans le panier' });
        }

        await prisma.bouteilleGaz.update({
          where: { id: item.id },
          data: {
            qte: { decrement: item.quantity }
          }
        });

        await prisma.article.create({
          data: {
            qte: item.quantity,
            panier: {
              connectOrCreate: {
                where: { id: commande.id },
                create: {}
              }
            }
          }
        });
      }

      res.status(200).json({ message: 'Commande créée avec succès' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erreur lors de la création de la commande' });
    }
  } else {
    res.status(405).json({ error: 'Méthode non autorisée' });
  }
}
