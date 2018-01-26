var os = require('os');//require os modules, give you information about the operating system you script running on

var toMb = function(f)
	{
		return(Math.round((f/1024/1024)*100)/100)//convert memeory to MB
	}

console.log('Host: ' + os.hostname());//print host name
console.log('15 min. load average: ' + os.loadavg()[2]);
console.log(toMb(os.freemem()) + ' of ' + toMb(os.totalmem()) + ' Mb free');//print free memory and total memory

