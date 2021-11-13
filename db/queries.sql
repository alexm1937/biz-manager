
SELECT employees.first_name AS first_name, positions.position_title AS position_title
FROM employees
JOIN positions ON employees.position = position_id;