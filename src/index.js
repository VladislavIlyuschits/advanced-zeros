function callPrime(n, k) 
	{
		var res = 0;
		while (n > 0) 
		{
			n = Math.floor(n / k);
			res += n;
		}
		return res;
	}

module.exports = function getZerosCount(number, base) 
	{
	var a = [];
	var b = base;
		for(var i = 2; i <= Math.sqrt(base); i++)
		{
			if(b % i != 0) continue;
			var p = 0;
			while(b % i == 0) 
				{ 
					p++; b /= i 
				};
			var cur = Math.floor(callPrime(number, i) / p);
			a.push(cur);
		}
		if(b > 1) a.push(callPrime(number, b));
		return Math.min( ...a );
	}
