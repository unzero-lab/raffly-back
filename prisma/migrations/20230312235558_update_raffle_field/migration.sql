-- AlterTable
ALTER TABLE "raflles" ADD COLUMN     "providerUsersDataId" TEXT;

-- AddForeignKey
ALTER TABLE "raflles" ADD CONSTRAINT "raflles_provider_user_id_fkey" FOREIGN KEY ("provider_user_id") REFERENCES "provider_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "raflles" ADD CONSTRAINT "raflles_providerUsersDataId_fkey" FOREIGN KEY ("providerUsersDataId") REFERENCES "provider_users_data"("id") ON DELETE SET NULL ON UPDATE CASCADE;
