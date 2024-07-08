/*
  Warnings:

  - You are about to alter the column `totalPrice` on the `order` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `price` on the `ticket-class` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.

*/
-- AlterTable
ALTER TABLE `customer` MODIFY `idNumber` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `guarantor` MODIFY `idNumber` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `legal` MODIFY `npwpId` VARCHAR(191) NOT NULL,
    MODIFY `legalLicense` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `order` MODIFY `totalPrice` DOUBLE NOT NULL;

-- AlterTable
ALTER TABLE `ticket-class` MODIFY `price` DOUBLE NOT NULL;
