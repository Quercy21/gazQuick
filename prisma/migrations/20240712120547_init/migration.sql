-- CreateTable
CREATE TABLE `Utilisateur` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `prenom` VARCHAR(191) NOT NULL,
    `nom` VARCHAR(191) NOT NULL,
    `sexe` VARCHAR(191) NOT NULL,
    `nomUtilisateur` VARCHAR(191) NOT NULL,
    `motDePasse` VARCHAR(191) NOT NULL,
    `role` ENUM('vendeur', 'livreur', 'Client') NOT NULL,

    UNIQUE INDEX `Utilisateur_nomUtilisateur_key`(`nomUtilisateur`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `BouteilleGaz` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `reference` VARCHAR(191) NOT NULL,
    `poids` DOUBLE NOT NULL,
    `marque` VARCHAR(191) NOT NULL,
    `couleur` VARCHAR(191) NOT NULL,
    `qte` INTEGER NOT NULL,
    `dateAjout` DATETIME(3) NOT NULL,
    `ajouteParId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Panier` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Article` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `qte` INTEGER NOT NULL,
    `panierId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Commande` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `dateEnreg` DATETIME(3) NOT NULL,
    `valide` BOOLEAN NOT NULL,
    `annuleLe` DATETIME(3) NULL,
    `annuleParClient` BOOLEAN NOT NULL,
    `valideParId` INTEGER NULL,
    `localisation` VARCHAR(191) NOT NULL,
    `qte` INTEGER NOT NULL,
    `dateValidation` DATETIME(3) NOT NULL,
    `modePaiement` ENUM('OrangeMoney', 'MobileMoney', 'Espece') NOT NULL,
    `utilisateurId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Livraison` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `commandeId` INTEGER NOT NULL,
    `statut` ENUM('nouvelle', 'assignee', 'enCours', 'achevee', 'annulee') NOT NULL,
    `livreLe` DATETIME(3) NOT NULL,
    `localisation` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `BouteilleGaz` ADD CONSTRAINT `BouteilleGaz_ajouteParId_fkey` FOREIGN KEY (`ajouteParId`) REFERENCES `Utilisateur`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Article` ADD CONSTRAINT `Article_panierId_fkey` FOREIGN KEY (`panierId`) REFERENCES `Panier`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Commande` ADD CONSTRAINT `Commande_utilisateurId_fkey` FOREIGN KEY (`utilisateurId`) REFERENCES `Utilisateur`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
