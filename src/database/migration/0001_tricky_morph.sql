CREATE TABLE "sales" (
	"id_sale" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"id_seller" uuid NOT NULL,
	"car_name" varchar(100) NOT NULL,
	"payment_type" varchar(50) NOT NULL,
	"total_amount" numeric NOT NULL,
	"sale_date" timestamp DEFAULT now() NOT NULL
);
