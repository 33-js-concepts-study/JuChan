# new, Constructor, instanceof and Instances



## new 생성자함수

객체를 생성하는 함수를 **생성자 함수**라고 부른다. 자바스크립트에는 class가 없기 때문에 생성자 함수가 객체를 생성하는 역할을 대신한다.



### 생성자 함수의 4가지 법칙

 new키워드로 생성자함수를 호출하면 아래의 4가지 현상이 일어난다.

1. 새로은 빈 객체를 생성한다

2. 생성된 객체에 this를 바인딩한다

3. 새로 생성 된 "proto"라는 객체에 생성자 함수의 프로토타입 객체를 가리키는 속성을 추가한다

4. 다른 객체가 명시적으로 반환되지 않을 경우, this로 참조된 이 객체가 반환된다.

   출처: <https://webclub.tistory.com/309> [Web Club]



```js
function Student(name, age) {
  this.name = name;
  this.age = age;
}

var first = new Student('John', 26);
```

1. first 라는 빈 객체를 생성한다.
2. first객체에 this를 바인딩한다.
3. first.\__proto__ 객체가 Student.prototype을 가리킨다.
4. first라는 변수에 first 생성자객체가 담긴다



## instance

오브젝트 `()Object`를 사용하여 오브젝트를 생성하면 Object 가 반환된다. 이때 반환된 Object 를 인스턴스(instance)라고 부른다.

ES5 명세서에도 인스턴스로 표기하고 있다.

new 연산자를 사용하여 오브젝트를 생성하여 변수에 할당할 수 있으며 변수에 할당된 오브젝트가 인스턴스인 것이다.

```js
//  new 연산자를 사용하여 Object를 생성
var obj = new Object();

// 변수 obj에 오브젝트를 생성한 것을 할당
// 이렇게 변수에 할당,반환된 오브젝트가 인스턴스이다.

console.log(obj)
// Object {}

// 객체 리터럴 방식을 사용하여 오브젝트 생성
var obj2 = {}
// 변수 obj2 가 인스턴스

console.log(obj2);
// Object {}
```

인스턴스는 다른 값을 유지,제어하기 위해서 인스턴스를 생성하는 것이다. 즉, 재사용성을 높이기 위한 목적이다.

"인스턴스(instance)" 라는 용어는 "객체(object)" 와 유사하다. 다만, 의미상으로 "객체"는 좀 더 일반적인 의미인 반면 "인스턴스" 라고 표현하면 "현재 생성된 바로 그 객체" 라는 인스턴트(instant)한 뉘앙스를 더 짙게 표현할 수 있다.



## instanceof

**instanceof 연산자**는 생성자의 `prototype` 속성이 객체의 프로토타입 체인 어딘가 존재하는지 판별합니다.

`instanceof` 연산자는 `object`의 프로토타입 체인에 `constructor.prototype`이 존재하는지 판별합니다.

```js
// 생성자 정의
function C(){}
function D(){}

var o = new C();

// true, 왜냐하면 Object.getPrototypeOf(o) === C.prototype
o instanceof C;

// false, 왜냐하면 D.prototype이 o 객체의 프로토타입 체인에 없음
o instanceof D;
```





### 참조

- [JavaScript For Beginners: the ‘new’ operator](https://codeburst.io/javascript-for-beginners-the-new-operator-cee35beb669e)
- [javaScript 생성자 함수의 핵심 패턴]( <https://webclub.tistory.com/309>)
- [객체 지향 프로그래밍(생성자와 프로토타입)](<https://www.zerocho.com/category/JavaScript/post/573c2acf91575c17008ad2fc>)
- [오브젝트(Object)와 인스턴스(instance),instanceof](https://webclub.tistory.com/37)
- [instanceof: MDN](<https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/instanceof>)
