INSERT INTO department (name)
VALUES ("Personal Training"), ("Sales"), ("Corporate"), ("Front Desk"), ("Marketing");

INSERT INTO role (title, salary, department_id)
VALUE ("Head of Personal Training", 25000.00, 2), ("Manager", 600000.00, 3), ("Area Director", 600000.00, 4), ("Shake Maker", 200000.00, 1), ("Social Media Rep", 800000.00, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ("Sam", "Shull", 1, 3), ("Brandon", "Price", 1, 1), ("Tony", "Dadindo", 3, 2), ("Steve", "Jobs", 5, 2), ("Spider", "Man", 5, 2);