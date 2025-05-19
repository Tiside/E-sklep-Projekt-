/*
  Warnings:

  - Added the required column `cena` to the `ListaProduktow` table without a default value. This is not possible if the table is not empty.
  - Made the column `ilosc` on table `listaproduktow` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `listaproduktow` ADD COLUMN `cena` INTEGER NOT NULL,
    MODIFY `ilosc` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Likes` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `productId` INTEGER NOT NULL,

    UNIQUE INDEX `Likes_userId_productId_key`(`userId`, `productId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Likes` ADD CONSTRAINT `Likes_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Likes` ADD CONSTRAINT `Likes_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `ListaProduktow`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
