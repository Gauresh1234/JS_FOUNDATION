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












