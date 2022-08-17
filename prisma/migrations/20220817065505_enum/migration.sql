-- AlterEnum
ALTER TYPE "Category" ADD VALUE 'PRODUCTS';

-- AlterTable
ALTER TABLE "products" ALTER COLUMN "category" SET DEFAULT 'PRODUCTS';
