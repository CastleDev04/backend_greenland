/*
  Warnings:

  - A unique constraint covering the columns `[cedula]` on the table `Cliente` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `apellido` to the `Cliente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cedula` to the `Cliente` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cliente" ADD COLUMN     "apellido" TEXT NOT NULL,
ADD COLUMN     "cedula" TEXT NOT NULL,
ADD COLUMN     "estadoCivil" TEXT,
ADD COLUMN     "fechaNacimiento" TIMESTAMP(3),
ADD COLUMN     "nacionalidad" TEXT,
ADD COLUMN     "profesion" TEXT,
ADD COLUMN     "ruc" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_cedula_key" ON "Cliente"("cedula");
