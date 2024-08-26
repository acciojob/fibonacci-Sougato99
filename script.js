function fibonacci(num) {
// your code here
	if(num == 1) return 0;
	var a = 0, b = 1;
	for(var c = 0; c < num; c++){
		var res = a + b;
		a = b;
		b = res;
	}
	return b;
}

module.exports = fibonacci;
