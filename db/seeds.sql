

INSERT INTO department (dept_name)
VALUES
('Engineering'),
('Accounting'),
('Grunts');

INSERT INTO positions (position_id, position_title, salary, dept_id)
VALUES
(1, 'Lead Engineer', 100000.75, 1),
(2, 'Senior Engineer', 75199.00, 1),
(3, 'Junior Engineer', 45000.00, 1),
(4, 'Lead Accountant', 100000.75, 2),
(5, 'Accountant Teamate', 75000.00, 2),
(6, 'General Labor', 39500.00, 3);

INSERT INTO employees (id, first_name, last_name, position)
VALUES 
(3, 'alex', 'mcdaniel', 1),
(2, 'joe', 'butler', 5);


