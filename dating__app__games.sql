-- ======================================================
-- DATING APP: MATCH BY GAMES & HOBBIES
-- For MySQL (run this entire script)
-- ======================================================

-- Clean start
DROP DATABASE IF EXISTS dating_app;
CREATE DATABASE dating_app;
USE dating_app;

-- ======================================================
-- TABLES
-- ======================================================

-- Users
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    email VARCHAR(255) UNIQUE,
    gender VARCHAR(20),
    birthdate DATE,
    bio TEXT,
    city VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Games (e.g., video games, board games)
CREATE TABLE games (
    id INT PRIMARY KEY AUTO_INCREMENT,
    game_name VARCHAR(100) UNIQUE
);

-- Hobbies (e.g., running, cooking, reading)
CREATE TABLE hobbies (
    id INT PRIMARY KEY AUTO_INCREMENT,
    hobby_name VARCHAR(100) UNIQUE
);

-- Which games each user plays (many-to-many)
CREATE TABLE user_games (
    user_id INT,
    game_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (game_id) REFERENCES games(id) ON DELETE CASCADE,
    PRIMARY KEY (user_id, game_id)
);

-- Which hobbies each user enjoys
CREATE TABLE user_hobbies (
    user_id INT,
    hobby_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (hobby_id) REFERENCES hobbies(id) ON DELETE CASCADE,
    PRIMARY KEY (user_id, hobby_id)
);

-- Swipes (like / pass)
CREATE TABLE swipes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    swiper_id INT,
    swiped_id INT,
    swipe_type ENUM('like', 'pass'),
    swipe_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (swiper_id) REFERENCES users(id),
    FOREIGN KEY (swiped_id) REFERENCES users(id),
    UNIQUE KEY (swiper_id, swiped_id)
);

-- Matches (when both like each other)
CREATE TABLE matches (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user1_id INT,
    user2_id INT,
    match_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user1_id) REFERENCES users(id),
    FOREIGN KEY (user2_id) REFERENCES users(id),
    UNIQUE KEY (user1_id, user2_id)
);

-- Messages
CREATE TABLE messages (
    id INT PRIMARY KEY AUTO_INCREMENT,
    match_id INT,
    sender_id INT,
    message_text TEXT,
    sent_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_read BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (match_id) REFERENCES matches(id),
    FOREIGN KEY (sender_id) REFERENCES users(id)
);

-- ======================================================
-- SAMPLE DATA
-- ======================================================

-- Users
INSERT INTO users (name, email, gender, birthdate, bio, city) VALUES
('Alice', 'alice@example.com', 'female', '1995-06-15', 'Love gaming and outdoor runs', 'New York'),
('Bob', 'bob@example.com', 'male', '1992-11-02', 'Valorant addict, foodie', 'Los Angeles'),
('Carol', 'carol@example.com', 'female', '1998-04-23', 'Chess and cooking queen', 'Chicago'),
('Dave', 'dave@example.com', 'male', '1990-09-10', 'Minecraft builder, runner', 'Austin'),
('Eve', 'eve@example.com', 'non-binary', '1993-12-01', 'Reading and hiking', 'Seattle'),
('Frank', 'frank@example.com', 'male', '1996-07-19', 'Competitive gamer, loves pizza', 'New York'),
('Grace', 'grace@example.com', 'female', '1994-03-22', 'Yoga and Valorant', 'Boston');

-- Games
INSERT INTO games (game_name) VALUES
('Minecraft'),
('Valorant'),
('Chess'),
('Among Us'),
('League of Legends');

-- Hobbies
INSERT INTO hobbies (hobby_name) VALUES
('Running'),
('Cooking'),
('Reading'),
('Hiking'),
('Yoga'),
('Foodie'),
('Gaming');

-- User-Games (who plays which game)
INSERT INTO user_games (user_id, game_id) VALUES
(1, 1), -- Alice plays Minecraft
(1, 2), -- Alice plays Valorant
(2, 2), -- Bob plays Valorant
(2, 5), -- Bob plays League
(3, 3), -- Carol plays Chess
(3, 4), -- Carol plays Among Us
(4, 1), -- Dave plays Minecraft
(4, 3), -- Dave plays Chess
(5, 4), -- Eve plays Among Us
(5, 1), -- Eve plays Minecraft
(6, 2), -- Frank plays Valorant
(6, 5), -- Frank plays League
(7, 2), -- Grace plays Valorant
(7, 1); -- Grace plays Minecraft

-- User-Hobbies
INSERT INTO user_hobbies (user_id, hobby_id) VALUES
(1, 1), -- Alice runs
(1, 7), -- Alice likes gaming
(2, 2), -- Bob cooks
(2, 7), -- Bob likes gaming
(2, 6), -- Bob is a foodie
(3, 2), -- Carol cooks
(3, 7), -- Carol games
(4, 1), -- Dave runs
(4, 7), -- Dave games
(5, 3), -- Eve reads
(5, 4), -- Eve hikes
(6, 7), -- Frank games
(6, 6), -- Frank foodie
(7, 5), -- Grace does yoga
(7, 7); -- Grace games

-- Example swipes (Alice likes Bob, Bob likes Alice → match)
INSERT INTO swipes (swiper_id, swiped_id, swipe_type) VALUES
(1, 2, 'like'),
(2, 1, 'like');

-- Create match for mutual like
INSERT INTO matches (user1_id, user2_id) VALUES (1, 2);

-- Example message between Alice and Bob
INSERT INTO messages (match_id, sender_id, message_text) VALUES
(1, 1, 'Hey Bob! We both love Valorant and gaming!');

-- ======================================================
-- QUERIES YOU WILL USE
-- ======================================================

-- 1. Show all users
SELECT * FROM users;

-- 2. See who plays which game
SELECT u.name, g.game_name 
FROM user_games ug
JOIN users u ON ug.user_id = u.id
JOIN games g ON ug.game_id = g.id
ORDER BY u.name;

-- 3. See who has which hobby
SELECT u.name, h.hobby_name
FROM user_hobbies uh
JOIN users u ON uh.user_id = u.id
JOIN hobbies h ON uh.hobby_id = h.id
ORDER BY u.name;

-- 4. FIND POTENTIAL MATCHES FOR A USER (e.g., Alice, id=1)
--    Based on shared games + shared hobbies, excluding already swiped or matched users

-- First, create a helper view (optional but makes query clean)
-- This query computes total shared interests (games + hobbies) between user 1 and everyone else

SELECT 
    u.id,
    u.name,
    u.city,
    u.bio,
    (
        -- Shared games count
        (SELECT COUNT(*) FROM user_games ug1 
         JOIN user_games ug2 ON ug1.game_id = ug2.game_id 
         WHERE ug1.user_id = 1 AND ug2.user_id = u.id)
        +
        -- Shared hobbies count
        (SELECT COUNT(*) FROM user_hobbies uh1 
         JOIN user_hobbies uh2 ON uh1.hobby_id = uh2.hobby_id 
         WHERE uh1.user_id = 1 AND uh2.user_id = u.id)
    ) AS total_shared_interests
FROM users u
WHERE u.id != 1  -- not myself
  AND u.id NOT IN (
      -- exclude users already swiped by me
      SELECT swiped_id FROM swipes WHERE swiper_id = 1
  )
  AND u.id NOT IN (
      -- exclude users already matched with me
      SELECT user2_id FROM matches WHERE user1_id = 1
      UNION
      SELECT user1_id FROM matches WHERE user2_id = 1
  )
HAVING total_shared_interests > 0
ORDER BY total_shared_interests DESC;

-- Expected result: Alice (id=1) shares Valorant with Bob (id=2, shared= games:1 + hobbies:1? Actually Alice: games(Minecraft,Valorant) hobbies(Running,Gaming); Bob: games(Valorant,League) hobbies(Cooking,Gaming,Foodie) -> shared: Valorant(game) + Gaming(hobby) = total 2. Dave shares Minecraft (game) and Running (hobby) = 2. etc.

-- 5. Get all matches for a user with their shared interests count
SELECT 
    m.id AS match_id,
    CASE WHEN m.user1_id = 1 THEN u2.name ELSE u1.name END AS matched_with,
    m.match_time,
    (SELECT COUNT(*) FROM messages WHERE match_id = m.id AND is_read = 0 AND sender_id != 1) AS unread_count
FROM matches m
JOIN users u1 ON u1.id = m.user1_id
JOIN users u2 ON u2.id = m.user2_id
WHERE (m.user1_id = 1 OR m.user2_id = 1)
ORDER BY m.match_time DESC;

-- 6. Conversation between matched users
SELECT u.name AS sender, m.message_text, m.sent_time, m.is_read
FROM messages m
JOIN users u ON m.sender_id = u.id
WHERE m.match_id = 1
ORDER BY m.sent_time;

-- 7. Mark a message as read (user 2 reads message from match 1)
UPDATE messages SET is_read = TRUE 
WHERE match_id = 1 AND sender_id != 2;

-- 8. User swipes right on a potential match (e.g., Alice likes Dave)
INSERT INTO swipes (swiper_id, swiped_id, swipe_type) VALUES (1, 4, 'like');

