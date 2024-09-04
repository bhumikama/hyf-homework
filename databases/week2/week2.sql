------Part A----

--Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
insert into
    task (
        title,
        description,
        created,
        updated,
        due_date,
        status_id,
        user_id
    )
values (
        'Set reminder for tomorrow',
        'need to get vaccine for Misty',
        '2024-09-03 20:11:26',
        '2024-09-03 20:37:26',
        '2024-10-03 20:11:26',
        2,
        7
    );

select LAST_INSERT_ID();

--Change the title of a task
UPDATE task
SET
    title = "Bring medicines"
WHERE
    id = LAST_INSERT_ID();

--change task due date
UPDATE task
SET
    due_date = '2024-10-01 08:11:26'
WHERE
    id = LAST_INSERT_ID();

--change task status
UPDATE task
SET
    status_id = (
        select id
        from status
        WHERE
            name = 'Not Started'
    )
WHERE
    id = LAST_INSERT_ID();

--Mark a task as complete
UPDATE task
SET
    status_id = (
        select id
        from status
        WHERE
            name = 'Done'
    )
WHERE
    id = LAST_INSERT_ID();

--delete a task
DELETE FROM task WHERE status_id = LAST_INSERT_ID();

USE NEW;

--------------------
------PART 2 ------
--------------------

CREATE TABLE Class (
    id INT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    begins DATE,
    ends DATE
);

CREATE TABLE Student (
    id INT PRiMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    phone VARCHAR(25) NOT NuLL UNIQUE,
    class_id INT,
    FOREIGN KEY (class_id) REFERENCES Class (id)
);

--Create an index on the name column of the student table.
CREATE INDEX index_student ON Student (name);
--Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished
ALTER TABLE Class
ADD COLUMN status ENUM(
    'not-started',
    'ongoing',
    'finished'
) NOT NULL;

USE TEST;

SHOW TABLES;

--------------------
------PART 3 ------
--------------------

--Get all the tasks assigned to users whose email ends in @spotify.com
select t.id, t.title, t.description, u.name, u.email
from
    user u
    JOIN user_task ut ON u.id = ut.user_id
    JOIN task t ON t.id = ut.task_id
WHERE
    u.email LIKE '%@spotify.com';

--Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT t.id, t.title, t.description, t.created, t.updated, t.due_date, s.name AS status
FROM
    user u
    JOIN user_task ut ON u.id = ut.user_id
    JOIN task t ON ut.task_id = t.id
    JOIN status s ON t.status_id = s.id
WHERE
    u.name = 'Donald Duck'
    AND s.name = 'Not started';

--Get all the tasks for 'Maryrose Meadows' that were created in september
select t.id, t.title, t.description, t.created
from
    user u
    JOIN user_task ut ON u.id = ut.user_id
    JOIN task t ON t.id = ut.task_id
WHERE
    u.name = 'Maryrose Meadows'
    AND MONTH(t.created) = 09;

--Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc.
select MONTH(created) AS Month_Number, COUNT(*) AS task_per
FROM task
GROUP BY
    MONTH(created)
ORDER BY MONTH(created);