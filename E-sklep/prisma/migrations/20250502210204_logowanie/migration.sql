-- CreateTable
CREATE TABLE `ListaProduktow` (
    `id` INTEGER NOT NULL,
    `marka` VARCHAR(191) NOT NULL,
    `src` VARCHAR(191) NOT NULL,
    `ilosc` INTEGER NULL,

    UNIQUE INDEX `ListaProduktow_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Users` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NULL,
    `password` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Users_name_key`(`name`),
    UNIQUE INDEX `Users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
