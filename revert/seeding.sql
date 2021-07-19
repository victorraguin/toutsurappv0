-- Revert toutsur:seeding from pg

BEGIN;

DELETE FROM users;
DELETE FROM articles;

COMMIT;
