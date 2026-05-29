CREATE TABLE "brands" (
	"id_brand" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(100) NOT NULL,
	"nif" varchar(30) NOT NULL,
	CONSTRAINT "brands_nif_unique" UNIQUE("nif")
);
--> statement-breakpoint
CREATE TABLE "models" (
	"id_model" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(100) NOT NULL,
	"description" text,
	"version" varchar(50),
	"year" integer NOT NULL,
	"price" numeric(12, 2) NOT NULL,
	"id_spec" integer NOT NULL,
	"id_brand" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE "technical_specs" (
	"id_spec" serial PRIMARY KEY NOT NULL,
	"engine" varchar(100) NOT NULL,
	"displacement" integer NOT NULL,
	"fuel_type" varchar(50) NOT NULL,
	"max_torque" numeric(10, 2) NOT NULL,
	"max_power" numeric(10, 2) NOT NULL,
	"transmission" varchar(50) NOT NULL,
	"rear_suspension" text,
	"front_suspension" text,
	"total_height" numeric(10, 2),
	"total_width" numeric(10, 2),
	"total_length" numeric(10, 2)
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id_user" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"firstname" varchar(100) NOT NULL,
	"lastname" varchar(100) NOT NULL,
	"email" varchar(255) NOT NULL,
	"password" text NOT NULL,
	"role" varchar(20) DEFAULT 'customer' NOT NULL,
	"address" text,
	"ph_number" varchar(10),
	CONSTRAINT "users_email_unique" UNIQUE("email"),
	CONSTRAINT "users_ph_number_unique" UNIQUE("ph_number")
);
--> statement-breakpoint
ALTER TABLE "models" ADD CONSTRAINT "models_id_spec_technical_specs_id_spec_fk" FOREIGN KEY ("id_spec") REFERENCES "public"."technical_specs"("id_spec") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "models" ADD CONSTRAINT "models_id_brand_brands_id_brand_fk" FOREIGN KEY ("id_brand") REFERENCES "public"."brands"("id_brand") ON DELETE no action ON UPDATE no action;