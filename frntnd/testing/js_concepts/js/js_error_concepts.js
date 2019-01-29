/*display an error using try-catch*/
/*try {
	aleert("hello world");
}
catch(err){
	document.getElementById("errorCheck").innerHTML = err.message;
}*/
/*display an error using try-catch*/

function myError(){
	 var msg, x;
	 

	 msg = document.getElementById("msg");
	 msg.innerHTML = "";
	 x = document.getElementById("iptest").value;
	 try{
	 	if (isNaN(x)) throw "Only number are allowed";
        if (x == "") throw "Please choose a number";
	 	if (x < 4) throw "Choose a number greater than 3";
    } catch(err) {
    	msg.innerHTML = "Error is " + err;
    } finally {
    	document.getElementById("iptest").value = "";
    }

}

