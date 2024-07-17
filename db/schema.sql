DROP DATABASE IF EXISTS bitebyte;
CREATE DATABASE bitebyte;

\c bitebyte

CREATE TABLE vampires (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    date_turned DATE NOT NULL,
    location TEXT,
    age INT NOT NULL,
    main_diet TEXT NOT NULL,
    power TEXT,
    is_dangerous BOOLEAN NOT NULL,
    date_documented DATE DEFAULT CURRENT_DATE
)