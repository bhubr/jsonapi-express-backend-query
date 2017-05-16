-- Core tables
-- use test;
CREATE TABLE users (
  -- Core fields
  -- 
  id  SERIAL PRIMARY KEY,
  username varchar(255),
  email varchar(255),
  password varchar(255),
  "profileId" integer
);

-- ALTER TABLE users ADD COLUMN id integer PRIMARY KEY;

