function greeterA(person) {
    return "Hello, " + person;
}

let userA = "Jane User";

document.write(greeterA(userA)+"<br>")

// 类型注解 是string只能传入string 不然会报错
// function greeterArr(personType:string) {
//     return "Hello, " + personType;
// }

// let userA = [0,1,2];

// document.body.innerHTML = greeterArr(userA);

//接口
interface Person {
    firstName:string;
    lastName:string;
}

function greeterPort(person:Person) {
    return "Hello," + person.firstName +"" +person.lastName
}
let userPort = { firstName : "xin" , lastName:"liya"};
document.write(greeterPort(userPort)+"<br>")

// 类
class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person : Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("xin", "M.", "User");

document.write(greeter(user)+"<br>")
