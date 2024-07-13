/*
  Warnings:

  - Added the required column `marque` to the `Article` table without a default value. This is not possible if the table is not empty.
  - Added the required column `poids` to the `Article` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prix` to the `Article` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reference` to the `Article` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Article_panierId_fkey` ON `article`;

-- DropIndex
DROP INDEX `BouteilleGaz_ajouteParId_fkey` ON `bouteillegaz`;

-- DropIndex
DROP INDEX `Commande_utilisateurId_fkey` ON `commande`;

-- AlterTable
ALTER TABLE `article` ADD COLUMN `imageUrl` VARCHAR(191) NULL,
    ADD COLUMN `marque` VARCHAR(191) NOT NULL,
    ADD COLUMN `poids` DOUBLE NOT NULL,
    ADD COLUMN `prix` DOUBLE NOT NULL,
    ADD COLUMN `reference` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `BouteilleGaz` ADD CONSTRAINT `BouteilleGaz_ajouteParId_fkey` FOREIGN KEY (`ajouteParId`) REFERENCES `Utilisateur`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Article` ADD CONSTRAINT `Article_panierId_fkey` FOREIGN KEY (`panierId`) REFERENCES `Panier`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Commande` ADD CONSTRAINT `Commande_utilisateurId_fkey` FOREIGN KEY (`utilisateurId`) REFERENCES `Utilisateur`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
