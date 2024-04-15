alter table "public"."pokemon" drop column "#";

alter table "public"."pokemon" drop column "Attack";

alter table "public"."pokemon" drop column "Defense";

alter table "public"."pokemon" drop column "Generation";

alter table "public"."pokemon" drop column "HP";

alter table "public"."pokemon" drop column "Legendary";

alter table "public"."pokemon" drop column "Name";

alter table "public"."pokemon" drop column "Sp. Atk";

alter table "public"."pokemon" drop column "Sp. Def";

alter table "public"."pokemon" drop column "Speed";

alter table "public"."pokemon" drop column "Total";

alter table "public"."pokemon" drop column "Type 1";

alter table "public"."pokemon" drop column "Type 2";

alter table "public"."pokemon" add column "attack" bigint;

alter table "public"."pokemon" add column "defense" bigint;

alter table "public"."pokemon" add column "gen" bigint;

alter table "public"."pokemon" add column "hp" bigint;

alter table "public"."pokemon" add column "legendary" boolean;

alter table "public"."pokemon" add column "name" text;

alter table "public"."pokemon" add column "number" bigint not null;

alter table "public"."pokemon" add column "sp_atk" bigint;

alter table "public"."pokemon" add column "sp_def" bigint;

alter table "public"."pokemon" add column "speed" bigint;

alter table "public"."pokemon" add column "total" bigint;

alter table "public"."pokemon" add column "type_1" text;

alter table "public"."pokemon" add column "type_2" text;


