const sec = 4000;

function callFirst() {
  setTimeout(function timeout() {
    console.log('hi');
    callSecond();
  }, sec);
}

function callSecond() {
  setTimeout(function timeout() {
    console.log('my name is');
    callThird();
  }, sec);
}

function callThird() {
  setTimeout(function timeout() {
    console.log('juchan!!');
  }, sec);
}

callFirst();
//visualize code
//http://latentflip.com/loupe/?code=Y29uc3Qgc2VjID0gNDAwMDsKCmZ1bmN0aW9uIGNhbGxGaXJzdCgpIHsKICBzZXRUaW1lb3V0KGZ1bmN0aW9uIHRpbWVvdXQoKSB7CiAgICBjb25zb2xlLmxvZygnaGknKTsKICAgIGNhbGxTZWNvbmQoKTsKICB9LCBzZWMpOwp9CgpmdW5jdGlvbiBjYWxsU2Vjb25kKCkgewogIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZW91dCgpIHsKICAgIGNvbnNvbGUubG9nKCdteSBuYW1lIGlzJyk7CiAgICBjYWxsVGhpcmQoKTsKICB9LCBzZWMpOwp9CgpmdW5jdGlvbiBjYWxsVGhpcmQoKSB7CiAgc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coJ2p1Y2hhbiEhJyk7CiAgfSwgc2VjKTsKfQoKY2FsbEZpcnN0KCk7Cg%3D%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D




function first() {
	setTimeout(function timeout() {
  	console.log("The First function has been called.")
  }, 1000)
}

function second() {
	setTimeout(function timeout() {
  	console.log("The Second function has been called.")
  }, 999)
}

first()
second()