--1.Find out how many tasks are in the task table
select COUNT(*) AS total_tasks FROM task;

--2.Find out how many tasks in the task table do not have a valid due date
select COUNT(*) FROM task WHERE due_date IS NULL;

--3.Find all the tasks that are marked as done
select title, description from task WHERE status_id = 3;

--4.Find all the tasks that are not marked as done
select title, description from task WHERE status_id != 3;

--5.Get all the tasks, sorted with the most recently created firs
select * from task ORDER BY created DESC;

--6.Get the single most recently created task
select * from task ORDER BY created DESC LIMIT 1;

--7.Get the title and due date of all tasks where the title or description contains database
select title, due_date
from task
WHERE
    title LIKE '%database%'
    OR description LIKE '%database%';

--8.Get the title and status (as text) of all tasks
select CONCAT(task.title, "-", status.name) AS taskTitle_status
FROM task
    JOIN status ON task.status_id = status.id;

--9.Get the name of each status, along with a count of how many tasks have that status
select status.name, COUNT(task.status_id) AS status_count
FROM status
    JOIN task ON task.status_id = status.id
GROUP BY
    task.status_id;

--10.Get the names of all statuses, sorted by the status with most tasks first
select status.name, COUNT(task.status_id) AS status_count
FROM status
    JOIN task on task.status_id = status.id
GROUP BY
    task.status_id
ORDER BY status_count DESC;