var convince = function()
{
	if(goebbels.points > 50)
	{return  (   " goebbels can convince fuherer")}

	  }



var nazi = function(){
	var goodquality, badquality, points ;
}


nazi.prototype.convince = convince;

himmler = new nazi;
himmler.goodquality = "silentKiller";
himmler.badquality = "notAnArmyPerson";
himmler.points = 45;
console.log(himmler.goodquality)

goebbels = new nazi;
goebbels.goodquality = "vocalist";
goebbels.badquality = "fattu";
goebbels.points = 55;

document.getElementById("getNazis").innerHTML = goebbels.convince();