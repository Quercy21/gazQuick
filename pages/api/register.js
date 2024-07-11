import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { prenom, nom, nomUtilisateur, motDePasse, sexe } = req.body;

  if (!prenom || !nom || !nomUtilisateur || !motDePasse || !sexe) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const hashedPassword = await bcrypt.hash(motDePasse, 10);

    const user = await prisma.utilisateur.create({
      data: {
        prenom,
        nom,
        sexe,
        nomUtilisateur,
        motDePasse: hashedPassword,
      },
    });

    res.status(201).json(user);
  } catch (error) {
    if (error.code === 'P2002') {
      res.status(400).json({ message: 'Username already exists' });
    } else {
      res.status(500).json({ message: 'Internal server error' });
    }
  } finally {
    await prisma.$disconnect();
  }
}
