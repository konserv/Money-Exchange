// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
	var halfs,quarters,dimes,nickels,pennies,remainder=0;
	var answer = {"H":0,"Q":0,"D":0,"N":0,"P":0};
	var ERROR = {error: "You are rich, my friend! We don't have so much coins for exchange"};
	if (currency>=10000) {return(ERROR)};
	if (currency==0) {return({})};
	halfs=Math.floor(currency/50);
	if (halfs>0) {
		answer.H=halfs;
	} else {
		delete(answer.H);
	};
	remainder=currency%50;
	quarters=Math.floor(remainder/25);
	if (quarters>0) {
		answer.Q=quarters;
	} else {
		delete(answer.Q);
	};
	remainder=remainder%25;
	dimes=Math.floor(remainder/10);
	if (dimes>0) {
		answer.D=dimes;
	} else {
		delete(answer.D);
	};
	remainder=remainder%10;
	nickels=Math.floor(remainder/5);
	if (nickels>0) {
		answer.N=nickels;
	} else {
		delete(answer.N);
	};
	pennies=remainder%5;
	if (pennies>0) {
		answer.P=pennies;
	} else {
		delete(answer.P);
	};
	return(answer);
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
}
