import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { reference, poids, marque, couleur, qte } = req.body;

    try {
      const bouteilleGaz = await prisma.bouteilleGaz.create({
        data: {
          reference,
          poids: parseFloat(poids),
          marque,
          couleur,
          qte: parseInt(qte, 10),
          dateAjout: new Date(),
          ajouteParId: 1, // Remplacez par l'ID utilisateur approprié
        },
      });
      res.status(200).json(bouteilleGaz);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erreur lors de l\'ajout de la bouteille de gaz' });
    }
  } else if (req.method === 'GET') {
    try {
      const bouteilles = await prisma.bouteilleGaz.findMany();
      res.status(200).json(bouteilles);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erreur lors de la récupération des bouteilles de gaz' });
    }
  } else {
    res.status(405).json({ error: 'Méthode non autorisée' });
  }
}
