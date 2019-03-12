ALTER TABLE IF EXISTS ONLY public.users
  DROP CONSTRAINT IF EXISTS pk_users_id CASCADE ;


DROP TABLE IF EXISTS public.users;
DROP SEQUENCE IF EXISTS public.users_id_seq;
CREATE TABLE users
(
  id       serial NOT NULL,
  username varchar UNIQUE,
  password varchar
);



ALTER TABLE ONLY users
  ADD CONSTRAINT pk_users_id PRIMARY KEY (id);
