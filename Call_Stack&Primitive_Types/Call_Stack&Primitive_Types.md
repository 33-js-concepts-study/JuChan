#Call Stack

1. javascript의 가장 큰 특징중의 하나는 single-threaded 언어라는 점이다.

   javascript의 엔진은 한 번에 한 가지 일밖에 하지 못한다!! **단일** 호출스택을 갖고 있다.

   ![javscript engine](https://hudi.kr/wp-content/uploads/2018/03/%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C1.png)

   

   ### stack(자료 구조)

   - 자료(데이터)가 하나의 방향으로만 삽입되고 삭제되는 방식의 구조(Last In First Out(LIFO), **후입선출** 구조)

   ![stack_img](data:image/png;base64,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)

   ### Call Stack

   - 함수(자료)가 호출되는 시점에 call stack에 함수가 쌓이고, 함수의 반환값이 반환되면 call stack에서 함수가 삭제된다.


####1. synchronous example 

```javascript
function foo(b) {
  var a = 5;
  return a * b + 10;
}

function bar(x) {
  var y = 3;
  return foo(x * y);
}

console.log(bar(6));
```

####2. asynchronous example

```javascript
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
/*
visualize code

(http://latentflip.com/loupe/?code=Y29uc3Qgc2VjID0gNDAwMDsKCmZ1bmN0aW9uIGNhbGxGaXJzdCgpIHsKICBzZXRUaW1lb3V0KGZ1bmN0aW9uIHRpbWVvdXQoKSB7CiAgICBjb25zb2xlLmxvZygnaGknKTsKICAgIGNhbGxTZWNvbmQoKTsKICB9LCBzZWMpOwp9CgpmdW5jdGlvbiBjYWxsU2Vjb25kKCkgewogIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZW91dCgpIHsKICAgIGNvbnNvbGUubG9nKCdteSBuYW1lIGlzJyk7CiAgICBjYWxsVGhpcmQoKTsKICB9LCBzZWMpOwp9CgpmdW5jdGlvbiBjYWxsVGhpcmQoKSB7CiAgc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coJ2p1Y2hhbiEhJyk7CiAgfSwgc2VjKTsKfQoKY2FsbEZpcnN0KCk7Cg%3D%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)
*/
```



####3. asynchronous example

```javascript
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
```

