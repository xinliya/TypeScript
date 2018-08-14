// 'use strict'
//布尔
var isDone1: boolean = false;
document.write(isDone1+"<br>")

//number
var decLiteral1: number = 6;
document.write(decLiteral1+"<br>")

//string
var name1: string = "xinliya";
var age:number =  23;
var sentence: string =`hello, my name is ${name1},I'll be ${ age + 1 } years old next month`
document.write(sentence+"<br>")
var sentence1: string ="hello, my name is" + name1 +",I'll be" + (age + 1) + "years old next month"
document.write(sentence1+"<br>")

var str:string='this is ts';
 str='haha';
 document.write(str+"<br>")

//Array
var list1: number[] = [1,2,3];
document.write(list1+"<br>")
var list2: Array<number> = [4,5,3];
document.write(list2+"<br>")

//元组 Tuple
var x : [string,number]
x = ['hello',10];
// x = [10,'hello'];
document.write(x[0].substr(1)+"<br>")
// document.write(x[1].substr(1)+"<br>")
x[3] = 'world';
x[5] = '你猜';
x[6] = '11';
// x[8] = true;
document.write(x+"<br>")
document.write(x[6].toString()+"<br>")

// 枚举
enum Color {Red, Green, Blue}
var c: Color = Color.Blue
document.write(c+"<br>")

enum Color2 {Red = 3, Green, Blue}
var colorName1: string = Color2[4]
var colorName2: string = Color2[5]
document.write(colorName1+"<br>")
document.write(colorName2+"<br>")


