-- Revert toutsur:demarrage from pg

BEGIN;

DROP TABLE users, articles, comments, categories, has_saved, has, stocks;

COMMIT;
