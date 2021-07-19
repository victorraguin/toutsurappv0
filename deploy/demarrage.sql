-- Deploy toutsur-app:demarrage to pg

BEGIN;

CREATE TABLE users(
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" VARCHAR(32) NOT NULL UNIQUE,
    "email" VARCHAR(128) NOT NULL UNIQUE,
    -- Cette ligne peut bugger à cause du CHECK
    "password" VARCHAR(128) NOT NULL CHECK(LENGTH('password')>=8),
    "profile_picture" TEXT,
    -- Peut bugger sur le default
    "is_admin" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE articles(
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "title" VARCHAR(128) NOT NULL,
    -- Ligne retirée car déjà présente en tant que table qui lui est propre
    -- "categories" VARCHAR(32) NOT NULL,
    "author" VARCHAR(32) NOT NULL,
    "user_email" VARCHAR(128),
    "picture" TEXT NOT NULL DEFAULT 'no picture',
    "URL" TEXT,
    "description" TEXT,
    "upvotes" INT DEFAULT 0,
    -- Revoir s'il faut le laisser en booléen ou l'évoluer en texte
    "report" BOOLEAN DEFAULT false,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id_user" INT REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE comments(
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    -- Doute quant à l'utilisation de cette ligne, le nom de l'utilisateur étant récupéré dans la table users
    "user_name" VARCHAR(32) NOT NULL,
    "description" TEXT NOT NULL,
    -- Revoir s'il faut le laisser en booléen ou l'évoluer en texte
    "report" BOOLEAN DEFAULT false,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id_user" INT REFERENCES users(id) ON DELETE CASCADE,
    "id_article" INT REFERENCES articles(id) ON DELETE CASCADE
);

CREATE TABLE categories(
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" VARCHAR(32) NOT NULL UNIQUE,
    "picture" TEXT NOT NULL DEFAULT 'no picture',
    "color" VARCHAR(32) NOT NULL
);

CREATE TABLE user_has_categories(
    "user_id" INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    "category_id" INT NOT NULL REFERENCES categories(id) ON DELETE CASCADE
);

CREATE TABLE articles_has_categories(
    "article_id" INT NOT NULL REFERENCES articles(id) ON DELETE CASCADE,
    "category_id" INT NOT NULL REFERENCES categories(id) ON DELETE CASCADE
);

CREATE TABLE user_stocks_articles(
    "user_id" INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    "article_id" INT NOT NULL REFERENCES articles(id) ON DELETE CASCADE
);

COMMIT;
