#Value Types and Reference Types



## 1.2 객체 타입 (Object type, Reference type)

[객체](https://poiemaweb.com/js-object)는 데이터와 그 데이터에 관련한 동작(절차, 방법, 기능)을 모두 포함할 수 있는 개념적 존재이다. 달리 말해, 이름과 값을 가지는 데이터를 의미하는 프로퍼티(property)와 동작을 의미하는 메소드(method)를 포함할 수 있는 독립적 주체이다.

자바스크립트는 객체(object) 기반의 스크립트 언어로서 자바스크립트를 이루고 있는 거의 “모든 것”이 객체이다. 원시 타입(Primitives)을 제외한 나머지 값들(배열, 함수, 정규표현식 등)은 모두 객체이다. 또한 객체는 **pass-by-reference(참조에 의한 전달)** 방식으로 전달된다.

## 2. 변수

변수(Variable)는 프로그램에서 사용되는 데이터를 일정 기간 동안 기억하여 필요한 때에 다시 사용하기 위해 데이터에 고유의 이름인 식별자(identifier)를 명시한 것이다. 변수에 명시한 고유한 식별자를 변수명이라 하고 변수로 참조할 수 있는 데이터를 변수값이라 한다.

식별자는 어떤 대상을 유일하게 식별할 수 있는 이름을 말한다. 식별자에는 변수명, 함수명, 프로퍼티명, 클래스명 등이 있다.

변수는 `var`, `let`, `const` 키워드를 사용하여 **선언**하고 할당 연산자를 사용해 값을 **할당**한다. 그리고 식별자인 변수명을 사용해 변수에 저장된 값을 **참조**한다.

```javascript
var score;  // 변수의 선언
score = 80; // 값의 할당
score = 90; // 값의 재할당
score;      // 변수의 참조

// 변수의 선언과 할당
var average = (50 + 100) / 2;
```

사람을 고유한 이름으로 구별하듯이 변수도 사람이 이해할 수 있는 언어로 지정한 고유한 식별자(변수명)에 의해 구별하여 참조할 수 있다. 데이터는 메모리에 저장되어 있다. 메모리에 저장된 데이터를 참조하려면 데이터가 저장된 메모리 상의 주소(address)를 알아야 한다. 식별자는 데이터가 저장된 메모리 상의 주소를 기억한다. 따라서 식별자를 통해 메모리에 저장된 값을 참조할 수 있다. 또한 변수명을 통해 데이터의 의미를 명확히 할 수 있어 코드의 가독성이 좋아지는 효과도 있다.

## 2.1 변수의 선언

예를 들어 반지름의 길이가 2인 원의 넓이를 구해보자. 이때 원주율은 3.141592653589793라고 하자.

```javascript
3.141592653589793 * 2 * 2; // 12.566370614359172
```

원의 넓이를 구하였으나 그 결과를 기억할 수 없다. 만약에 원의 넓이를 다시 사용해야 한다면 다시 구해야 한다. 변수를 사용하여 원의 넓이를 기억(캐싱)하고 기억된 원의 넓이를 재사용하여 높이가 5인 원기둥의 부피를 구해보자.

```javascript
var circleArea = 3.141592653589793 * 2 * 2;
var cylinderVolume = circleArea * 5;
```

원주율 3.141592653589793은 재사용할 가능성이 크므로 변수에 저장하도록 하자. 원주율은 변하지 않는 상수이지만 자바스크립트는 상수를 별도 지원하지 않으므로 변수 이름을 대문자로 하여 상수임을 암시하도록 하자. 그리고 반지름과 원기둥의 높이도 값의 의미를 명확히하고 변화에 대처하기 쉽도록 변수에 저장하도록 하자.

원주율은 자바스크립트 빌트인 상수인 Math.PI을 통해 참조할 수 있다. 상수는 ES6의 const 키워드를 사용해 표현할 수 있다. 이것에 대해서는 나중에 자세히 살펴볼 것이다.

```javascript
var PI = 3.141592653589793; // 상수
var radius = 2; // 변수
var circleArea = PI * radius * radius;
var cylinderHeight = 5;
var cylinderVolume = circleArea * cylinderHeight;
```

이처럼 변수는 애플리케이션에서 한번 쓰고 버리는 값이 아닌 값이 아닌 일정 기간 유지할 필요가 있는 값에 사용한다. 또한 변수를 사용하면 값의 의미가 명확해져서 코드의 가독성이 좋아진다.

변수의 존재 목적을 쉽게 이해할 수 있도록 의미있는 변수명을 지정하여야한다.

```javascript
var x = 3;        // NG
var score = 100;  // OK
```

변수명은 식별자(identifier)로 불리기도 하며 명명 규칙이 존재한다.

- 반드시 영문자(특수문자 제외), underscore ( _ ), 또는 달러 기호($)로 시작하여야 한다. 이어지는 문자에는 숫자(0~9)도 사용할 수 있다.
- 자바스크립트는 대/소문자를 구별하므로 사용할 수 있는 문자는 “A” ~ “Z” (대문자)와 “a” ~ “z” (소문자)이다.

변수를 선언할 때는 `var` 키워드를 사용한다. 등호(=, equal sign)는 변수에 값을 할당하는 할당 연산자이다.

```javascript
var name;     // 선언
name = 'Lee'; // 할당

var age = 30; // 선언과 할당

var person = 'Lee',
    address = 'Seoul',
    price = 200;

var price = 10;
var tax   = 1;
var total = price + tax;
```

값을 할당하지 않은 변수 즉 선언만 되어 있는 변수는 `undefined`로 초기값을 갖는다. 선언하지 않은 변수에 접근하면 `ReferenceError`가 발생한다.

```javascript
var x;
console.log(x); // undefined
console.log(y); // ReferenceError
```

## 2.1 변수의 중복 선언

var 키워드로 선언한 변수는 중복 선언이 가능하다. 다시 말해 변수명이 같은 변수를 중복해 선언해도 에러가 발생하지 않는다.

```javascript
var x = 1;
console.log(x); // 1

// 변수의 중복 선언
var x = 100;
console.log(x); // 100
```

위 예제의 변수 x는 중복 선언되었다. 이처럼 변수를 중복 선언하면 에러없이 이전 변수의 값을 덮어쓴다. 만약 동일한 변수명이 선언되어 있는 것을 모르고 변수를 중복 선언했다면 의도치 않게 변수의 값을 변경하는 부작용을 발생시킨다. 따라서 변수의 중복 선언은 문법적으로 허용되지만 사용하지 않는 것이 좋다.

## 2.2 암묵적 전역 변수

변수 선언 시 var 키워드를 생략할 수 있다. 이때 변수는 전역 변수가 된다. 이러한 변수를 암묵적 전역 변수(implicit global)라 한다.

```javascript
x = 1;
console.log(x); // 1
```

var 키워드의 생략은 문법적으로 허용되지만 의도하지 않게 변수를 전역화할 수 있으므로 사용하지 않는 것이 좋다.

## 2.3 동적 타이핑 (Dynamic Typing)

자바스크립트는 동적 타입(dynamic/weak type) 언어이다. 이것은 변수의 타입 지정(Type annotation)없이 값이 할당되는 과정에서 값의 타입에 의해 자동으로 타입이 결정(Type Inference)될 것이라는 뜻이다. 따라서 같은 변수에 여러 타입의 값을 할당할 수 있다. 이를 동적 타이핑(Dynamic Typing)이라 한다.

```javascript
var foo;

console.log(typeof foo);  // undefined

foo = null;
console.log(typeof foo);  // object

foo = {};
console.log(typeof foo);  // object

foo = 3;
console.log(typeof foo);  // number

foo = 3.14;
console.log(typeof foo);  // number

foo = 'Hi';
console.log(typeof foo);  // string

foo = true;
console.log(typeof foo);  // boolean
```

## 2.4 변수 호이스팅(Variable Hoisting)

아래의 예제를 살펴보자.

```javascript
console.log(foo); // ① undefined
var foo = 123;
console.log(foo); // ② 123
{
  var foo = 456;
}
console.log(foo); // ③ 456
```

var 키워드를 사용하여 선언한 변수는 중복 선언이 가능하기 때문에 위의 코드는 문법적으로 문제가 없다.

①에서 변수 foo는 아직 선언되지 않았으므로 ReferenceError: foo is not defined가 발생할 것을 기대했겠지만 콘솔에는 undefined가 출력된다.

이것은 다른 C-family 언어와는 차별되는 자바스크립트의 특징으로 **모든 선언문은 호이스팅(Hoisting)되기 때문**이다.

호이스팅이란 var 선언문이나 function 선언문 등 모든 선언문이 해당 [Scope](https://poiemaweb.com/js-scope)의 선두로 옮겨진 것처럼 동작하는 특성을 말한다. 즉, 자바스크립트는 모든 선언문(var, let, const, function, [function*](https://poiemaweb.com/es6-generateor), class)이 선언되기 이전에 참조 가능하다.

변수가 어떻게 생성되며 호이스팅은 어떻게 이루어지는지 좀더 자세히 살펴보자. 변수는 3단계에 걸쳐 생성된다. 자세한 내용은 [Execution Context](https://poiemaweb.com/js-execution-context)을 참조하기 바란다.

- 선언 단계(Declaration phase)

  변수 객체(Variable Object)에 변수를 등록한다. 이 변수 객체는 스코프가 참조하는 대상이 된다.

- 초기화 단계(Initialization phase)

  변수 객체(Variable Object)에 등록된 변수를 메모리에 할당한다. 이 단계에서 변수는 undefined로 초기화된다.

- 할당 단계(Assignment phase)

  undefined로 초기화된 변수에 실제값을 할당한다.

var 키워드로 선언된 변수는 선언 단계와 초기화 단계가 한번에 이루어진다. 즉, 스코프에 변수가 등록되고 변수는 메모리에 공간을 확보한 후 undefined로 초기화된다. 따라서 변수 선언문 이전에 변수에 접근하여도 Variable Object에 변수가 존재하기 때문에 에러가 발생하지 않는다. 다만 undefined를 반환한다. 이러한 현상을 변수 호이스팅(Variable Hoisting)이라한다.

이후 변수 할당문에 도달하면 비로소 값의 할당이 이루어진다.

![var lifecycle](https://poiemaweb.com/img/var-lifecycle.png)

var 키워드로 선언된 변수의 생명 주기

앞에서 살펴본 예제를 호이스팅 관점에서 다시 한번 알아보도록 하자.

①이 실행되기 이전에 `var foo = 123;`이 호이스팅되어 ①구문 앞에 `var foo;`가 옮겨진다.(실제로 변수 선언이 코드 레벨로 옮겨진 것은 아니고 변수 객체(Variable object)에 등록되고 undefined로 초기화된 것이다.) 하지만 변수 선언 단계와 초기화 단계가 할당 단계와 분리되어 진행되기 때문에 이 단계에서는 foo에는 undefined가 할당되어 있다. 변수 foo에 값이 할당되는 것은 2행에서 실시된다.

②에서는 변수에 값이 할당되었기 때문에 123이 출력된다.

자바스크립트의 변수는 다른 C-family와는 달리 **블록 레벨 스코프(block-level scope)**를 가지지 않고 **함수 레벨 스코프(function-level scope)**를 갖는다. 단, ECMAScript 6에서 도입된 [let, const](https://poiemaweb.com/es6-block-scope) 키워드를 사용하면 블록 레벨 스코프를 사용할 수 있다. 자세한 내용은 [Scope](https://poiemaweb.com/js-scope)를 참조하기 바란다.

- 함수 레벨 스코프(Function-level scope)

  함수 내에서 선언된 변수는 함수 내에서만 유효하며 함수 외부에서는 참조할 수 없다. 즉, 함수 내부에서 선언한 변수는 지역 변수이며 함수 외부에서 선언한 변수는 모두 전역 변수이다.

- 블록 레벨 스코프(Block-level scope)

  코드 블록 내에서 선언된 변수는 코드 블록 내에서만 유효하며 코드 블록 외부에서는 참조할 수 없다.

따라서 코드 블록 내의 변수 foo는 전역변수이므로 전역에 선언된 변수 foo에 할당된 값을 재할당하기 때문에 ③의 결과는 456이 된다.

## 2.5 var 키워드로 선언된 변수의 문제점

ES5에서 변수를 선언할 수 있는 유일한 방법은 var 키워드를 사용하는 것이다. var 키워드로 선언된 변수는 아래와 같은 특징을 갖는다. 이는 다른 C-family 언어와는 차별되는 특징(설계상 오류)으로 주의를 기울이지 않으면 심각한 문제를 발생시킨다.

1. 함수 레벨 스코프(Function-level scope)
   - 전역 변수의 남발
   - for loop 초기화식에서 사용한 변수를 for loop 외부 또는 전역에서 참조할 수 있다.
2. var 키워드 생략 허용
   - 의도하지 않은 변수의 전역화
3. 중복 선언 허용
   - 의도하지 않은 변수값 변경
4. 변수 호이스팅
   - 변수를 선언하기 전에 참조가 가능하다.

대부분의 문제는 전역 변수로 인해 발생한다. 전역 변수는 간단한 애플리케이션의 경우, 사용이 편리한 면이 있지만 불가피한 상황을 제외하고 사용을 억제해야 한다. 전역 변수는 유효 범위(scope)가 넓어서 어디에서 어떻게 사용될 지 파악하기 힘들다. 이는 의도치 않은 변수의 변경이 발생할 수 있는 가능성이 증가한다. 또한 여러 함수와 상호 의존하는 등 부수 효과(side effect)가 있을 수 있어서 복잡성이 증가한다.

변수의 유효 범위(scope)는 좁을수록 좋다.

ES6는 이러한 var의 단점을 보완하기 위해 [let과 const 키워드](https://poiemaweb.com/es6-block-scope)를 도입하였다.

## Reference

- [자바스크립트의 메모리관리](https://developer.mozilla.org/ko/docs/Web/JavaScript/Memory_Management)
- [자바스크립트는 어떻게 작동하는가](https://engineering.huiseoul.com/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EB%8A%94-%EC%96%B4%EB%96%BB%EA%B2%8C-%EC%9E%91%EB%8F%99%ED%95%98%EB%8A%94%EA%B0%80-%EB%A9%94%EB%AA%A8%EB%A6%AC-%EA%B4%80%EB%A6%AC-4%EA%B0%80%EC%A7%80-%ED%9D%94%ED%95%9C-%EB%A9%94%EB%AA%A8%EB%A6%AC-%EB%88%84%EC%88%98-%EB%8C%80%EC%B2%98%EB%B2%95-5b0d217d788d)