# Asynchronous & RequestAnimationFrame



## what is Asynchronous?

![](<https://poiemaweb.com/img/block_nonblock.png>)

## asynchronous

1) setTimeOut

- 정해진 시간 이후에 콜백함수를 비동기적으로 실행해줄 것.

2) setInterval

- 정해진 시간을 반복적으로 콜백함수를 비동기적으로 실행해준다.





## **동기-비동기 순서 이해하기**

```js
function plus() {
  let a = 1;
  setTimeout( ()=>console.log(++a), 1000);
  return a;
}

const result = plus();
console.log('result :', result);  //?
```



## **비동기 상황 예**

```js
const baseData = [1,2,3,4,5,6,100];

const asyncRun = (arr, fn) => {
 for(var i=0; i<arr.length; i++) {
   setTimeout( () => fn(i), 1000);
 }
}

asyncRun(baseData, idx =>console.log(idx));
```



## **비동기 상황 예 - forEach로 변경해보자.**

```js
const baseData = [1,2,3,4,5,6,100];
const asyncRun = (arr, fn) => {
   arr.forEach((v,i) => {
     setTimeout( () => fn(i), 1000);
   });
}
asyncRun(baseData, idx =>console.log(idx))
```



## **비동기 상황 예 - 동기 + 비동기 + 동기**

```js
const baseData = [1,2,3,4,5,6,100];

function sync() {
  baseData.forEach((v,i) => {
    console.log("sync ", i);
  });
}

const asyncRun = (arr, fn) => {
   arr.forEach((v,i) => {
     setTimeout( () => fn(i), 1000);
   });
}


function sync2() {
  baseData.forEach((v,i) => {
    console.log("sync 2 ", i);
  });
}

asyncRun(baseData, idx =>console.log(idx))
sync();
sync2();

```



## **비동기 상황 예 - 비동기 + 비동기**

```js
//순서를 예상해보기.
//call stack과 callback queue를 상상하자.

const baseData = [1,2,3,4,5,6,100];

const asyncRun = (arr, fn) => {
   arr.forEach((v,i) => {
     setTimeout(() => {
       setTimeout(() => {
         console.log("cb 2");
         fn(i)
        },1000);
       console.log("cb 1");
     }, 1000);
   });
}

asyncRun(baseData, idx =>console.log(idx))

```



## "this" 문제

`setTimeout()`에 매개변수(혹은 다른 함수)를 전달할 때, 당신의 기대와는 다르게 this의 값이 호출된다.

`setTimeout()`에 의해 실행된 코드는 별도의 실행 컨텍스트에서 `setTimeout`이 호출된 함수로 호출됩니다.  호출된 함수에 대해서는 `this` 키워드를 설정하는 일반적인 규칙이 적용되며, this를 설정 혹은 할당하지 않은 경우, non-strict 모드에서 전역(혹은 `window`) 객체, strict모드에서 undefined를 기본 값으로 합니다. 다음 예제를 봐주세요: 



## window.requestAnimationFrame

