// function printLabel(labelledObj:{ label: string}) {
//   console.log(labelledObj.label)
// }
// let myObj = { size:10,label:"Size 10 Object"};
// printLabel(myObj)

interface LabelledValue {
  label: string;
}
function printLabel(labelledObj: LabelledValue) {
  document.write(labelledObj.label+"<br>")
}
let myObj = { size:10,label:"Size 10 Object"};
printLabel(myObj)

interface SquareConfig {
  color: string;
  width?: number; //带?就是这个参数可传可不传
}
function createSquare(config:SquareConfig): {color: string; area:number} {
  let newSquare = {color:"white",area:100};
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width){
    newSquare.area = config.width * config.width
  }
  return newSquare
}
let mySquare = createSquare({color: "black"})
document.write(mySquare.color + "<br>")
document.write(mySquare.area + "<br>")

//readonly
interface Point {
  readonly x:number;
  readonly y:Boolean;
}
let p1: Point = {x:10 ,y:true}
// p1.y = false;

//相当于类型判断的用法 <>跟as
let a: number[] = [1,2,3,4,78];
let ro: ReadonlyArray<number> = a;
// let b = ro as number[]
a = ro as number[];
document.write(ro + "<br>")


