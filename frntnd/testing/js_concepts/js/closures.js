var counter = (function()
{
    var addOne = 0;
    return function() { return addOne +=1 ;}

   })();
   console.log(counter())
   console.log(counter())    /*closures are used for mostly recursive uses it is basically a func within a function*/
  