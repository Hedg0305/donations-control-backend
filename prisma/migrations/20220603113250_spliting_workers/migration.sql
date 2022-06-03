/*
  Warnings:

  - You are about to drop the column `callerId` on the `Donation` table. All the data in the column will be lost.
  - You are about to drop the `Worker` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Donation" DROP CONSTRAINT "Donation_callerId_fkey";

-- DropForeignKey
ALTER TABLE "Donation" DROP CONSTRAINT "Donation_courierId_fkey";

-- AlterTable
ALTER TABLE "Donation" DROP COLUMN "callerId",
ADD COLUMN     "telemarketingId" TEXT;

-- DropTable
DROP TABLE "Worker";

-- DropEnum
DROP TYPE "Role";

-- CreateTable
CREATE TABLE "Telemarketing" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Telemarketing_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Courier" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Courier_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Donation" ADD CONSTRAINT "Donation_telemarketingId_fkey" FOREIGN KEY ("telemarketingId") REFERENCES "Telemarketing"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Donation" ADD CONSTRAINT "Donation_courierId_fkey" FOREIGN KEY ("courierId") REFERENCES "Courier"("id") ON DELETE SET NULL ON UPDATE CASCADE;
