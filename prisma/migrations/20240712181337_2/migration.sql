/*
  Warnings:

  - You are about to alter the column `imageUrl` on the `bouteillegaz` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to alter the column `image` on the `utilisateur` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.

*/
-- DropIndex
DROP INDEX `Article_panierId_fkey` ON `article`;

-- DropIndex
DROP INDEX `BouteilleGaz_ajouteParId_fkey` ON `bouteillegaz`;

-- DropIndex
DROP INDEX `Commande_utilisateurId_fkey` ON `commande`;

-- AlterTable
ALTER TABLE `bouteillegaz` MODIFY `imageUrl` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `utilisateur` MODIFY `image` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `BouteilleGaz` ADD CONSTRAINT `BouteilleGaz_ajouteParId_fkey` FOREIGN KEY (`ajouteParId`) REFERENCES `Utilisateur`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Article` ADD CONSTRAINT `Article_panierId_fkey` FOREIGN KEY (`panierId`) REFERENCES `Panier`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Commande` ADD CONSTRAINT `Commande_utilisateurId_fkey` FOREIGN KEY (`utilisateurId`) REFERENCES `Utilisateur`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
