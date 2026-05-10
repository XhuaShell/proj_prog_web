ALTER TABLE "users" ADD COLUMN "firstname" varchar(100) NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "lastname" varchar(100) NOT NULL;--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN "username";