-- CreateTable
CREATE TABLE "Raffle" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "deleted_at" DATETIME,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "draw_date" DATETIME,
    "amount_number" INTEGER NOT NULL,
    "fk_provider_user_id" INTEGER,
    "winning_number" INTEGER NOT NULL,
    "price_product" INTEGER NOT NULL,
    "description" TEXT NOT NULL
);
