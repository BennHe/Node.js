var maxTime = 1000;

//if input even, double it
//if input odd, error
//(call takes random amout of times < 1s)
var evenDoubler=function(v,callback)
		{
					
		};
var handleResults = function(err,results,time)
			{
				if(err)
				{
					console.log("ERROR: "+err.message);
				}
				else
				{console.log("The results are: "+results+ "("+ time + "ms)");}
			};

evenDoubler(2,handleResults);
console.log("--------");
