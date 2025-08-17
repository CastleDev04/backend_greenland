-- CreateEnum
CREATE TYPE "Rol" AS ENUM ('ADMIN', 'USUARIO', 'VENDEDOR', 'COBRANZA', 'MODERADOR', 'CLIENTE');

-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "rol" "Rol" NOT NULL DEFAULT 'USUARIO',

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cliente" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefono" TEXT,
    "direccion" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "usuarioId" INTEGER,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Fraccionamiento" (
    "id" SERIAL NOT NULL,
    "fraccion" TEXT NOT NULL,
    "ubicacion" TEXT NOT NULL,

    CONSTRAINT "Fraccionamiento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lote" (
    "id" SERIAL NOT NULL,
    "fraccionamiento" TEXT NOT NULL,
    "distrito" TEXT NOT NULL,
    "finca" TEXT NOT NULL,
    "padron" TEXT NOT NULL,
    "cuentaCatastral" TEXT,
    "manzana" TEXT NOT NULL,
    "lote" TEXT NOT NULL,
    "loteamiento" TEXT NOT NULL,
    "superficie" DOUBLE PRECISION NOT NULL,
    "precioTotal" DOUBLE PRECISION NOT NULL,
    "modalidadPago" TEXT NOT NULL,
    "cuotas" DOUBLE PRECISION,
    "montoCuota" DOUBLE PRECISION,
    "estadoVenta" TEXT NOT NULL,
    "entregado" BOOLEAN NOT NULL DEFAULT false,
    "amojonado" BOOLEAN NOT NULL DEFAULT false,
    "limpio" BOOLEAN NOT NULL DEFAULT false,
    "tieneConstruccion" BOOLEAN NOT NULL DEFAULT false,
    "aguaPotable" BOOLEAN NOT NULL DEFAULT false,
    "energiaElectrica" BOOLEAN NOT NULL DEFAULT false,
    "calle" BOOLEAN NOT NULL DEFAULT false,
    "seguridad" BOOLEAN NOT NULL DEFAULT false,
    "beneficiosComunes" TEXT[],
    "requiereExpensas" BOOLEAN NOT NULL DEFAULT false,
    "expensas" DOUBLE PRECISION,
    "restriccionConstrucion" TEXT[],
    "latitud" DOUBLE PRECISION,
    "longitud" DOUBLE PRECISION,
    "linderoNorteMedida" DOUBLE PRECISION,
    "linderoSurMedida" DOUBLE PRECISION,
    "linderoEsteMedida" DOUBLE PRECISION,
    "linderoOesteMedida" DOUBLE PRECISION,
    "linderoNorteCon" TEXT,
    "linderoSurCon" TEXT,
    "linderoEsteCon" TEXT,
    "linderoOesteCon" TEXT,
    "linderoNorteCalle" TEXT,
    "linderoSurCalle" TEXT,
    "linderoEsteCalle" TEXT,
    "linderoOesteCalle" TEXT,
    "imagenes" TEXT[],
    "compradorId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Lote_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_usuarioId_key" ON "Cliente"("usuarioId");

-- AddForeignKey
ALTER TABLE "Cliente" ADD CONSTRAINT "Cliente_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lote" ADD CONSTRAINT "Lote_compradorId_fkey" FOREIGN KEY ("compradorId") REFERENCES "Cliente"("id") ON DELETE SET NULL ON UPDATE CASCADE;
