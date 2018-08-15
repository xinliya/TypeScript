// function printLabel(labelledObj:{ label: string}) {
//   console.log(labelledObj.label)
// }
// let myObj = { size:10,label:"Size 10 Object"};
// printLabel(myObj)
function printLabel(labelledObj) {
    document.write(labelledObj.label + "<br>");
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black" });
document.write(mySquare.color + "<br>");
document.write(mySquare.area + "<br>");
var p1 = { x: 10, y: true };
// p1.y = false;
//相当于类型判断的用法 <>跟as
var a = [1, 2, 3, 4, 78];
var ro = a;
// let b = ro as number[]
a = ro;
document.write(ro + "<br>");
