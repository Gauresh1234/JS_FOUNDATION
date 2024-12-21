// VARIABLES //
var name="Gauresh";
var age=19;
console.log(name, age)

// HOISTING //
console.log(greeting);
var greeting="Hello!";

// DATATYPES //
var num=42;
var name="Alice";
var isLoggedIn=false;
var x;
var y=null;
console.log(num,name,isLoggedIn,x,y)


// ARITHMATIC OPERATOR//
// ADDITION//
var sum=5+8;
console.log(sum);

// SUBTRACT//
var difference=17-6;
console.log(difference);

// MULTIPLICATION//
var product=67*98;
console.log(product);

// DIVISION//
var quotient=7/56;
console.log(quotient);

// MODULUS//
var remainder=9%30;
console.log(remainder);

// INCREMENT//
var num=10;
num++;
console.log(num);

// DECREMENT//
var num=19;
num--;
console.log(num);


// COMPARISON OPERATOR//
// EQUALTO//
console.log(5=="5");

// STRICT.EQUALTO//
console.log(5==="5");

//NOT.EQUALTO//
console.log(6!="5");

//STRICTNOT.EQUALTO//
console.log(6!=="6");

// GREATERTHAN//
console.log(8>5);

// LESSTHAN//
console.log(8<5);


// LOGICAL OPERATOR//
// AND//
console.log(true&&false);

// OR//
console.log(true||false);

// NOT//
console.log(!true);


// ASSIGNMENT OPERATOR//
// ASSIGNMENT//
var x=10;
console.log(x);

// ADD&ASSIGN//
var x=5;
x+=8;
console.log(x);

// SUBTRACT&ASSIGN//
var x=9;
x-=4;
console.log(x);

// MULTIPLY&ASSIGN//
var x=17;
x*=8;
console.log(x);

// DIVIDE&ASSIGN//
var x=19;
x/=76;
console.log(x);


// OBJECTS //
var car={
    brand:"Toyota",
    model:"Corolla",
    year:2020,
    getInfo:function(){
        return this.brand+""+this.model;
    }
};
console.log(car.getInfo());


// ARRAYS //
var colors=["Red","Blue","Green"];
console.log(colors[0]);

// FUNCTION //
// DECLARATION//
function greet(name){
    console.log("Hello,"+name+"!");
}
greet("Gauresh");

// EXPRESSION//
var sayGoodBye=function(name){
    console.log("GoodBye,"+name+"!");
}
sayGoodBye("Gauresh");

// PARAMETERS//
function add (a,b){
    return a+b;
}
var sum=add(5,3);
console.log(sum);

// RETURN//
function multiply(x,y){
    return x*y;
}
var product=multiply(6,9);
console.log(product);


// CONTROL FLOW //
// a. CONDITIONAL STATEMENTS//
// 1. IF STATEMENT //
var age=19;
if (age>=18){
    console.log("Adult");
}
// 2. IF...ELSE STATEMENT //
var age=16;
if (age>=18){
    console.log("Adult");
}
else{
    console.log("Minor")
}

// 3. IF...ELSE IF...ELSE STATEMENT //
var score=85;
if (score>=90){
    console.log("Grade:A");
}
else if (score>=75){
    console.log("Grade:B");
}
else if (score>=60){
    console.log("Grade:C");
}
else{
    console.log("Grade:F");
}

// 4. SWITCH  STATEMENT //
var fruit="Apple";
switch (fruit){
    case "Apple":
        console.log("Apple is selected");
        break;
        case "banana":
        console.log("Banana is selected");
        break;
        default:
        console.log("Unknown Fruit");
}

// b. LOOPING STATEMENTS //
// 1. FOR LOOP //
for (var i=0;i<5;i++){
    console.log(i);
}

// 2. WHILE LOOP //
var count=0;
while (count<3){
    console.log(count);
    count++;
}

// 3. DO...WHILE LOOP //
var i=0;
do{
    console.log(i);
    i++;
}
while(i<3);


// DATE & TIMES //
// 1. CREATING DATES //
// a. CURRENT //
var now=new Date();
console.log(now);

// b. SPECIFIC //
var specificDate=new Date(2024,9,20,14,30);
console.log(specificDate);

// c. USING DATE STRING //
var dateFromString=new Date("October20,2024 14:30:00");
console.log(dateFromString);

// 2. DATE METHODS //
// a. getFullYear //
var year=now.getFullYear();
console.log(year);

// b. getMonth() //
var month=now.getMonth();
console.log(month);

// c. getDate() //
var date=now.getDate();
console.log(date);

// d. getHours() //
var hours=now.getHours();
console.log(hours);

// e. getMinutes() //
var minutes=now.getMinutes();
console.log(minutes);

// f. setDate() //
now.setDate(8);
console.log(now);

// g. setMonth() //
now.setMonth(11);
console.log(now);

// 3. FORMATTING DATES //
// a. toDateString() //
console.log(now.toDateString());

// b. toTimeString //
console.log(now.toTimeString());

// c. toLocaleDateString() //
console.log(now.toLocaleDateString());

// d. toLocaleTimeString //
console.log(now.toLocaleTimeString());

// b. toISOString //
console.log(now.toISOString());

// 4. DATE CALCULATIONS //
var oneDay=24*60*60*1000;
var tomorrow=new Date (now.getTime()+oneDay);
console.log(tomorrow);


// ERROR HANDLING (try...catch) //
try{
    var x=y;
}
catch(error){
    console.log("An error occured:"+error.message);
}


// ARRAY METHODS //
// PUSH() //
var arr=[1,2,3];
arr.push(4);
console.log(arr);

// POP() //
var arr=[1,2,3];
arr.pop();
console.log(arr);

// SHIFT() //
var arr=[1,2,3];
arr.shift();
console.log(arr);

// UNSHIFT() //
var arr=[2,3];
arr.unshift(1);
console.log(arr);

// SLICE() //
var arr=[1,2,3,4,5,6];
var sliced=arr.slice(1,4);
console.log(sliced);

// SPLICE() //
var arr=[1,2,3,4];
arr.splice(2,1,5,6);
console.log(arr);

// CONCAT() //
var arr1=[1,2];
var arr2=[3,4];
var combined=arr1.concat(arr2);
console.log(combined);

// forEach() //
var arr=[1,2,3];
arr.forEach(function(item){
    console.log(item);
});

// map() //
var numbers=[1,2,3];
var doubled=numbers.map(function(num){
    return num*2;
});
console.log(doubled);

// filter() //
var numbers=[1,2,3,4];
var filtered=numbers.filter(function(num){
    return num>2;
});
console.log(filtered);

// INDEXOf() //
var arr=[1,2,3,2];
console.log(arr.indexOf(2));
console.log(arr.indexOf(4));

// reduce() //
var numbers=[1,2,3,4];
var sum=numbers.reduce(function(total,num){
    return total+num;
},0);
console.log(sum);


// STRICT MODE //
"use strict";
var x=3.14;
y=3.14;
console.log(x,y);


// SCOPE CLOSURES //
// 1. GLOBAL SCOPE //
var globalVar="I am global";
function showGlobal(){
    console.log(globalVar);
}
showGlobal();

// 2. LOCAL SCOPE //
function localScopeExample(){
    var localVar="I am Local";
    console.log(localVar);
}
localScopeExample();















