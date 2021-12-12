//chap 21-25 start//

//Question 1///
//  var firstname = prompt("Enter your first name:");
//  var lastname = prompt("Enter your last  name:");
// var fullname = firstname + lastname;
// alert("Hello"+ fullname);

//Question 2//
// var a = prompt("Enter your Favourite Mobile Phone Model:");
// document.write("Your Favourite Phone is: "+ a , "<br>");
// document.write("Length of string is: "+a.length);

//Question 3//
// var country = ("Paklistan");
// document.write("String: Pakistani",)
// document.write("Indexof 'n': "+ country.indexOf("n"));


//Question 4//
// var country = ("Hello World");
// document.write("Last Index of 'l': "+ country.lastIndexOf("l"));

//Question 5//
// var country = ("Paklistan");
// document.write("String: Pakistani" , "<br>")
// document.write("Character at index 3 : "+ country[3]);

//Question 6//
// var firstname = prompt("Enter your first name:");
// var lastname = prompt("Enter your last  name:");
// var fullname = firstname.concat(" "+lastname);
// alert("Hello "+ fullname);


//Question 7//
// var count = ("Hyderabad" );
// var rep = count.replace("Hyderabad" , "Islamambad");
// document.write("City : " + count , "<br>");
// document.write("After Replacement : "+ rep);

//Question 8//
// var message = ("Ali and Sami are best friends. They play cricket and football together.");
// var newmessage = message.replaceAll("and" , "&");
// document.write("After Replacement :"+ newmessage);

//Question 9//
// var value = prompt("Enter the number you want to convert in number:");
// document.write("Value: " + value , "<br>");
// document.write("Type: String" , "<br>");
// var number = parseInt(value);
// document.write("Number: "+ number , "<br>");
// document.write("Type: Number" , "<br>");

// //Question 10//
// var inp = prompt("Enter any text you want to convert in uppercase: ");
// document.write("User input : " + inp , "<br>" );
// document.write("Capital case : "+ inp.toUpperCase());


//Question 11//
// var inp = prompt("Enter any text you want to convert in uppercase: ");
// document.write("User input : " + inp , "<br>" );
// document.write("Title case : "+ inp.slice(0,1).toUpperCase() + inp.slice(1));


//Question 12//
// var num = prompt("Enter the number which you want to convert in string:");
// document.write("Number: "+ num  , "<br>");
// num = num.toString();
// num = num.replace(".","");
// document.write("Result: "+ num);

//Question 13//
// var username = prompt("Enter your user name :");
// if(username.includes(".")|| username.includes("@")|| username.includes(",")|| username.includes("!")){
//     alert("Enter a valid username.")

// }else{
//     alert("Hello "+ username);

// }


//Question 14//
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var search = prompt("hello there what do you want to order?").toLowerCase();
// var CON = false
// for(var i = 0; i < A.length; i++){
//     if(search ===  A[i]){
//         CON = true;
//         alert(search + " is available at index " + i + " in the bakery ");
//     }
// }
// if(CON === false){
//     alert("Sorry " + search + " is not available in the bakery ");
// }


//Question 15//
// var password = prompt("Enter the password you want to save");
// if(password.length<6){
//     alert("Password should be of 6 caharacters");
// }
// else if(password.includes(".")|| password.includes("@")|| password.includes(",")|| password.includes("!")){
//     alert("Password should contain alphabets and numbers");

// }
// else if(password.charAt(0)==="9" || password.charAt(0)==="8" || password.charAt(0)==="7" || password.charAt(0)==="6"|| password.charAt(0)==="5"|| password.charAt(0)==="4"|| password.charAt(0)==="3" || password.charAt(0)==="2" || password.charAt(0)==="1" || password.charAt(0)==="0"){
//     alert("It should not start with a number");
// }

//Question 16//
// var university = "University of Karachi";
// for (var i=0 ; i < university.length ; i++){
//     document.write(university[i], "<br>");
// }

//Question 17//
// var inp = prompt("Enter anything of which last character  you want to display:");
// document.write("User input: "+ inp , "<br>");
// document.write("Last letter: "+ inp.charAt(inp.length-1));

//Question 18//
// var text = "The quick brown fox jumps over the lazy dog.";
// document.write("text: "+ text, "<br>" );
// text = text.toLowerCase();
// document.write("There are "+ text.match(/the/g).length+" Occurencies of the word 'the'")

//chap 21-25 end//



//chap 26-30 start//

//Question 1//
// var num = +prompt("Enter a positive integr: ");
// document.write("Number: "+ num , "<br>" );
// document.write("Round off value: "+ Math.round(num) , "<br>" );
// document.write("Floor value: "+ Math.floor(num) , "<br>" );
// document.write('Ceil Value '+ Math.ceil(num) , "<br>" );

//Question 2//
// var num = +prompt("Enter a negative floating point: ");
// document.write("Number: "+ num , "<br>" );
// document.write("Round off value: "+ Math.round(num) , "<br>" );
// document.write("Floor value: "+ Math.floor(num) , "<br>" );
// document.write('Ceil Value '+ Math.ceil(num) , "<br>" );

//Question 3//
// var num = +prompt("Enter the number of which you want a absolute value: ");
// num = num.toString();
// var num1 = num.replace("-","");
// document.write("Absolute value of "+ num +" is " + num1);

//Question 4//
// var  dice = Math.random()*6+1;
// document.write("Random dice value: "+ Math.floor(dice));

//Question 5//
// var toss = Math.random()*2;
// if( Math.ceil(toss)== 2){
//     document.write("Random coin value: "+ "Heads");
// }
// else if( Math.ceil(toss)== 1){
//     document.write("Random coin value: "+ "tails");
// }

//Question 6//
// var  ran = Math.random()*100+1;
// document.write("Random numbver between 1 and 100: "+ Math.floor(ran));

//Question 7//
// var weight = prompt("Enter your weight in  kilograms:");
// document.write("The weight of the user is "+ parseInt(weight)+" Kilograms" );

//Question 8//
// var num = Math.random*10+1;
// var user = +prompt("Guess the number: " );
// if(Math.floor(num) == user){
//     alert("Congratulation you guess the correct number");
// }else{
//     alert("Try again!");
// }

//chap 26-30  end//


//chap 31-34 start//

//Question 1//
// var date = new Date();
// document.write(date);

//Question 2//
// var date = new Date();
// var currentMonth = date.getMonth();
// var monthsIndex = [0,1,2,3,4,5,6,7,8,9,10,11];
// var monthsName = ["January", "Febuary", "March" , "April", "May", "June","July"
//                , "August", "September", "October", "November", "December"];

// for (var i = 0;i < monthsIndex.length; i++) {
//     if(monthsIndex[i] === currentMonth) {
//          alert("Current Month: " + monthsName[i]);
//     }

// }

//Question 3//
// var date = new Date();
// var currentMonth = date.getDay();
// var monthsIndex = [0,1,2,3,4,5,6];
// var monthsName = ["Monday", "Tuesday", "Wednesday" , "Thursday", "Friday", "Saturday","Sunday"];

// for (var i = 0;i < monthsIndex.length; i++) {
//     if(monthsIndex[i] === currentMonth) {
//          alert("Current day: " + monthsName[i]);
//     }
// }


//Question 4//
// var day = new Date();
// var fun = day.getDay();
// if(fun==5 || fun==6){
//     alert("It's a fun day ");
// }


//Question 5/
// var date = new Date();
// var newdate= date.getDate();
// if(newdate<=15){
//     alert("first Fifteen days of the month ")
// }else{
//     alert("last Fifteen days of the month ")
// }



//Question 6//
// var date = new Date();
// var time = date.getTime();
// document.write("Current date: "+ date ,"<br>");
// document.write("Elapsed millisecond since january 1, 1970: "+ time  ,"<br>");
// document.write("Elapsed minutes since january 1, 1970: "+ time/(1000*60*60));



//Question 7//
// var date = new Date();
// var hour = date.getHours();
// if(hour<12){
//     alert("It's AM");
// } else if(hour<24){
//     alert("IT's PM")
// }

// Answer 8 //
/* var laterDate = new Date();
alert(laterDate);
alert(laterDate.setFullYear(2020));
 */
// Answer 9 //
/* var date = new Date();
date.setFullYear(2015);
date.setMonth(5);
date.setDate(18);
var days2015 = date.getTime(2015)
var days2021 = date.getTime();
days2021 = ((((days2015 / 1000) / 60 ) /60) / 24) */

// Answer 10 //

// Answer 11 //
/* var date = new Date();
document.write("current date and time:" + date);
var hours = date.getHours();
date.setHours( hours + 1);
document.write( "<br> after 1 hour:" + date); */

// Answer 12 //
/* var date = new Date();
document.write("current date and time:" + date);
var resetdate = date;
resetdate.setFullYear(date.getFullYear() - 100);
document.write(" <br> 100 years back:" + resetdate); */

// Answer 13 //
/* var date = new Date();
var year = date.getFullYear();
var input = prompt("Enter your age..");
var birthYear = year - input;
alert("Birth Year:" + birthYear); */

// Answer 14 //
/* var name = prompt("Enter your name");
var date = new Date();
var currentMonth = date.getMonth();
var dueDate = date.getDate();
var afterDueDate = date.getDate() + 10
var units = 57;
var chargePerUnit = 100;
var amount = units * chargePerUnit;
var latePayment = 700;
var afterDueDatePayment = amount + latePayment;
document.write("<h1>K-Electric Bill</h1>" +
    "<br> Customer Name: " + name +
    "<br> Month: " + currentMonth +
    "<br> Number of units: " + units +
    "<br> Charges per unit " + chargePerUnit +
    "<br> Net Amount Payable within " + dueDate  +  " nov: " + amount +
    "<br> Late Payment: " + latePayment +
    "<br> Gross Amount Payable after " + afterDueDate + " nov: " + afterDueDatePayment);

 */

    //chap 31-34 end//


//chap 35-38 start//

// Answer 1 //
/* function date(){
   alert( new Date());
}
date(); */
// Answer 2 //
/* var firstName = prompt("Enter your first name");
var lastName = prompt("Enter your last name");
function fullName(firstName, lastName){
    alert("hello " + firstName + " " + lastName);
}
fullName(firstName, lastName); */

// Answer 3 //
/* var num1 = +prompt("Enter first number");
var num2 = +prompt("Enter second number");
function sum(num1, num2){
    alert(num1 + num2);
}
sum(num1, num2); */
// Answer 4 //
/* var num1 = +prompt("Enter first number");
var num2 = +prompt("Enter second number");
var opt = prompt("Enter operator");
function calc(num1, num2 ,opt){
    if(opt === "+"){
        return num1 + num2;
    }
    else if(opt === "-"){
        return num1 - num2;
    }
   else if(opt === "/"){
        return num1 / num2;
    } 
    else if(opt === "*"){
        return num1 * num2;
    } else{
        return "Please enter correct operator";
    }
} 
alert(calc(num1, num2, opt)); */
// Answer 5 //
/* var num = +prompt("Enter number for square");
function sq(num){
   alert(num * num);
}
sq(num); */
// Answer 6 //
/*  var answer = 1;
 function factorial(n){
     if(n == 0 || n ==1){
         return answer;
     } else {
         for(var i = n; i >=1 ;i--){
             answer = i * answer;
         }
         return answer;
     }
 }
 var n = +prompt("Enter number")
 answer = factorial(n);
 document.write("The factorial of " + n + " is " + answer); */
// Answer 7 //
/* var startNum = +prompt("Enter start number");
var endNum = +prompt("Enter end number");
function counting(startNum, endNum){
    for(var i = startNum; i <= endNum; i++){
        document.write(i + "<br>");
    }
}
counting(startNum, endNum); */

// Answer 8 //
/* var base = +prompt("Enter base");
var perp = +prompt("Enter perpendicular");
var baseSq;
var perpSq;
function calculateHypotenuse(base, perp){
    function calculateSquare(base,perp){
         baseSq = base * base;
         perpSq = perp * perp;
        return baseSq, perpSq;
        
    }
    calculateSquare(base, perp)
    console.log("Hypotenuse =" + Math.sqrt(baseSq + perpSq));
}
calculateHypotenuse(base, perp); */
// Answer 9 //
/* var width;
var height;
function area(width, height){
    alert("area: " + width * height);
}
area(width = 900, height = 80); */
// Answer 10 //
/* function checkPalindrome(str) {
    var len = str.length;
    for (var i = 0; i < len / 2; i++) {
            if(str[i] !== str[len -1 -i]){
                return("It is not a palindrome")
            }
    }
    return "It is a palindrome";
}
var str = prompt("Enter a string");
console.log(checkPalindrome(str)); */
// Answer 11 //
/* var str = "the quick brown fox";
function s(str) {
    console.log(str.slice(0, 1).toUpperCase() + str.slice(1, 4) +
        str.slice(4, 5).toUpperCase() + str.slice(5, 10) +
        str.slice(10, 11).toUpperCase() + str.slice(11, 16 ) +
        str.slice(16, 17).toUpperCase() + str.slice(17, 19 ) )
}
s(str); */
// Answer 12 //
/* var str = "Web Development Tutorial";
function s(str) {
    var splitStr = str.split(" ");
    if (splitStr[0].length > splitStr[0].length &&
        splitStr[0].length > splitStr[0].length) {
        document.write(splitStr[0]);
    } else if (splitStr[1].length > splitStr[0].length &&
        splitStr[1].length > splitStr[2].length) {
        document.write(splitStr[1]);
    }
    else if (splitStr[2].length > splitStr[0].length &&
        splitStr[2].length > splitStr[1].length) {
        document.write(splitStr[2]);
    }
}
s(str); */

// Answer 13 //
/* var str ;
var letter ;
function occ(str, letter){
   var counts = 0;
   for(var i = 0; i < str.length; i++){
      if( str.charAt(i) === letter){
       counts += 1;
      } 
   }
   return counts;
}
console.log(occ( "Independence", "n")); */

// Answer 14 //
/* var radius = +prompt("enter radius of circle")
function calcCircumference(radius){
     document.write("The circumference is:" + 2 * 3.14 * radius + "<br>")
}
calcCircumference(radius);
function calcArea(radius){
    document.write("The area is:" + 3.14 * (radius * radius));
}
calcArea(radius); */



    //chap 35-38 end//


    //chap 39-42 start//
    // Answer 1 //

// Answer 2 //
/* var year = prompt("Enter year")
function leapyear() {
    if(year % 4 == 0 ){
        alert("its a leap year")
    } else
    {
        alert("Its not a leap year");
    }
}
leapyear(); */
// Answer 3 //
/* var a = +prompt("Enter side 1");
var b = +prompt("Enter side 2 ");
var c = +prompt("Enter side 3 ");
var s;
function s(){
    s = (a+b+c) / 2;
    alert("s: " + s)
 }
s()
function area(){
    area = s *(s - a) * (s-b) * (s-c);
    alert("area:" + area);
   
}
area() */
// Answer 4 //
/* function mainFunction() {
    var mathsMarks = +prompt("Enter your maths marks");
    var phyMarks = +prompt("Enter your physics marks");
    var chemMarks = +prompt("Enter your chemistry marks");
    function average() {
        var average = (mathsMarks + phyMarks + chemMarks) / 3;
        document.write("average: <br>" + average)
    }
    average();
    function percentage() {
        var percentage = ((mathsMarks + phyMarks + chemMarks) / 300) * 100;
        document.write("percentage:" + percentage);
    }
    
    percentage();
}
mainFunction(); */

// Answer 5 //
/* function indexCheck() {
    var text = prompt("Enter the text");
    var indexCheck = prompt("Enter the character that you want to check index of");
    var flag = false;
    for (var i = 0; i < text.length; i++) {
        if (text[i] === indexCheck) {
            flag = true;
            alert(indexCheck + " is at index " + i);
        } 
       
    }
    if (flag == false) {
        alert("Not found!");
    }
    
}
indexCheck(); */

// Answer 6 //
/* var text = prompt("Enter your text");
var textSplit = text.split('');
function deleteChar(){
     for(var i =  0; i < textSplit.length; i++){
         if(textSplit[i] === "a" || textSplit[i] === "e" || 
         textSplit[i] === "i" || textSplit[i] === "o" ||
          textSplit[i] === "u"){
               textSplit[i] = ""
                
         }
     }
      
     console.log(textSplit.join(''));
     
}
deleteChar();
 */

// Answer 7 //
/* function findOccurences() {
    var text = prompt("Enter the text in which you want to check occurences.");
    var textSplit = text.toLowerCase().split('');
    var count = 0;
    for (var i = 0; i < textSplit.length ; i++) {
        var char = textSplit[i];
        var next = textSplit[i + 1] ;
        if (isCorrectChar(char) && isCorrectChar(next)) {
            count++;
        }
    }
    return count;
}
function isCorrectChar(char) {
    switch (char) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            return true;
        default:
            return false;
    }
}
var found = findOccurences();
console.log(found); */

// Answer 8 //
/* var distance = prompt("Enter the distance in km");
console.log("distance in km: " + distance);
function meters(){
    var meters = distance * 1000;
    return meters;
}
console.log("Distance in meters: " + meters());
function foot(){
    var foot = distance * 3280;
    return foot;
}
console.log("Distance in foot: " + foot());
function inches(){
    var inches = distance * 10000;
    return inches;
}
console.log("Distance in inches: " + inches());
function centimeters(){
    var centimeters = distance * 100000;
    return centimeters;
}
console.log("Distance in centimeters: " + centimeters()); */

// Answer 9 //
    
/* var hours = prompt("Enter the hours that you have overworked");
function overtime(){
    if(hours > 40){
        var overtime = (hours - 40) * 12;
        return overtime;
    }
    else{
        alert("Sorry! Your over work is less than 40 hours");
    }
    
}
alert(overtime()); */

// Answer 10 //
/* var note1 = 10;
var note2 = 50;
var note3 = 100;
var amount = +prompt("Enter the amount");
function hundredNotes(){
      var hundredNotes = Math.floor(amount/note3);
      return hundredNotes;
}
function fiftyNotes(){
    var remainder1 = amount%100;
    var fiftyNotes = Math.floor(remainder1/note2);
    return fiftyNotes;
    
}
function tenNotes(){
    var remainder1  = amount%100;
    var remainder2 = remainder1 % 50;
    var tenNotes = Math.floor(remainder2/ note1);
    return tenNotes;
}
console.log("You will get " + hundredNotes() + " hundred notes, " + fiftyNotes() + " fifty notes and " + tenNotes() + " ten notes");*/  
//chap 39-42 end/






























































































































































































































































































































