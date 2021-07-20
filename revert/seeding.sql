-- Revert toutsur:seeding from pg

BEGIN;

DELETE FROM users;
DELETE FROM articles;
DELETE FROM comments;
DELETE FROM categories;

COMMIT;
