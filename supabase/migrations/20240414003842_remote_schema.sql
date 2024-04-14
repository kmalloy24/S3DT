create table "public"."pokemon" (
    "#" bigint not null,
    "Name" text,
    "Type 1" text,
    "Type 2" text,
    "Total" bigint,
    "HP" bigint,
    "Attack" bigint,
    "Defense" bigint,
    "Sp. Atk" bigint,
    "Sp. Def" bigint,
    "Speed" bigint,
    "Generation" bigint,
    "Legendary" boolean,
    "id" bigint generated by default as identity not null
);


CREATE UNIQUE INDEX pokemon_id_key ON public.pokemon USING btree (id);

CREATE UNIQUE INDEX pokemon_pkey ON public.pokemon USING btree (id);

alter table "public"."pokemon" add constraint "pokemon_pkey" PRIMARY KEY using index "pokemon_pkey";

alter table "public"."pokemon" add constraint "pokemon_id_key" UNIQUE using index "pokemon_id_key";

grant delete on table "public"."pokemon" to "anon";

grant insert on table "public"."pokemon" to "anon";

grant references on table "public"."pokemon" to "anon";

grant select on table "public"."pokemon" to "anon";

grant trigger on table "public"."pokemon" to "anon";

grant truncate on table "public"."pokemon" to "anon";

grant update on table "public"."pokemon" to "anon";

grant delete on table "public"."pokemon" to "authenticated";

grant insert on table "public"."pokemon" to "authenticated";

grant references on table "public"."pokemon" to "authenticated";

grant select on table "public"."pokemon" to "authenticated";

grant trigger on table "public"."pokemon" to "authenticated";

grant truncate on table "public"."pokemon" to "authenticated";

grant update on table "public"."pokemon" to "authenticated";

grant delete on table "public"."pokemon" to "service_role";

grant insert on table "public"."pokemon" to "service_role";

grant references on table "public"."pokemon" to "service_role";

grant select on table "public"."pokemon" to "service_role";

grant trigger on table "public"."pokemon" to "service_role";

grant truncate on table "public"."pokemon" to "service_role";

grant update on table "public"."pokemon" to "service_role";


