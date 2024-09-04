---CLASS EXERCISE---

--Get tasks assigned to Pavel
select COUNT(*) AS pavels_task
from task
    JOIN user on user.id = task.user_id
WHERE
    user.name LIKE '%Pavel%';

--Find how many tasks each user is responsible for;
select user.name, COUNT(*) AS count_per_user
from `user`
    JOIN task ON task.user_id = user.id
GROUP BY
    user.id;

--Find how many tasks with a status=Done each user is responsible for;
select user.id, COUNT(*)
from `user`
    JOIN task ON user.id = task.user_id
    JOIN status ON status.id = task.status_id
WHERE
    status.name = 'Done'
GROUP BY
    user.id;