-- CreateTable
CREATE TABLE "Dump" (
    "id" SERIAL NOT NULL,
    "amount" TEXT NOT NULL,
    "description" TEXT,
    "ubication" TEXT NOT NULL,
    "maintenance" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Dump_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Dump_amount_key" ON "Dump"("amount");
