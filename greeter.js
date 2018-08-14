function greeterA(person) {
    return "Hello, " + person;
}
var userA = "Jane User";
// document.body.innerHTML = greeterA(userA);
document.write(greeterA(userA) + "<br>");
function greeterPort(person) {
    return "Hello," + person.firstName + "" + person.lastName;
}
var userPort = { firstName: "xin", lastName: "liya" };
// document.body.innerHTML = greeterPort(userPort)
document.write(greeterPort(userPort) + "<br>");
// 类
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("xin", "M.", "User");
// document.body.innerHTML = greeter(user);
document.write(greeter(user) + "<br>");
