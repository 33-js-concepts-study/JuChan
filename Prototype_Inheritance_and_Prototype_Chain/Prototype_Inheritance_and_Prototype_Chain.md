# prototype

 **어떠한 객체가 만들어지기 위해 그 객체의 모태가 되는 녀석을 프로토타입**이라고 한다

 자바스크립트의 모든 객체는 자신의 부모 역할을 담당하는 객체와 연결되어 있다. 그리고 이것은 마치 객체 지향의 상속 개념과 같이 부모 객체의 프로퍼티 또는 메소드를 상속받아 사용할 수 있게 한다. 이러한 부모 객체를 Prototype(프로토타입) 객체 또는 줄여서 Prototype(프로토타입)이라 한다.

```javascript
function Person() {
  this.eyes = 2;
  this.nose = 1;
}

var kim  = new Person();
var park = new Person();

console.log(kim.eyes);  // => 2
console.log(kim.nose);  // => 1

console.log(park.eyes); // => 2
console.log(park.nose); // => 1
```

> 메모리에는 eyes와 nose가 두 개씩 총 4개 할당된다. 객체를100개 만들면 200개의 변수가 메모리에 할당된다.



```javascript
function Person() {}

Person.prototype.eyes = 2;
Person.prototype.nose = 1;

var kim  = new Person();
var park = new Person():

console.log(kim.eyes); // => 2
...
```

> Person.prototype이라는 빈 Object가 어딘가에 존재하고, Person 함수로부터 생성된 객체(kim, park)들은 어딘가에 존재하는 Object에 들어있는 값을 모두 갖다쓸 수 있다.



## Prototype Link와 Prototype Object

 자바스크립트에는 **Prototype Link** 와 **Prototype Object**라는 것이 존재합니다. 그리고 이 둘을 통틀어 **Prototype**이라고 부른다.



## Prototype Object === Prototype Property

 객체는 언제나 함수(Function)로 생성됩니다.

```javascript
function Person() {} // => 함수
var personObject = new Person(); // => 함수로 객체를 생성
```

 personObject 객체는 Person이라는 함수로 생성된 객체입니다. 이렇듯 언제나 객체는 함수에서 시작됩니다. 우리가 많이 쓰는 일반적인 객체 생성도 예외는 아닙니다.

```javascript
var obj = new Object(); // === var obj = {};
```

 위 코드에서 **Object**가 자바스크립트에서 기본적으로 제공하는 **함수**입니다.



함수가 정의될 때는 2가지 일이 동시에 이루어집니다.

#### **1.해당 함수에 Constructor(생성자) 자격 부여**

> .constructor가 의미하는 것이 무엇일까?
>
> - 객체를 생성한 함수를  얘기함.
> - 이 객체의 주인이 누구냐! 어디서 나온거냐? 
>
> - constructor는 prototype안에 들어있다.

 Constructor 자격이 부여되면 new를 통해 객체를 만들어 낼 수 있게 됩니다. 이것이 함수만 new 키워드를 사용할 수 있는 이유입니다. constructor가 아니면 new를 사용할 수 없다!



#### **2.해당 함수의 Prototype Object 생성 및 연결**

 함수를 정의하면 함수만 생성되는 것이 아니라 Prototype Object도 같이 생성이 됩니다.



![img](https://cdn-images-1.medium.com/max/1600/1*PZe_YnLftVZwT1dNs1Iu0A.png)

함수를 정의하면 이렇게 됩니다

 그리고 생성된 함수는 prototype이라는 속성을 통해 Prototype Object에 접근할 수 있습니다. Prototype Object는 일반적인 객체와 같으며 기본적인 속성으로 **constructor**와 **______proto__**를 가지고 있다.



![img](https://cdn-images-1.medium.com/max/1600/1*NpSb7ha6lMdZpc8hFvBl2g.png)

***prototype** 속성으로 Prototype Object에 접근

**constructor**는 Prototype Object와 같이 생성되었던 함수를 가리키고 있습니다.
**______proto______**는 Prototype Link다



```javascript
function Person() {};

Person.prototype.eyes = 2;
Person.prototype.nose = 1;

var kim  = new Person();
var park = new Person():

console.log(kim.eyes); // => 2
...
```

이제 왜 Person.prototype을 사용하는지 눈에 보이시나요?



![img](https://cdn-images-1.medium.com/max/1600/1*PLRkoBdVZv9vZW1Z4FlLJw.png)

Person.prototype 객체에 eyes와 nose 속성이 추가되었다!

Prototype Object는 일반적인 객체이므로 속성을 마음대로 추가/삭제 할 수 있다. kim과 park은 Person 함수를 통해 생성되었으니 Person.prototype을 참조할 수 있게 됩니다.

#### 

##  \__proto__ === prototype link === [[prototype]]

### [[Prototype]] vs prototype 프로퍼티

모든 객체는 자신의 프로토타입 객체를 가리키는 [[Prototype]] 인터널 슬롯(internal slot) 을 갖으며 상속을 위해 사용된다.

함수도 객체이므로 [[Prototype]] 인터널 슬롯을 갖는다. 그런데 함수 객체는 일반 객체와는 달리 prototype 프로퍼티도 소유하게 된다.

>  주의해야 할 것은 prototype 프로퍼티는 프로토타입 객체를 가리키는 [[Prototype]] 인터널 슬롯은 다르다는 것이다. prototype 프로퍼티와 [[Prototype]]은 모두 프로토타입 객체를 가리키지만 관점의 차이가 있다.

```javascript
function Person(name) {
  this.name = name;
}

var foo = new Person('Lee');

console.dir(Person); // prototype 프로퍼티가 있다.
console.dir(foo);    // prototype 프로퍼티가 없다.
```



###  \__proto__ === prototype link === [[prototype]]

  모든 객체는 자신의 프로토타입 객체를 가리키는 [[Prototype]] 인터널 슬롯(internal slot) 을 갖으며 상속을 위해 사용된다. 함수도 객체이므로 [[Prototype]] 인터널 슬롯을 갖는다. 그런데 함수 객체는 일반 객체와는 달리 prototype 프로퍼티도 소유하게 된다.

- 함수를 포함한 모든 객체가 가지고 있는 인터널 슬롯이다.
- **객체의 입장에서 자신의 부모 역할을 하는 프로토타입 객체를 가리키며 함수 객체의 경우 Function.prototype를 가리킨다.** 

```js
console.log(Person.__proto__ === Function.prototype);
```



### prototype property

- 함수 객체만 가지고 있는 프로퍼티이다.
- **함수 객체가 생성자로 사용될 때 이 함수를 통해 생성될 객체의 부모 역할을 하는 객체(프로토타입 객체)를 가리킨다.**

```js
console.log(Person.prototype === foo.__proto__);
```









kim 객체는 eyes가 없는데 ??

kim에는 eyes라는 속성이 없는데도 kim.eyes를 실행하면 2라는 값을 참조하는 것을 볼 수 있다. Prototype Object에 존재하는 eyes 속성을 참조한 것인데요, 이게 어떻게 가능한걸까??

바로 kim이 가지고 있는 딱 하나의 속성 **\__proto__**가 그것을 가능하게 해주는 열쇠입니다.

**prototype** 속성은 함수만 가지고 있던 것과는 달리(Person.prototype 기억나시죠?) 
**\__proto__**속성은 모든 객체가 빠짐없이 가지고 있는 속성입니다.

**\__proto__** 는 객체가 생성될 때 조상이었던 함수의 Prototype Object를 가리킨다. kim객체는 Person함수로부터 생성되었으니 Person 함수의 Prototype Object를 가리키고 있는 것이죠.



![img](https://cdn-images-1.medium.com/max/1600/1*4V9q1tS5GWLU4sMkhOVNEg.png)

**\__proto__**를 까보니 역시 Person 함수의 Prototype Object를 가리키고 있었습니다.



![img](https://cdn-images-1.medium.com/max/1600/1*jMTxqTYDZGhykJQoimmb0A.png)



kim객체가 eyes를 직접 가지고 있지 않기 때문에 eyes 속성을 찾을 때 까지 상위 프로토타입을 탐색합니다. 최상위인 Object의 Prototype Object까지 도달했는데도 못찾았을 경우 **undefined를** 리턴한다. 



![img](https://cdn-images-1.medium.com/max/1600/1*mwPfPuTeiQiGoPmcAXB-Kg.png)



이런 프로토타입 체인 구조 때문에 모든 객체는 **Object의** 자식이라고 불리고, **Object Prototype Object**에 있는 모든 속성을 사용할 수 있습니다. 한 가지 예를 들면 toString함수가 있겠습니다.



![img](https://cdn-images-1.medium.com/max/1600/1*VW4PFea8x7LQiHp3PI8Hrg.png)

Object속성인 toString함수를 kim도 사용가능



####  `__proto__`라는 prototype 에 대한 link는 **상위에서 물려받은 객체의 프로토타입에 대한 정보**이며 `Prototype Object`는 자신을 원형으로 만들어질 **새로운 객체들 즉 하위로 물려줄 연결에 대한 속성**이다.



## 4.1 객체 자신이 소유하고 있는 결과만 나오게 하려면 어떻게 수정해야할까?

## 

```javascript
Object.prototype.keys = function() {
    return Object.keys(this);
}

const obj = { "name" : "codesquad", "class" : "webfrontend"}

for( key in obj) {
    console.log(`my value is ${obj[key]}`);
}

```

> 무슨 결과가 나올까?











```javascript
Object.prototype.keys = function() {
    return Object.keys(this);
}

const obj = { "name" : "codesquad", "class" : "webfrontend"}

for( key in obj) {
    //???여기에 무엇을 추가해야할까?
    console.log(`my value is ${obj[key]}`);
}

//my value is codesquad
//my value is webfrontend
//my value is function() {
//    return Object.keys(this);
//}
```

> 왜 이렇게 나올까? 
>
> 자바스크립트 엔진이 판단 한 것. 체인으로 연결되어있기 때문에 내가 추가한 최상위 메소드까지 노출 시킨 것. 





















## 답.

```javascript
Object.prototype.keys = function() {
    return Object.keys(this);
}

const obj = { "name" : "codesquad", "class" : "webfrontend"}

for( key in obj) {
    if(obj.hasOwnProperty(key)){
    	console.log(`my value is ${obj[key]}`);
    }
}

//my value is codesquad
//my value is webfrontend
```

hasOwnProperty() => 자기 자신의 프로퍼티를 가지고 있냐