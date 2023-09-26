class Query {
    constructor(response) {
        this.response = response;
    }
};

class Department extends Query {
    constructor(response) {
        super(response);
    }

    view() {
        db.query(`SELECT * FROM departments`, function (err, results) {
            console.log(results);
        });
    }

    add(response) {
        db.query(`INSERT INTO departments (name) VALUES ("${response})`)
    }
}

class Role extends Query {
    constructor(response) {
        super(response);
    }

    view() {
        db.query(`SELECT * FROM role`, function (err, results) {
            console.log(results);
        })
    }

    add() {}
}

class Employee extends Query {
    constructor(response) {
        super(response);
    }

    view() {
        db.query(`SELECT * FROM employee`, function (err, results) {
            console.log(results);
        })
    }
    
    add() {}

    update() {}
}

module.exports = {
    Department,
    Role,
    Employee
}