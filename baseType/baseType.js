// 'use strict'
//布尔
var isDone1 = false;
document.write(isDone1 + "<br>");
//number
var decLiteral1 = 6;
document.write(decLiteral1 + "<br>");
//string
var name1 = "xinliya";
var age = 23;
var sentence = "hello, my name is " + name1 + ",I'll be " + (age + 1) + " years old next month";
document.write(sentence + "<br>");
var sentence1 = "hello, my name is" + name1 + ",I'll be" + (age + 1) + "years old next month";
document.write(sentence1 + "<br>");
var str = 'this is ts';
str = 'haha';
document.write(str + "<br>");
//Array
var list1 = [1, 2, 3];
document.write(list1 + "<br>");
var list2 = [4, 5, 3];
document.write(list2 + "<br>");
//元组 Tuple
var x;
x = ['hello', 10];
// x = [10,'hello'];
document.write(x[0].substr(1) + "<br>");
// document.write(x[1].substr(1)+"<br>")
x[3] = 'world';
x[5] = '你猜';
x[6] = '11';
// x[8] = true;
document.write(x + "<br>");
document.write(x[6].toString() + "<br>");
// 枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Blue;
document.write(c + "<br>");
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 3] = "Red";
    Color2[Color2["Green"] = 4] = "Green";
    Color2[Color2["Blue"] = 5] = "Blue";
})(Color2 || (Color2 = {}));
var colorName1 = Color2[4];
var colorName2 = Color2[5];
document.write(colorName1 + "<br>");
document.write(colorName2 + "<br>");
var Err;
(function (Err) {
    Err[Err["undefined"] = -1] = "undefined";
    Err[Err["null"] = -2] = "null";
    Err[Err["success"] = 1] = "success";
})(Err || (Err = {}));
;
var e = Err.success;
document.write(e + "<br>");
//任意值any
var notSure = 4;
notSure = "maybe a string instead";
notSure = false;
document.write(notSure + "<br>");
var notSureText = 4;
// document.write(notSureText.ifItExists()+"<br>")
document.write(notSureText.toFixed() + "<br>");
var prettySure = 4;
// document.write(prettySure.toFixed()+"<br>")
var list = [1, true, "free"];
list[3] = 100;
document.write(list + "<br>");
//空值 void
var unusable = undefined;
//Null 和 Undefined  --strictNullChecks标记是否为空值
var n = null;
//never
//类型判断
//1.<>
var someValue = "this is a string";
var strLength = someValue.length;
document.write(someValue + "<br>");
document.write(strLength + "<br>");
//2.as
var someValue1 = "this is a string as";
var strLength1 = someValue1.length;
document.write(someValue1 + "<br>");
document.write(strLength1 + "<br>");
