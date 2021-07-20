-- Revert toutsur:demarrage from pg

BEGIN;

DROP TABLE users, articles, comments, categories, user_has_categories, articles_has_categories, user_stocks_articles;

COMMIT;
