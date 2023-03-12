-- CreateTable
CREATE TABLE "provider_users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "gender" TEXT,
    "date_of_birth" TIMESTAMP(3),
    "phone" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3),
    "token" TEXT,

    CONSTRAINT "provider_users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "provider_users_data" (
    "id" TEXT NOT NULL,
    "provider_users_id" TEXT NOT NULL,
    "type_label_id" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "provider_users_data_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "type_label" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type_data_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "type_label_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "type_data" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "type_data_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "raflles" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "deleted_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "draw_date" TIMESTAMP(3),
    "amount_number" INTEGER NOT NULL,
    "price_number" INTEGER NOT NULL,
    "provider_user_id" TEXT NOT NULL,
    "winning_number" INTEGER NOT NULL,
    "price_product" INTEGER NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "raflles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subscriber_users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,

    CONSTRAINT "subscriber_users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "provider_users_email_key" ON "provider_users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "provider_users_phone_key" ON "provider_users"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "provider_users_token_key" ON "provider_users"("token");
