import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const livreurs = await prisma.utilisateur.findMany({
        where: {
          role: 'livreur'
        }
      });
      res.status(200).json(livreurs);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erreur lors de la récupération des livreurs' });
    }
  } else {
    res.status(405).json({ error: 'Méthode non autorisée' });
  }
}
