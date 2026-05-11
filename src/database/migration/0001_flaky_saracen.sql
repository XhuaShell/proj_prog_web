ALTER TABLE "users" ALTER COLUMN "address" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "ph_number" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "password" text NOT NULL;--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN "hashed_password";