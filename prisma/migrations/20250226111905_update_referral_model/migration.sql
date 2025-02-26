/*
  Warnings:

  - You are about to drop the column `referrerEmail` on the `referral` table. All the data in the column will be lost.
  - You are about to drop the column `referrerName` on the `referral` table. All the data in the column will be lost.
  - You are about to drop the column `referrerPhone` on the `referral` table. All the data in the column will be lost.
  - Added the required column `yourEmail` to the `Referral` table without a default value. This is not possible if the table is not empty.
  - Added the required column `yourName` to the `Referral` table without a default value. This is not possible if the table is not empty.
  - Added the required column `yourPhone` to the `Referral` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `referral` DROP COLUMN `referrerEmail`,
    DROP COLUMN `referrerName`,
    DROP COLUMN `referrerPhone`,
    ADD COLUMN `yourEmail` VARCHAR(191) NOT NULL,
    ADD COLUMN `yourName` VARCHAR(191) NOT NULL,
    ADD COLUMN `yourPhone` VARCHAR(191) NOT NULL;
