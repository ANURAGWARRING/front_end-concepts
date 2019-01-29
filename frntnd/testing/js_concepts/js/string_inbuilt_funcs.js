var sampleString = 'let\'s be a nazi';
console.log(sampleString.indexOf('nazi'));
console.log(sampleString.lastIndexOf('nazi'));
console.log(sampleString.slice(5,9));

/*substring(start,end) --> substring() cannot accept negative indexes.
substr(start,length) --> second parameter specifies the length of the extracted part.*/

console.log(sampleString.replace("nazi","communist"));
console.log(sampleString.toUpperCase());
console.log(sampleString.toLowerCase());

var name1 = "Kevin";
var name2 = new String("Kevin");
if (name1 === name2) {
	console.log("Result is true");
 }
	else {
		console.log("Result is false");
	
	}

