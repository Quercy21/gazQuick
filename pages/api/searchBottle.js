import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { query } = req.query;

    try {
      const bottles = await prisma.bouteilleGaz.findMany({
        where: {
          reference: {
            contains: query,
            mode: 'insensitive',
          },
        },
      });
      res.status(200).json(bottles);
    } catch (error) {
      res.status(500).json({ error: 'Une erreur est survenue lors de la recherche des bouteilles de gaz' });
    }
  } else {
    res.status(405).json({ error: 'Méthode non autorisée' });
  }
}
