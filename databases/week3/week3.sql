USE meal_sharing;

CREATE TABLE Meal (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    location VARCHAR(255),
    `when` DATETIME,
    max_reservations INT,
    price DECIMAL(10, 2),
    created_date DATE
);

CREATE TABLE Reservation (
    id INT PRIMARY KEY AUTO_INCREMENT,
    number_of_guests INT,
    meal_id INT,
    created_date DATE,
    contact_phonenumber VARCHAR(25),
    contact_name VARCHAR(255),
    contact_email VARCHAR(255) UNIQUE,
    FOREIGN KEY (meal_id) REFERENCES Meal (id) ON DELETE SET NULL
);

CREATE TABLE Review (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255),
    description VARCHAR(255),
    meal_id INT,
    stars INT,
    created_date DATE,
    FOREIGN KEY (meal_id) REFERENCES Meal (id) ON DELETE SET NULL
);

INSERT INTO
    Meal (
        title,
        description,
        location,
        `when`,
        max_reservations,
        price,
        created_date
    )
VALUES (
        'Indian Feast',
        'A traditional Indian meal with spicy curries and naan bread.',
        'New Delhi, India',
        '2024-09-10 19:00:00',
        50,
        15.00,
        '2024-09-05'
    ),
    (
        'Chinese Delights',
        'An array of Chinese dishes including dim sum, noodles, and dumplings.',
        'Beijing, China',
        '2024-09-15 18:30:00',
        40,
        20.00,
        '2024-09-05'
    ),
    (
        'Asian Fusion',
        'A mix of popular Asian dishes from Japan, Korea, and Thailand.',
        'Bangkok, Thailand',
        '2024-09-20 20:00:00',
        30,
        25.00,
        '2024-09-05'
    ),
    (
        'Italian Pasta Night',
        'Homemade pasta served with fresh sauces and Italian wine.',
        'Rome, Italy',
        '2024-09-12 19:30:00',
        35,
        18.00,
        '2024-09-05'
    ),
    (
        'French Gourmet Experience',
        'A 5-course meal featuring classic French cuisine.',
        'Paris, France',
        '2024-09-22 19:00:00',
        25,
        50.00,
        '2024-09-05'
    ),
    (
        'Mexican Fiesta',
        'A vibrant Mexican meal with tacos, burritos, and enchiladas.',
        'Mexico City, Mexico',
        '2024-09-18 18:00:00',
        60,
        12.00,
        '2024-09-05'
    ),
    (
        'Thai Street Food',
        'A variety of popular Thai street food including Pad Thai and Satay.',
        'Bangkok, Thailand',
        '2024-09-25 20:00:00',
        45,
        10.00,
        '2024-09-05'
    );

INSERT INTO
    Reservation (
        number_of_guests,
        meal_id,
        created_date,
        contact_phonenumber,
        contact_name,
        contact_email
    )
VALUES (
        4,
        1,
        '2024-09-06',
        '+91 9876543210',
        'Ravi Kumar',
        'ravi.kumar@example.com'
    ),
    (
        2,
        2,
        '2024-09-07',
        '+86 1234567890',
        'Wei Zhang',
        'wei.zhang@example.com'
    ),
    (
        3,
        3,
        '2024-09-08',
        '+66 9876543210',
        'Somsak Yai',
        'somsak.yai@example.com'
    ),
    (
        5,
        4,
        '2024-09-09',
        '+39 1234567890',
        'Giovanni Rossi',
        'giovanni.rossi@example.com'
    ),
    (
        1,
        5,
        '2024-09-10',
        '+33 9876543210',
        'Marie Dupont',
        'marie.dupont@example.com'
    ),
    (
        6,
        6,
        '2024-09-11',
        '+52 1234567890',
        'Carlos Perez',
        'carlos.perez@example.com'
    ),
    (
        2,
        7,
        '2024-09-12',
        '+66 1234567890',
        'Napat Chai',
        'napat.chai@example.com'
    );

INSERT INTO
    Review (
        title,
        description,
        meal_id,
        stars,
        created_date
    )
VALUES (
        'Spicy and Authentic',
        'The Indian meal was amazing! Perfect balance of spices.',
        1,
        5,
        '2024-09-11'
    ),
    (
        'Delicious Dumplings',
        'The dim sum was fantastic, especially the dumplings.',
        2,
        4,
        '2024-09-16'
    ),
    (
        'Great Mix of Asian Flavors',
        'A lovely combination of different Asian cuisines. Loved it!',
        3,
        5,
        '2024-09-21'
    ),
    (
        'Best Pasta Ever',
        'The pasta was fresh and the sauces were full of flavor.',
        4,
        5,
        '2024-09-13'
    ),
    (
        'Amazing French Cuisine',
        'The 5-course meal was exquisite. Highly recommended!',
        5,
        5,
        '2024-09-23'
    ),
    (
        'Festive Atmosphere',
        'The Mexican food was vibrant and full of flavor.',
        6,
        4,
        '2024-09-19'
    ),
    (
        'Authentic Thai Street Food',
        'Loved the variety and authenticity of the street food.',
        7,
        5,
        '2024-09-26'
    );

------ QUERIES -----
--1. Meal
select * from `Meal`;

INSERT INTO
    Meal (
        title,
        description,
        location,
        `when`,
        max_reservations,
        price,
        created_date
    )
VALUES (
        'Danish Hygge Dinner',
        'Cozy Danish dinner with smørrebrød and local delicacies',
        'Copenhagen, Denmark',
        '2024-09-30 19:00:00',
        12,
        40.00,
        '2024-09-10'
    );

SELECT * from Meal WHERE id = 4;

UPDATE Meal
SET
    title = "Indian Curry Night",
    description = "Spicy and flavorful Indian curries",
    created_date = '2024-09-13'
WHERE
    id = 1;

DELETE FROM Meal WHERE id = 4;

--Reservation
select * from Reservation;

INSERT INTO
    Reservation (
        number_of_guests,
        meal_id,
        created_date,
        contact_phonenumber,
        contact_name,
        contact_email
    )
VALUES (
        2,
        1,
        '2024-09-07',
        '+91 9945461029',
        'Swamy',
        'vm.swamy@example.com'
    );

INSERT INTO
    Reservation (
        number_of_guests,
        meal_id,
        created_date,
        contact_phonenumber,
        contact_name,
        contact_email
    )
VALUES (
        1,
        1,
        '2024-09-09',
        '+91 9739314123',
        'Sujatha',
        'kh.sujatha@example.com'
    );

select * from Reservation WHERE id = 2;

UPDATE Reservation SET number_of_guests = 1 WHERE id = 3;

DELETE FROM Reservation WHERE id = 1;

--Review Table
select * from Review;

INSERT INTO
    Review (
        title,
        description,
        meal_id,
        stars,
        created_date
    )
VALUES (
        'Cheese and Wine',
        'Loved the Cheese busters with Red Wine',
        5,
        4,
        '2024-09-15'
    );

UPDATE Review
SET
    stars = 5,
    description = "enjoyed the tanginess of mexican food"
WHERE
    id = 6;

DELETE FROM Review WHERE id = 8;

----- ADDITIONAL QUERIES ----

select * from `Meal` WHERE price < 25;

--Get meals that still has available reservations
select Meal.id, Meal.max_reservations, Meal.title, COALESCE(
        SUM(Reservation.number_of_guests), 0
    ) AS sum_of_guests
FROM `Meal`
    LEFT JOIN `Reservation` ON Meal.id = `Reservation`.meal_id
GROUP BY
    Meal.id,
    Meal.max_reservations,
    Meal.title
HAVING
    sum_of_guests < Meal.max_reservations;

--Get only specific number of meals fx return only 5 meals
select * from Meal LIMIT 5;

select * from Meal WHERE title LIKE 'Indian%';

--Get meals that has been created between two dates
select *
from Meal
WHERE
    created_date BETWEEN '2024-09-09' AND '2024-09-14';

--Get reservations for a specific meal sorted by created_date
select * from `Reservation` WHERE meal_id = 1 ORDER BY created_date;

--Sort all meals by average number of stars in the reviews
select Meal.id, Meal.description, Meal.location, ROUND(AVG(Review.stars), 2) AS avg_stars
FROM Meal
    LEFT JOIN Review ON Meal.id = Review.meal_id
GROUP BY
    Meal.id
ORDER BY avg_stars;

--Get the meals that have good reviews
select Meal.title, Meal.id, ROUND(AVG(Review.stars), 2) AS avg_stars
FROM `Meal`
    JOIN Review ON Meal.id = `Review`.meal_id
GROUP BY
    Meal.id
HAVING
    avg_stars >= 2;