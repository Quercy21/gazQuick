import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const bottles = await prisma.bouteilleGaz.findMany();
      res.status(200).json(bottles);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching gas bottles' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
