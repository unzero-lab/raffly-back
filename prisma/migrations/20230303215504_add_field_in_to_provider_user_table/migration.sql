/*
  Warnings:

  - A unique constraint covering the columns `[token]` on the table `provider_users` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "provider_users" ADD COLUMN "token" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "provider_users_token_key" ON "provider_users"("token");
