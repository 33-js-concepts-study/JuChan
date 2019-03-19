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



> 추가로 알아두면 좋은 개념들
>
> - 자바스크립트의 실행 컨텍스트
>   - 참조: (https://poiemaweb.com/js-execution-context)
>   - 참조: (https://www.zerocho.com/category/JavaScript/post/5741d96d094da4986bc950a0)
> - 함수의 범위, 스코프(scope)
>   - 참조: (https://www.zerocho.com/category/Javascript/post/5740531574288ebc5f2ba97e)







# Primitive Type

ECMAScript 표준은 다음과 같은 7개의 자료형을 정의한다

- 기본 자료형(primitive)인 여섯가지 데이터 타입
  - Boolean
  - Null
  - Undefined
  - Number
  - String
  - Symbol(새로 추가)



오브젝트를 제외한 모든 값은 **변경 불가능한 값(immutable value)**이다. 예를 들면, 특히 C언어와는 다르게도, 문자열은 불변값이다. 이런 값을 "primitive values"라고 한다. 



### Boolean type

_-_ **Bollean** 은 논리적인 요소를 나타내고,`true` 와 `false`의 두 가지 값을 가질 수 있다.



### Null type

_-_ **Null** 타입은 딱 한 가지 값, `null`을 가질 수 있다. 



### Undefined type

_-_ 값을 할당하지 않은 변수는 `undefined` 값을 가진다. 



### Number type

_-_ ECMAScript 표준에 따르면, 숫자의 자료형은 [배정밀도 64비트 형식 IEEE 754 값](https://en.wikipedia.org/wiki/Double-precision_floating-point_format) (-(253-1) 와 253 -1 사이의 숫자값) 단 하나만 존재한다. **정수만을 표현하기 위한 특별한 자료형은 없다.** 부동 소수점을 표현할 수 있는 것 말고도, Number 타입은 세 가지 의미있는 몇가지 상징적인 값들도 표현할 수 있다. 이 값에는 `+무한대`, `-무한대`, and `NaN` (숫자가 아님)이 있다.

`+/-Infinity` 보다 크거나 작은지 확인하는 용도로 상수값인 [`Number.MAX_VALUE`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE) 나 [`Number.MIN_VALUE`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_VALUE) 을 사용할 수 있다. 또한, ECMAScript 6 부터는 숫자가 배정밀도 부동소수점 숫자인지 확인하는 용도로 [`Number.isSafeInteger()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger) 과 [`Number.MAX_SAFE_INTEGER`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER), [`Number.MIN_SAFE_INTEGER`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER) 을 사용할 수 있다. 이 범위를 넘어서면, 자바스크립트의 숫자는 더 이상 안전하지 않다.

Number 타입의 값 중에는 두 가지 방식으로 표현할 수 있는 유일한 값이 있는데, 0 이다. 0 은 -0 이나 +0 으로 표시할 수 있다. ("0" 은 물론 +0 이다.) 실제로는 이러한 사실은 거의 효력이 없다. 그 예로, `+0 === -0` 은 `true` 이다. 하지만 0으로 나누는 경우 그 차이가 눈에 띌 것이다.

숫자가 보통 값만으로 표현되긴 하지만, 자바스크립트는 [몇 가지 이진 연산자](https://developer.mozilla.org/en/JavaScript/Reference/Operators/Bitwise_Operators)도 제공한다. 이러한 이진 연산자들은 [비트 마스킹(bit masking)](http://en.wikipedia.org/wiki/Mask_%28computing%29) 기법으로 한 숫자 안에 여러 Boolean 값을 저장하는데도 쓸 수 있다. 일반적으로 이런 방법은 나쁜 방법이지만, 자바스크립트에서는 (Boolean 값의 배열이나 Boolean 값들을 이름있는 속성들로 가지는 객체 같은) Boolean 덩어리를 나타낼 다른 방법이 없다. 비트 마스킹은 또한 코드를 이해하고, 읽고, 유지보수하는데에 있어서 좀 더 어렵게 만드는 경향이 있다. 하지만 이러한 기법은 local storage 의 저장공간이 부족해서 절약하려고 하거나, 네트워크 상에서 각각의 비트를 전송하는 등의 극단적인 상황 같은 굉장히 제한적인 환경에서 필요할 수도 있다. 그래서 비트 마스킹 기법은 크기를 최대한 줄여야하는 상황에서만 사용을 고려해야 한다.



### String type

_-_ 자바스크립트의 `String` 타입은 텍스트 데이터를 나타내는데 사용한다. 이는 16비트 부호없는 정수 값 요소들의 집합	 이다. String의 각 요소는 String의 위치를 차지한다. 첫 번째 요소는 0번 인덱스에 있고, 다음 요소는 1번, 그 다음 요소는 2번… 같은 방식이다. String의 길이는 String이 가지고있는 요소의 갯수이다.



C 같은 언어와는 다르게, 자바스크립트의 문자열은 변경 불가능 (immutable)하다. 이것은 한 번 문자열이 생성되면, 그 문자열을 수정할 수 없다는 걸 의미한다. 그러나 원래 문자열에서 일부가 수정된 다른 문자열을 만드는 건 가능하다. 예를 들면,

- 원래 문자열에서 각각의 글자를 추출하거나 `String.substr()` 을 사용해서 만든 부분 문자열
- 접합 연산자 (`+`) 나 `String.concat()` 으로 두 문자열을 합친 문자열

#### "문자열의 자료형화"를 조심하라!

문자열을 복잡한 자료형을 표현하는 용도로 쓰는 방법이 꽤나 매력적일 수 있다. 단기적으로 이런 장점들이 있다.

- 접합 연산자로 손쉽게 복잡한 문자열을 만들 수 있다.
- 문자열은 디버깅이 쉽다 (화면에 출력한 내용이 문자열 변수에 있는 값과 같다)
- 문자열은 많은 API에서 사용하는 공통분모이고 (입력 필드, 로컬 스토리지 값, `XMLHttpRequest` 요청에서 `responseText` 를 사용할 때 등) 그러다보니 문자열만으로 작업하는게 매혹적일 수 있다.

규칙만 잘 정의해놓는다면, 어떤 자료구조가 되던 문자열로 표시할 수 있다. 그렇다고 해서 이게 좋은 방법이 되는 건 아니다. 예를 들면, 구분자로 리스트 자료형을 흉내낼 수 있을 것이다.(하지만 자바스크립트의 배열을 사용하는게 더 알맞을 것이다.). 불행하게도, 리스트의 요소중에 구분자가 들어있는 요소가 있따면 리스트는 엉망진창이 될 것이다. 물론 탈출 문자(escape character) 등을 사용하거나 할 수도 있을 것이다. 하지만 이런 것들은 모두 미리 정해놓은 규칙을 필요로 하고, 덕분에 불필요한 관리 부담을 낳는다.

문자열은 텍스트 데이터에만 사용하자. 복잡한  데이터를 나타낼때는, 문자열을 분석해서 적합한 추상화를 선택해 사용하자.