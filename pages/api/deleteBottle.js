import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'DELETE') {
    const { reference } = req.body;

    try {
      const deletedBottle = await prisma.bouteilleGaz.delete({
        where: {
          reference: reference,
        },
      });
      res.status(200).json(deletedBottle);
    } catch (error) {
      res.status(500).json({ error: 'Une erreur est survenue lors de la suppression de la bouteille de gaz' });
    }
  } else {
    res.status(405).json({ error: 'Méthode non autorisée' });
  }
}
