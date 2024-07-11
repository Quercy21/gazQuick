import { PrismaClient } from '@prisma/client';
import formidable from 'formidable';
import fs from 'fs';

const prisma = new PrismaClient();

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const form = new formidable.IncomingForm();

    form.parse(req, async (err, fields, files) => {
      if (err) {
        return res.status(500).json({ error: 'Error parsing form data' });
      }

      const { reference, poids, marque, couleur, qte, publieParId } = fields;
      const image = files.image ? fs.readFileSync(files.image.filepath) : null;

      try {
        const bouteille = await prisma.bouteilleGaz.create({
          data: {
            reference,
            poids: parseFloat(poids),
            marque,
            couleur,
            qte: parseInt(qte),
            image: image ? image.toString('base64') : '',
            dateAjout: new Date(),
            publieParId: parseInt(publieParId),
          },
        });
        res.status(200).json(bouteille);
      } catch (error) {
        res.status(500).json({ error: 'Error adding bottle' });
      }
    });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
