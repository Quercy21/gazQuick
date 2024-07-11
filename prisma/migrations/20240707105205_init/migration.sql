/*
  Warnings:

  - Added the required column `image` to the `BouteilleGaz` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `BouteilleGaz_publieParId_fkey` ON `bouteillegaz`;

-- DropIndex
DROP INDEX `Commande_valideParId_fkey` ON `commande`;

-- DropIndex
DROP INDEX `Employe_etablissementId_fkey` ON `employe`;

-- DropIndex
DROP INDEX `Etablissement_proprietaire_fkey` ON `etablissement`;

-- DropIndex
DROP INDEX `Livraison_commandeId_fkey` ON `livraison`;

-- AlterTable
ALTER TABLE `bouteillegaz` ADD COLUMN `image` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Etablissement` ADD CONSTRAINT `Etablissement_proprietaire_fkey` FOREIGN KEY (`proprietaire`) REFERENCES `Utilisateur`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Employe` ADD CONSTRAINT `Employe_etablissementId_fkey` FOREIGN KEY (`etablissementId`) REFERENCES `Etablissement`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Commande` ADD CONSTRAINT `Commande_valideParId_fkey` FOREIGN KEY (`valideParId`) REFERENCES `Employe`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Livraison` ADD CONSTRAINT `Livraison_commandeId_fkey` FOREIGN KEY (`commandeId`) REFERENCES `Commande`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BouteilleGaz` ADD CONSTRAINT `BouteilleGaz_publieParId_fkey` FOREIGN KEY (`publieParId`) REFERENCES `Utilisateur`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_GroupeToUtilisateur` ADD CONSTRAINT `_GroupeToUtilisateur_A_fkey` FOREIGN KEY (`A`) REFERENCES `Groupe`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_GroupeToUtilisateur` ADD CONSTRAINT `_GroupeToUtilisateur_B_fkey` FOREIGN KEY (`B`) REFERENCES `Utilisateur`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_BouteilleGazToCommande` ADD CONSTRAINT `_BouteilleGazToCommande_A_fkey` FOREIGN KEY (`A`) REFERENCES `BouteilleGaz`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_BouteilleGazToCommande` ADD CONSTRAINT `_BouteilleGazToCommande_B_fkey` FOREIGN KEY (`B`) REFERENCES `Commande`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
