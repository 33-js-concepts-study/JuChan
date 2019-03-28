# Primitive Type (원시 값)

ECMAScript 표준은 다음과 같은 7개의 자료형을 정의한다

- 기본 자료형(primitive)인 여섯가지 데이터 타입
  - Boolean
  - Null
  - Undefined
  - Number
  - String
  - Symbol(새로 추가)



오브젝트를 제외한 모든 값은 **변경 불가능한 값(immutable value)**이다. 예를 들면, 특히 C언어와는 다르게도, 문자열은 불변값이다. 이런 값을 "primitive values"라고 한다. 



### Reference Type (참조 값)

- 메모리에 저장된 객체(Object)

> ### 원시 값

![원시 값](https://img1.daumcdn.net/thumb/R1920x0/?fname=http%3A%2F%2Fcfile4.uf.tistory.com%2Fimage%2F257AD63E577DA98E3A8316)

> ### 참조 값

![참조 값](https://img1.daumcdn.net/thumb/R1920x0/?fname=http%3A%2F%2Fcfile24.uf.tistory.com%2Fimage%2F244BBF44577DA9B42EBB1A)



### Boolean type

_-_ **Bollean** 은 논리적인 요소를 나타내고,`true` 와 `false`의 두 가지 값을 가질 수 있다.



### Null type

_-_ **Null** 타입은 딱 한 가지 값, `null`을 가질 수 있다. `null`은 어떤 값이 의도적으로 비어있음을 표현한다. 즉, 변수가 어떤 객체도 가리키고 있지 않음을 표시한다. 

```javascript
// 정의되지 않고 초기화된 적도 없는 foo
> foo;
"ReferenceError: foo is not defined"

// 존재하지만 값이나 자료형이 존재하지 않는 foo
> var foo = null;
foo;
"null"
```



### Undefined type

_-_ 값을 할당하지 않은 변수는 `undefined` 값을 가진다. 

`undefined`는 전역 객체의 속성이다. 즉, 전역 스코프에서의 변수이다. `undefined`의 초기 값은 `undefined` 원시 값을 갖는다.

최신 브라우저에서 `undefined`는 ECMAScript 5 명세에 따라 설정 불가, 쓰기 불가한 속성입니다. 그렇지 않더라도 덮어쓰는건 피하는게 좋습니다.

값을 할당하지 않은 변수는 undefined 자료형입니다. 또한 메서드와 선언도 평가할 변수가 값을 할당받지 않은 경우에 `undefined`를 반환합니다. 함수는 값을 명시적으로 [반환](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/return)하지 않으면 `undefined`를 반환합니다.



#### Null과 undefined의 차이

`undefined` 는 변수가 정의되었지만 아무 값도 할당받지 않은 상태를 의미한다.

반면에 `null` 은 `null` 값을 할당받은 것을 의미한다. 

`null` 또는 `undefined`를 검사할 때, [동등 연산자(==)와 일치 연산자(===)의 차이](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)를 주의하세요. 동등 연산자는 자료형 변환을 수행합니다.

```javascript
typeof null          // "object" (not "null" for legacy reasons) 객체로 취급된다. 
typeof undefined     // "undefined"
null === undefined   // false
null == undefined   // true
null === null        // true
null == null         // true
!null                // true
isNaN(1 + null)      // false
isNaN(1 + undefined) // true
```





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

> 추가로 알아두면 좋은 개념들
>
> - 자바스크립트 - 실행 컨텍스트와 스코프
>   - (참조 : https://blog.sonim1.com/135)