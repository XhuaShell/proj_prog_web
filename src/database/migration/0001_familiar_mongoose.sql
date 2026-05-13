ALTER TABLE "brands" RENAME COLUMN "tax_id" TO "nif";--> statement-breakpoint
ALTER TABLE "brands" DROP CONSTRAINT "brands_tax_id_unique";--> statement-breakpoint
ALTER TABLE "brands" ADD CONSTRAINT "brands_nif_unique" UNIQUE("nif");