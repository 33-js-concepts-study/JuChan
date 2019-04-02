# Function Scope, Block Scope and Lexical Scope



## 스코프 (scope)

\- **범위, 영역** [네이버 사전]

\- 어느 범위까지 **참조**하는지. 즉, 변수와 매개변수(parameter)의 **접근성과 생존기간**을 뜻합니다. [블로그]

\- 스코프는 **참조 대상 식별자**(identifier, 변수, 함수의 이름과 같이 어떤 대상을 다른 대상과 구분하여 식별할 수 있는 유일한 이름)를 찾아내기 위한 규칙이다. [poiemaWeb]

\- 자바스크립트에서 스코프란 어떤 변수들에 **접근**할 수 있는지를 정의합니다. [블로그]



Quiz)

```javascript
if(true) {
  let i = 10;
}

console.log(i) ??
```



## 스코프의 구분

> 전역 스코프 (Global scope)

코드 어디에서든지 참조할 수 있다.

> 지역 스코프 (Local scope or Function-level scope)

함수 코드 블록이 만든 스코프로 함수 자신과 하위 함수에서만 참조할 수 있다. 함수 내에서 선언된 매개변수와 변수는 함수 외부에서는 유효하지 않다

```javascript
var x = 'global';
function ex() {
  var x = 'local';
  x = 'change';
}
ex(); 
alert(x); 
```



> block-level scope

let과 const로 선언한 변수는 블록이 만든 스코프로 자신과 하위 블록에서만 참조하게 된다.

```javascript 
function foo() {
  for(let i = 1; i < 10; i++) {
    console.log(i) // 1 ~ 10
  }
  console.log(i) // i is not defined
}

foo();
```





## lexical scoping (어휘적 범위 => 정적 범위)

스코프는 함수를 **호출** 할때가 아니라 **선언할** 때 생긴다

```javascript
var name = 'zero';
function log() {
  console.log(name);
}

function wrapper() {
  name = 'nero';
  log();
}
wrapper();
```



```javascript
var name = 'zero';
function log() {
  console.log(name);
}

function wrapper() {
  var name = 'nero';
  log();
}
wrapper();
```

