import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { nom, prenom, sexe, nomUtilisateur, motDePasse } = req.body;

    try {
      const newLivreur = await prisma.utilisateur.create({
        data: {
          nom,
          prenom,
          sexe,
          nomUtilisateur,
          motDePasse,
          role: 'livreur', // Enum value must match the exact case in the schema
        },
      });

      res.status(201).json(newLivreur);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erreur lors de l\'ajout du livreur' });
    }
  } else {
    res.status(405).json({ error: 'Méthode non autorisée' });
  }
}
