# this, call, apply, and bind

 대부분의 경우 `this`의 값은 함수를 호출한 방법이 결정합니다. 실행하는 중 할당으로 설정할 수 없고 함수를 호출할 때 마다 다를 수 있습니다. ECMAScript 5는 함수를 어떻게 호출했는지 상관하지 않고 `this` 값을 설정할 수 있는 `bind` 메서드를 도입했고, ECMAScript 2015는 스스로의 `this` 바인딩을 제공하지 않는 화살표 함수를 추가했습니다. (출처: MDN)

 자바스크립트의 함수는 **호출될 때**, 매개변수로 전달되는 인자값 이외에, arguments 객체와 `this`를 암묵적으로 전달 받는다.

```js
function square(number) {

  console.log(arguments);
  console.log(this);

  return number * number;
}

square(2);
```



 Java에서의 this는 **인스턴스 자신(self)을 가리키는 참조변수**이다. this가 객체 자신에 대한 참조 값을 가지고 있다는 뜻이다. 주로 매개변수와 객체 자신이 가지고 있는 멤버변수명이 같을 경우 이를 구분하기 위해서 사용된다. 아래 Java 코드의 생성자 함수 내의 this.name은 멤버변수를 의미하며 name은 생성자 함수가 전달받은 매개변수를 의미한다.

```java
public Class Person {

  private String name;

  public Person(String name) {
    this.name = name;
  }
}
```

 하지만 자바스크립트의 경우 Java와 같이 this에 바인딩되는 객체는 한가지가 아니라 해당 함수 호출 방식에 따라 this에 바인딩되는 객체가 달라진다. 

 자바스크립트의 경우 함수 호출 방식에 의해 `this`에 바인딩할 어떤 객체가 동적으로 결정된다. 다시 말해, 함수를 선언할 때 this에 바인딩할 객체가 정적으로 결정되는 것이 아니고, **함수를 호출할 때 함수가 어떻게 호출되었는지에 따라** this에 바인딩할 객체가 동적으로 결정된다.





## 함수를 호출하는 4가지 방식

> 1. 함수 호출
> 2. 메소드 호출
> 3. 생성자 함수 호출
> 4. apply/call/bind 호출

```js
var foo = function () {
  console.dir(this);
};

// 1. 함수 호출
foo(); // window
// window.foo();

// 2. 메소드 호출
var obj = { foo: foo };
obj.foo(); // obj

// 3. 생성자 함수 호출
var instance = new foo(); // instance

// 4. apply/call/bind 호출
var bar = { name: 'bar' };
foo.call(bar);   // bar
foo.apply(bar);  // bar
foo.bind(bar)(); // bar
```





### 1. 함수 호출

 기본적으로 `this`는 전역객체(Global object)에 바인딩된다. 전역함수는 물론이고 심지어 내부함수의 경우도 `this`는 외부함수가 아닌 전역객체에 바인딩된다.

```Js
function foo() {
  console.log("foo's this: ",  this);  // window
  function bar() {
    console.log("bar's this: ", this); // window
  }
  bar();
}
foo();	
```



 콜백함수의 경우에도 `this`는 전역객체에 바인딩된다.

```js
var value = 1;

var obj = {
  value: 100,
  foo: function() {
    setTimeout(function() {
      console.log("callback's this: ",  this);  // window
      console.log("callback's this.value: ",  this.value); // 1
    }, 100);
  }
};

obj.foo();
```



 **내부함수는 일반 함수, 메소드, 콜백함수 어디에서 선언되었든 관게없이 this는 전역객체를 바인딩한다.** 더글라스 크락포드는 “이것은 설계 단계의 결함으로 메소드가 내부함수를 사용하여 자신의 작업을 돕게 할 수 없다는 것을 의미한다” 라고 말한다. 내부함수의 `this`가 전역객체를 참조하는 것을 회피방법은 아래와 같다.

```js
var value = 1;

var obj = {
  value: 100,
  foo: function() {
    var that = this; 

    console.log("foo's this: ",  this);  
    console.log("foo's this.value: ",  this.value); 
    function bar() {
      console.log("bar's this: ",  this); 
      console.log("bar's this.value: ", this.value); 

      console.log("bar's that: ",  that); 
      console.log("bar's that.value: ", that.value); 
    }
    bar();
  }
};

obj.foo();
```



##### 화살표 함수 (arrow function)

화살표 함수는 전역 컨텍스트에서 실행될 때 `this`를 새로 정의하지 않습니다. 대신 코드에서 바로 바깥의 함수(혹은 class)의 `this`값이 사용됩니다. 이것은 `this`를 클로저 값으로 처리하는 것과 같습니다. 따라서 다음 코드에서 `setInterval`에 전달 된 함수의 `this`는 `setInterval`을 포함한 function의 `this`와 동일한 값을 갖습니다.

```js
function Person(){
  this.age = 0;

  setInterval(() => {
    this.age++; // |this|는 person 객체를 '뙇' 하고 참조
  }, 1000);
}

var p = new Person();
```





### 2. 메소드 호출

함수가 객체의 프로퍼티 값이면 메소드로서 호출된다. 이때 메소드 내부의 `this`는 해당 메소드를 소유한 객체, 즉 해당 메소드를 호출한 객체에 바인딩된다.

```js
var obj1 = {
  name: 'Lee',
  sayName: function() {
    console.log(this.name);
  }
}

var obj2 = {
  name: 'Kim'
}

obj2.sayName = obj1.sayName;

obj1.sayName();
obj2.sayName();
```





### 3. 생성자 함수 호출

일반 함수를 호출하면 this는 전역객체에 바인딩되지만 new 연산자와 함께 생성자 함수를 호출하면 this는 생성자 함수가 암묵적으로 생성한 빈 객체에 바인딩된다.

```js
function Person(name) {
  // 생성자 함수 코드 실행 전 -------- 1
  this.name = name;  // --------- 2
  // 생성된 함수 반환 -------------- 3
}

var me = new Person('Lee');
console.log(me.name);
```





### 4. apply, call, bind 호출

자바스크립트 엔진의 암묵적 this 바인딩 이외에 this를 특정 객체에 명시적으로 바인딩하는 방법도 제공된다. 이것을 가능하게 하는 것이 Function.prototype.apply, Function.prototype.call 메소드이다.

이 메소드들은 모든 함수 객체의 프로토타입 객체인 Function.prototype 객체의 메소드이다.

```js
var Person = function (name) {
  this.name = name;
};

var foo = {};

// apply 메소드는 생성자함수 Person을 호출한다. 이때 this에 객체 foo를 바인딩한다.
Person.apply(foo, ['name']);

console.log(foo); // { name: 'name' }
```

기억해야 할 것은 apply() 메소드를 호출하는 주체는 함수이며 apply() 메소드는 this를 특정 객체에 바인딩할 뿐 본질적인 기능은 함수 호출이라는 것이다.



#### bind

`Function.prototype.bind` 는 원하는 Function 에 인자로 넘긴 `this` 가 바인딩 된 새로운 함수를 리턴한다.

```js
var module = {
  x: 42,
  getX: function() {
    return this.x;
  }
}

var unboundGetX = module.getX;
console.log(unboundGetX());
```



`bind()`의 가장 간단한 사용법은 어떻게 호출되든지 특정 `this` 값으로 호출되는 함수를 만드는 겁니다. 초보 JavaScript 프로그래머로서 흔한 실수는 객체로부터 메소드를 추출한 뒤 나중에 그 함수를 호출하여 원 객체를 그 함수의 `this`로서 사용하기를 기대하는 겁니다(가령 콜백 기반 코드에서 그 메소드를 사용하여). 그러나 특별히 주의를 하지 않으면, 원 객체는 보통 손실됩니다. 그 함수로부터 원 객체를 사용하여 바인딩된 함수를 생성하면, 깔끔하게 이 문제를 해결합니다

```js
var module = {
  x: 42,
  getX: function() {
    return this.x;
  }
}

var boundGetX = module.getX.bind(module);
console.log(boundGetX());
// expected output: 42
```



#### example

```js
var val = [1, 2, 3]

var obj = {
  val: [1, 2, 3, 4],
  fn: function () {
    !function () {
      this.val.forEach(function (el) {
        console.log(el);
      })
    }()
  }
}

obj.fn()
```



### Comment

> 내가 막연히 알고 있던 this의 개념은 자신을 감싸고 있는 객체였다. 물론 틀린 말은 아니지만, 1차원적인 생각이었다. 자바스크립트에서의 this는 **함수를 호출하는 방식**에 따라 달라진다는 것, 호출하는 방식에 따라 자신을 감싸고 있는 인스턴스일 수도 있고 함수형 메소드를 통해 this를 동적으로 바꿔줄 수도 있다는 것이 핵심인 것 같다. 함수를 호출하는 방법에 따라 동적으로 변할 수 있다는 것, 어떻게 보면 이러한 유연성이 장점일 수도 있지만 오히려 복잡한 것 같다는 생각이 들었다. 





## 참조

- [함수 호출 방식에 의해 결정되는 **this**](https://poiemaweb.com/js-this)
- [this:MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/this)
- [화살표 함수](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/%EC%95%A0%EB%A1%9C%EC%9A%B0_%ED%8E%91%EC%85%98)