/*
  Warnings:

  - You are about to drop the column `creatorId` on the `address` table. All the data in the column will be lost.
  - You are about to drop the column `customerId` on the `address` table. All the data in the column will be lost.
  - You are about to drop the column `eventId` on the `category` table. All the data in the column will be lost.
  - You are about to drop the column `creatorId` on the `guarantor` table. All the data in the column will be lost.
  - You are about to drop the column `eventId` on the `location` table. All the data in the column will be lost.
  - You are about to drop the `_CreatorToEvent` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `addressId` to the `creator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `guarantorId` to the `creator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `transaction` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_CreatorToEvent` DROP FOREIGN KEY `_CreatorToEvent_A_fkey`;

-- DropForeignKey
ALTER TABLE `_CreatorToEvent` DROP FOREIGN KEY `_CreatorToEvent_B_fkey`;

-- DropForeignKey
ALTER TABLE `address` DROP FOREIGN KEY `address_creatorId_fkey`;

-- DropForeignKey
ALTER TABLE `address` DROP FOREIGN KEY `address_customerId_fkey`;

-- DropForeignKey
ALTER TABLE `category` DROP FOREIGN KEY `category_eventId_fkey`;

-- DropForeignKey
ALTER TABLE `guarantor` DROP FOREIGN KEY `guarantor_creatorId_fkey`;

-- DropForeignKey
ALTER TABLE `location` DROP FOREIGN KEY `location_eventId_fkey`;

-- AlterTable
ALTER TABLE `address` DROP COLUMN `creatorId`,
    DROP COLUMN `customerId`;

-- AlterTable
ALTER TABLE `category` DROP COLUMN `eventId`;

-- AlterTable
ALTER TABLE `creator` ADD COLUMN `addressId` INTEGER NOT NULL,
    ADD COLUMN `guarantorId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `customer` ADD COLUMN `addressId` INTEGER NULL;

-- AlterTable
ALTER TABLE `event` ADD COLUMN `categoryId` INTEGER NULL,
    ADD COLUMN `creatorId` INTEGER NULL,
    ADD COLUMN `locationId` INTEGER NULL;

-- AlterTable
ALTER TABLE `guarantor` DROP COLUMN `creatorId`;

-- AlterTable
ALTER TABLE `location` DROP COLUMN `eventId`;

-- AlterTable
ALTER TABLE `transaction` ADD COLUMN `created_at` DATETIME(3) NULL,
    ADD COLUMN `payment_method` VARCHAR(191) NULL,
    ADD COLUMN `status` ENUM('PENDING_PAYMENT', 'PAID', 'CANCELED') NOT NULL,
    ADD COLUMN `updated_at` DATETIME(3) NULL;

-- DropTable
DROP TABLE `_CreatorToEvent`;

-- AddForeignKey
ALTER TABLE `creator` ADD CONSTRAINT `creator_addressId_fkey` FOREIGN KEY (`addressId`) REFERENCES `address`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `creator` ADD CONSTRAINT `creator_guarantorId_fkey` FOREIGN KEY (`guarantorId`) REFERENCES `guarantor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `customer` ADD CONSTRAINT `customer_addressId_fkey` FOREIGN KEY (`addressId`) REFERENCES `address`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `event` ADD CONSTRAINT `event_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `category`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `event` ADD CONSTRAINT `event_locationId_fkey` FOREIGN KEY (`locationId`) REFERENCES `location`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `event` ADD CONSTRAINT `event_creatorId_fkey` FOREIGN KEY (`creatorId`) REFERENCES `creator`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
