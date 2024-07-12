import { PrismaClient } from '@prisma/client';
import cloudinary from '../../lib/cloudinary';
import multer from 'multer';

const prisma = new PrismaClient();

export const config = {
  api: {
    bodyParser: false,
  },
};

const upload = multer({ dest: '/tmp' });

const handler = async (req, res) => {
  if (req.method === 'POST') {
    upload.single('image')(req, res, async (err) => {
      if (err) {
        return res.status(500).json({ error: 'Erreur lors du téléchargement de l\'image' });
      }

      const { reference, poids, marque, couleur, qte } = req.body;

      try {
        const result = await cloudinary.uploader.upload(req.file.path, {
          folder: 'gazquick',
        });

        const bouteilleGaz = await prisma.bouteilleGaz.create({
          data: {
            reference,
            poids: parseFloat(poids),
            marque,
            couleur,
            qte: parseInt(qte, 10),
            dateAjout: new Date(),
            ajouteParId: 1, 
            imageUrl: result.secure_url,
          },
        });
        res.status(200).json(bouteilleGaz);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erreur lors de l\'ajout de la bouteille de gaz' });
      }
    });
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
};

export default handler;
