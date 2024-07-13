import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async (req, res) => {
  if (req.method === 'POST') {
    const { reference, poids, marque, prix, imageUrl } = req.body;

    try {
      const panier = await prisma.panier.findFirst({
        where: { /* Ajouter une condition pour identifier le panier de l'utilisateur actuel */ }
      });

      if (!panier) {
        return res.status(404).json({ error: 'Panier non trouvé' });
      }

      await prisma.article.create({
        data: {
          qte: 1, // Quantité par défaut, peut être modifié selon votre logique
          panierId: panier.id,
          reference,
          poids,
          marque,
          prix,
          imageUrl
        }
      });

      res.status(200).json({ message: 'Article ajouté au panier' });
    } catch (error) {
      console.error('Error adding to cart:', error);
      res.status(500).json({ error: 'Erreur lors de l\'ajout au panier' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
