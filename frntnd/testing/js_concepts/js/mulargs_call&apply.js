var multiplier = function()
{
	var result = 1;
	for(var i= 0; i <= arguments.length-1 ; i++)
		{  result = result*arguments[i] ; }
		return result;
}
console.log(multiplier(2,3,4,1));
