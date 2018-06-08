CREATE TABLE person (
    id SERIAL PRIMARY KEY,
    username VARCHAR (80) UNIQUE NOT NULL,
    password VARCHAR (1000) NOT NULL
);

CREATE TABLE "ride" (
	"id" SERIAL PRIMARY KEY,
	"date" DATE NOT NULL DEFAULT CURRENT_DATE,
	"terrain" VARCHAR (80) NOT NULL,
	"address" VARCHAR (1000) NOT NULL,
	"start_time" TIME NOT NULL,
	"length" INT,
	"person_id" INT REFERENCES "person" ON DELETE CASCADE
	);

    CREATE TABLE "join_ride" (
	"id" SERIAL PRIMARY KEY,
	"person_id" INT REFERENCES "person" ON DELETE CASCADE,
	"ride_id" INT REFERENCES "ride" ON DELETE CASCADE,
	CONSTRAINT uc_tab UNIQUE (person_id, ride_id)
	);

-- * May change as app progresses, will update, database is currently titled "prime_app"