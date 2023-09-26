INSERT INTO departments (department_name)
VALUES ("Meat Department"),
       ("Grocery Department"),
       ("Produce Department"),
       ("Prepared Foods Department");

INSERT INTO roles (title, salary, department_id)
VALUES ("Butcher", 30000, 1),
       ("Stocker", 20000, 2),
       ("Cook", 25000, 4),
       ("Team Lead", 34000, 4),
       ("Fresh Packer", 20000, 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Bob", "Bobson", 4, NULL),
       ("Joe", "Joeson", 2, 1),
       ("Mary", "Maryson", 3, 1),
       ("Rick", "James", 1, 1),
       ("Herb", "Herbert", 5, 1);
