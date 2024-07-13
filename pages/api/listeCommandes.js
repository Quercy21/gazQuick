import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const commandes = await prisma.commande.findMany({
        include: {
          utilisateur: true, // Si vous souhaitez inclure les détails de l'utilisateur qui a passé la commande
        }
      });
      res.status(200).json(commandes);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erreur lors de la récupération des commandes' });
    }
  } else {
    res.status(405).json({ error: 'Méthode non autorisée' });
  }
}
