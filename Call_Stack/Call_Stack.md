# Call Stack

1. javascript의 가장 큰 특징중의 하나는 single-threaded 언어라는 점이다.

   javascript의 엔진은 한 번에 한 가지 일밖에 하지 못한다. 즉, **단일** 호출스택을 갖고 있다.

   ![javscript engine](https://hudi.kr/wp-content/uploads/2018/03/%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C1.png)

   - Memory Heap: 메모리 할당이 이루어지는 곳

   

   ### Run Time

   - 자바스크립트의 엔진은 브라우저가 제공하는 웹 API 즉, DOM, AJAX, `SetTimeout` 을 사용한다.
     - API(application programming interface) - API는 클라이언트가 원하는 요청을 시스템에 전달하고, 응답을 다시 전달해주는 메신저이다 (참고: https://www.youtube.com/watch?v=s7wmiS2mSXY)
   - 이벤트루프와 콜백큐(다음 시간에)

   ![RunTime](https://cdn-images-1.medium.com/max/2000/1*i9nTlOSPH3q-sCd5-WHg-g.png)

   

   ### stack(자료 구조)

   - 자료(데이터)가 하나의 방향으로만 삽입되고 삭제되는 방식의 구조(Last In First Out(LIFO), **후입선출** 구조)

     ![stack](https://i1.daumcdn.net/thumb/R750x0/?fname=http%3A%2F%2Fcfile4.uf.tistory.com%2Fimage%2F276C1443596E1AC1048D29)

   ### Call Stack

   - 함수(자료)가 호출되는 시점에 call stack에 함수가 쌓이고, 함수의 반환값이 반환되면 call stack에서 함수가 삭제된다.

   ```javascript
   function multiply(x, y) {
       return x * y;
   }
   
   function printSquare(x) {
       var s = multiply(x, x);
       console.log(s);
   }
   
   printSquare(5);
   ```

   ![stack_img](https://cdn-images-1.medium.com/max/2000/1*1FL2WcODqRrK40rrzA5QQA.png)


#### 1. synchronous example 

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



#### 2. asynchronous example

```javascript
const sec = 3000;

function callMe() {
  setTimeout(function timeout() {
    console.log('hi');
    foo();
  }, sec);
}

function foo() {
  setTimeout(function timeout() {
    bar();
    console.log('solomon!!');
  }, sec);
}

function bar() {
  setTimeout(function timeout() {
    console.log('juchan!!');
  }, sec);
}

callMe();
/*
visualize code

(http://latentflip.com/loupe/?code=Y29uc3Qgc2VjID0gNDAwMDsKCmZ1bmN0aW9uIGNhbGxGaXJzdCgpIHsKICBzZXRUaW1lb3V0KGZ1bmN0aW9uIHRpbWVvdXQoKSB7CiAgICBjb25zb2xlLmxvZygnaGknKTsKICAgIGNhbGxTZWNvbmQoKTsKICB9LCBzZWMpOwp9CgpmdW5jdGlvbiBjYWxsU2Vjb25kKCkgewogIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZW91dCgpIHsKICAgIGNvbnNvbGUubG9nKCdteSBuYW1lIGlzJyk7CiAgICBjYWxsVGhpcmQoKTsKICB9LCBzZWMpOwp9CgpmdW5jdGlvbiBjYWxsVGhpcmQoKSB7CiAgc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coJ2p1Y2hhbiEhJyk7CiAgfSwgc2VjKTsKfQoKY2FsbEZpcnN0KCk7Cg%3D%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)
*/
```



#### 3. asynchronous example

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

first();
second();
```



#### 4. My Question

```javascript
for (var i = 0; i < 5; i++) {
  setTimeout(function timeout() {
    console.log(i)
  }, 0)
}
//결과 값?
```




##결론

#### - 자바스크립트는 싱글 쓰레드 기반의 언어이다. 

#### - 자바스크립트 엔진은 V8 엔진만으로 구동되는 것이 아니라 웹 API, Call Back Que, eventloop와의 상호작용을 한다. 

#### - 호출 스택은 후입선출의 구조이다.

#### - 함수가 호출되는 시점에서 스택에 쌓이고 함수가 반환될때 스택에서 삭제된다




> 추가로 알아두면 좋은 개념들
>
> - 자바스크립트의 실행 컨텍스트
>   - 참조: (https://poiemaweb.com/js-execution-context)
>   - 참조: (https://www.zerocho.com/category/JavaScript/post/5741d96d094da4986bc950a0)
> - 함수의 범위, 스코프(scope)
>   - 참조: (https://www.zerocho.com/category/Javascript/post/5740531574288ebc5f2ba97e)
> - 자바스크립트 - 실행 컨텍스트와 스코프
>   - (참조 : https://blog.sonim1.com/135)
