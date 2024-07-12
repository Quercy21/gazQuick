/*
  Warnings:

  - Added the required column `imageUrl` to the `BouteilleGaz` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Utilisateur` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Article_panierId_fkey` ON `article`;

-- DropIndex
DROP INDEX `BouteilleGaz_ajouteParId_fkey` ON `bouteillegaz`;

-- DropIndex
DROP INDEX `Commande_utilisateurId_fkey` ON `commande`;

-- ajout de la colonne imageUrl à la table BouteilleGaz
ALTER TABLE `BouteilleGaz` ADD COLUMN `imageUrl` VARCHAR(255);

-- ajout de la colonne image à la table Utilisateur
ALTER TABLE `Utilisateur` ADD COLUMN `image` VARCHAR(255);


-- AddForeignKey
ALTER TABLE `BouteilleGaz` ADD CONSTRAINT `BouteilleGaz_ajouteParId_fkey` FOREIGN KEY (`ajouteParId`) REFERENCES `Utilisateur`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Article` ADD CONSTRAINT `Article_panierId_fkey` FOREIGN KEY (`panierId`) REFERENCES `Panier`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Commande` ADD CONSTRAINT `Commande_utilisateurId_fkey` FOREIGN KEY (`utilisateurId`) REFERENCES `Utilisateur`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
