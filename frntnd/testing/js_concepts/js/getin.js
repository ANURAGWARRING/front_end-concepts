
/*testing ifelse statement*/
var greeting = "";
var highscore = 200;
var finalscore = "200";
if (finalscore < highscore)  {
        greeting = "u missed bro"
}
else if (finalscore === highscore) {
       greeting = "just equal"
}
else if (finalscore > highscore)
	{ greeting = "u made history" }
else
	{greeting = "something is not right"}
document.getElementById("score").innerHTML = greeting;
/*testing ifelse statement*/


/*testing case statement*/
var daynumber = 7;
var greeting1 = "";
switch(daynumber) {
	case 0:
	greeting1 = "tody is sunday";
	break;
	case 1:
	greeting1 = "tody is monday";
	break;
	case 2:
	greeting1 = "tody is tuesday";
	break;
	case 3:
	greeting1 = "tody is wednesday";
	break;
	case 4:
	greeting1 = "tody is thursday";
	break;
	case 5:
	greeting1 = "tody is friday";
	break;
	case 6:
	greeting1 = "tody is saturday";
	break;
	default:
	greeting1 = "what are you typing";
	break;
}
document.getElementById("day").innerHTML = greeting1;
/*testing case statement*/


/*for loop*/
var greeting3 = "";
var i;
var nazis = ["hitler","himmler","staufenberg","Goering","Goebbels" ,"Stangl"]
for ( i = 0; i < nazis.length; i++) {
greeting3 += nazis[i]+" ,";
	
}
document.getElementById("good").innerHTML = greeting3;
/*for loop*/

/*forin loop*/
var greeting4 = "";
var nazis2 = ["hitler","himmler","staufenberg","Goering","Goebbels" ,"Stangl"]
for (i in nazis2) {
greeting4 += nazis2[i]+" ,";	
}
document.getElementById("good2").innerHTML = greeting4;
/*forin loop*/

/*while loop*/
var j=0
var greeting5 = "";
while(j<3) {
	greeting5 += nazis2[j]+",";
	j++;
}
document.getElementById("good3").innerHTML = greeting5;
/*while loop*/

/*dowhile*/
var k=0;
var greeting6 = "";
do
{
	greeting6 += nazis2[k]+",";
	k++;
}
while(k<4)
	document.getElementById("good4").innerHTML = greeting6;
/*dowhile*/

/*best way to use break*/
var greeting7 = "";
var l=0;
for ( l = 0; l < 15; l++)
	{ 
	if(l == 10){ break; }
greeting7 +="the no. is"+ l+"<br>";
}
document.getElementById("good5").innerHTML = greeting7;
/*best way to use break*/


/*using continue*/
var greeting8 = "";
var m = 0;
for ( m = 0; m < 15; m++)
	{ 
	if(m == 10){ continue; }
greeting8 +="the no. is"+ m +" ";
}
document.getElementById("good6").innerHTML = greeting8;
/*using continue*/





/*function*/
function multiply3(num1,num2,num3) {
	return num1*num2*num3
}

document.getElementById("learningfunc").innerHTML = multiply3(1,2,3);
/*function*/

/*functionstyle2 - a function can never be a variable*/
  add3 = function (num1,num2,num3) {
	return num1+num2+num3
}

document.getElementById("learningfunc2").innerHTML = add3(1,1,3);
/*functionstyle2*/

   /* methods- calling funcion in objects*/
var myDetails = { firstName: "anurag",
                   secondName: "warring",
                   age:23,
                   fullName:  function(){
                   	return this.firstName + "-" + this.secondName +" is my name guys"
                   }
                 /* myAge: function(){
                  	return this.age
                  }*/
                }

document.getElementById("learningObject").innerHTML = myDetails.fullName();
 /* methods- calling funcion in objects*/

 function showdate() {
 	document.getElementById("eventFunctions").innerHTML = Date()
 }


