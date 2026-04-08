
let.employees = [
    {
        name: "Anurag Yadav",
        id: 101,
        department: "IT",
        salary: 50000,
        workexp:5+"years"
    },
    {
        name: "Sujal yadav",
        id: 102,
        department: "HR",
        salary: 150000,
        workexp:15+"yrars"
    },
    {
        name: "Priya Singh",
        id: 103,
        department: "Finance",
        salary: 130000,
        workexp:7+"years",
    },
    {
        name: "Neha Verma",
        id: 104,
        department: "Marketing",
        salary: 48000
    },
    {
        name: "Amit Kumar",
        id: 105,
        department: "Sales",
        salary: 47000
    }
];

// Create an array of employee objects
let.employees = [
    {
        name: "Anurag Yadav",
        id: 101,
        department: "IT",
        salary: 50000
    },
    {
        name: "Rahul Sharma",
        id: 102,
        department: "HR",
        salary: 45000
    },
    {
        name: "Priya Singh",
        id: 103,
        department: "Finance",
        salary: 55000
    },
    {
        name: "Neha Verma",
        id: 104,
        department: "Marketing",
        salary: 48000
    },
    {
        name: "Amit Kumar",
        id: 105,
        department: "Sales",
        salary: 47000
    }
];

// Display employee details
for (let i = 0; i < employees.length; i++) {
    console.log("Employee Name: " + employees[i].name);
    console.log("Employee ID: " + employees[i].id);
    console.log("Department: " + employees[i].department);
    console.log("Salary: " + employees[i].salary);
    console.log("-----------------------------");
}
