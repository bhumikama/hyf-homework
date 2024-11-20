-- Active: 1724582755512@@127.0.0.1@3306@social_media
USE social_media;

CREATE TABLE User (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    registered_date DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Post (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    created_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_date DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES User (id) ON DELETE CASCADE
);

CREATE TABLE Comment (
    id INT PRIMARY KEY AUTO_INCREMENT,
    content TEXT NOT NULL,
    created_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_date DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    user_id INT,
    post_id INT,
    parent_comment_id INT DEFAULT NULL,
    FOREIGN KEY (user_id) REFERENCES User (id) ON DELETE CASCADE,
    FOREIGN KEY (post_id) REFERENCES Post (id) ON DELETE CASCADE,
    FOREIGN KEY (parent_comment_id) REFERENCES Comment (id) ON DELETE CASCADE
);

CREATE TABLE Reaction (
    id INT PRIMARY KEY AUTO_INCREMENT,
    type ENUM(
        'like',
        'highfive',
        'laugh',
        'cry'
    ) NOT NULL,
    post_id INT DEFAULT NULL,
    comment_id INT DEFAULT NULL,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES User (id) ON DELETE CASCADE,
    FOREIGN KEY (post_id) REFERENCES Post (id) ON DELETE CASCADE,
    FOREIGN KEY (comment_id) REFERENCES Comment (id) ON DELETE CASCADE,
    CONSTRAINT check_post_or_comment UNIQUE (
        type,
        post_id,
        comment_id,
        user_id
    ),
    CHECK (
        (
            post_id IS NOT NULL
            AND comment_id IS NULL
        )
        OR (
            post_id IS NULL
            AND comment_id IS NOT NULL
        )
    )
);

CREATE TABLE Friendship (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id1 INT,
    user_id2 INT,
    UNIQUE (user_id1, user_id2),
    FOREIGN KEY (user_id1) REFERENCES User (id) ON DELETE CASCADE,
    FOREIGN KEY (user_id2) REFERENCES User (id) ON DELETE CASCADE
);

INSERT INTO
    User (
        name,
        email,
        password,
        registered_date
    )
VALUES (
        'Larry',
        'larry@example.com',
        'exit123',
        '2024-01-01 10:00:00'
    ),
    (
        'Mars',
        'mars@example.com',
        'home@23',
        '2024-01-02 13:23:00'
    );

INSERT INTO
    Post (
        title,
        content,
        created_date,
        user_id
    )
VALUES (
        'My dream car',
        'Got an Audi xxx',
        '2024-01-03 12:00:00',
        1
    ),
    (
        'Love my dogs',
        'Meet Ceaser and Ruby',
        '2024-01-04 13:00:00',
        2
    );

INSERT INTO
    Comment (
        content,
        post_id,
        user_id,
        parent_comment_id
    )
VALUES ('Congrats!', 1, 2, NULL),
    ('cute', 2, 2, 1);

-- Insert Reactions
INSERT INTO
    Reaction (type, post_id, user_id)
VALUES ('like', 1, 2),
    ('like', 2, 1);

INSERT INTO
    Reaction (type, comment_id, user_id)
VALUES ('like', 1, 2),
    ('highfive', 2, 1);
-- Insert Friendships
INSERT INTO Friendship (user_id1, user_id2) VALUES (1, 2);