import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { nomUtilisateur, password } = req.body;

  if (!nomUtilisateur || !password) {
    return res.status(400).json({ message: 'Tous les champs sont requis' });
  }

  try {
    const user = await prisma.utilisateur.findUnique({
      where: {
        nomUtilisateur,
      },
    });

    if (!user || user.role !== 'vendeur') {
      return res.status(401).json({ message: 'Nom d\'utilisateur ou mot de passe invalide' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.motDePasse);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Nom d\'utilisateur ou mot de passe invalide' });
    }

    const token = jwt.sign({ userId: user.id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Erreur interne du serveur' });
  } finally {
    await prisma.$disconnect();
  }
}
