import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { prenom, nom, sexe, nomUtilisateur, motDePasse, role } = req.body;

  if (!prenom || !nom || !sexe || !nomUtilisateur || !motDePasse || !role) {
    return res.status(400).json({ message: 'Tous les champs sont requis' });
  }

  try {
    const existingUser = await prisma.utilisateur.findUnique({
      where: {
        nomUtilisateur,
      },
    });

    if (existingUser) {
      return res.status(400).json({ message: 'Nom d\'utilisateur déjà utilisé' });
    }

    const hashedPassword = await bcrypt.hash(motDePasse, 10);

    const newUser = await prisma.utilisateur.create({
      data: {
        prenom,
        nom,
        sexe,
        nomUtilisateur,
        motDePasse: hashedPassword,
        role: role === 'vendeur' ? 'vendeur' : 'Client', // Gérer le rôle
      },
    });

    res.status(201).json({ message: 'Utilisateur créé avec succès', newUser });
  } catch (error) {
    res.status(500).json({ message: 'Erreur interne du serveur' });
  } finally {
    await prisma.$disconnect();
  }
}
