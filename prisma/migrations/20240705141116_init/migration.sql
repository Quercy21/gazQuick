-- CreateTable
CREATE TABLE `Utilisateur` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `prenom` VARCHAR(191) NOT NULL,
    `nom` VARCHAR(191) NOT NULL,
    `sexe` VARCHAR(191) NOT NULL,
    `nomUtilisateur` VARCHAR(191) NOT NULL,
    `motDePasse` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Utilisateur_nomUtilisateur_key`(`nomUtilisateur`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Etablissement` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `dateEnreg` DATETIME(3) NOT NULL,
    `proprietaire` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Groupe` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `intitule` VARCHAR(191) NOT NULL,
    `niveauAccess` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Employe` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `role` ENUM('vendeur', 'livreur') NOT NULL,
    `dateEnreg` DATETIME(3) NOT NULL,
    `dateLicenciement` DATETIME(3) NULL,
    `etablissementId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Commande` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `dateEnreg` DATETIME(3) NOT NULL,
    `valide` BOOLEAN NOT NULL,
    `valideParId` INTEGER NULL,
    `annuleLe` DATETIME(3) NULL,
    `annuleParClient` BOOLEAN NOT NULL,
    `localisation` VARCHAR(191) NOT NULL,
    `qte` INTEGER NOT NULL,
    `dateValidation` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Livraison` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `commandeId` INTEGER NOT NULL,
    `statut` ENUM('nouvelle', 'assignee', 'enCours', 'achevee', 'annulee') NOT NULL,
    `livreLe` DATETIME(3) NOT NULL,
    `localisation` VARCHAR(191) NOT NULL,
    `effectueParId` INTEGER NOT NULL,

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
    `publieParId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_GroupeToUtilisateur` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_GroupeToUtilisateur_AB_unique`(`A`, `B`),
    INDEX `_GroupeToUtilisateur_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_BouteilleGazToCommande` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_BouteilleGazToCommande_AB_unique`(`A`, `B`),
    INDEX `_BouteilleGazToCommande_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

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
