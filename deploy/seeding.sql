-- Deploy toutsur:seeding to pg

BEGIN;

INSERT INTO "users" ("name", "email", "password") VALUES
('Commandant Shepard', 'shepard-commander@alliance.ea', 'bang'),
('Garrus Vakarian', 'archangel@omega.ea', 'calibration');

INSERT INTO "articles" ("title", "author", "description") VALUES
('Francis Lalanne est-il un danger pour le monde de la musique ?', 'Trolge', 'lorem ipsum'),
('World of Warcraft perd ses joueurs : les serveurs de Final Fantasy XIV peinent à suivre la cadence', 'Yoshi-P', 'petite description');

INSERT INTO "comments" ("user_name", "description") VALUES
('sourd-du-14', 'N''importe quoi, Francis fait de l''excellente musique !'),
('Artorias', 'Quelle bande de traîtres...');

INSERT INTO "categories" ("name", "color") VALUES
('Musique', 'blue'),
('Jeux vidéos', 'red'),
('Sport', 'green'),
('Science', 'white'),
('Art', 'pink');

COMMIT;
