# 4. Implicit, Explicit, Nominal, Structuring and Duck Typing



## **암묵적 타입 변환(Implicit coercion) or 타입 강제 변환(Type coercion)**

\- **자바스크립트 엔진은 표현식을 평가할 때 문맥, 즉 컨텍스트(Context)에 고려하여 암묵적 타입 변환을 실행한다**



### **암묵적 형변환 규칙** 

```javascript
// 표현식이 모두 문자열 타입이여야 하는 컨텍스트
'10' + 2               // '102'
`1 * 10 = ${ 1 * 10 }` // "1 * 10 = 10"

// 표현식이 모두 숫자 타입이여야 하는 컨텍스트
5 * '10' // 50

// 표현식이 불리언 타입이여야 하는 컨텍스트
!0 // true
if (1) {...}
```

> 이처럼 표현식을 평가할 때 문맥, 즉 컨텍스트에 부합하지 않는 다양한 상황이 발생할 수 있다. 이때 자바스크립트는 가급적 에러를 발생시키지 않도록 암묵적 타입 변환을 통해 표현식을 평가한다.



> 암묵적 타입 변환은 변수 값을 재할당해서 변경하는 것이 아니라 자바스크립트 엔진이 표현식을 에러없이 평가하기 위해 기존 값을 바탕으로 새로운 타입의 값을 만들어 단 한번 사용하고 버린다. 위 예제의 경우, 자바스크립트 엔진은 표현식 x + ‘‘을 평가하기 위해 변수 x의 숫자 값을 바탕으로 새로운 문자열 값 ‘10’을 생성하고 이것으로 표현식 ‘10’ + ‘‘를 평가한다. 이때 자동 생성된 문자열 ‘10’은 표현식의 평가가 끝나면 아무도 참조하지 않으므로 가비지 컬렉터에 의해 메모리에서 제거된다.



## **명시적 타입 변환(Explicit coercion) or 타입 캐스팅(Type casting)**

\- 개발자가 직접 스크립트를 이용해 어떤 형으로 바꿀지 명시해주는 것

\- 문자를 숫자로, 숫자를 문자로 변환

\- 모든 형변환은 전역함수 또는 특정 클래스에서 제공하는 메서드를 이용해서 처리됨



### **명시적 형변환 방법**

1) 문자를 숫자로

```javascript
// 정수형
var value = "123.456";
parseInt(value);
//결과 : 123
 
var value = "123";
Number(value);
// 결과 : 123
```

```javascript
// 실수형
var value = "123.456";
parseFloat(value);
// 결과 : 123.456
 
var value = "123.456";
Number(value);
// 결과 : 123.456
```

 

2) 숫자를 문자로

```javascript
// 일반 문자형 : String() 사용
var value = 15;
String(value);
// 결과 : 15

// 16진수 문자형 : Number.toString() 사용
var value = 15;
value.toString(16);
// 결과 : f

// 실수 문자형 : Number.toFixed() 사용
var value = 123.456;
value.toFixed(2);
// 결과 : 123.46 반올림 발생
```



> 명시적 타입 변환은 타입을 변경하겠다는 개발자의 의지가 코드에 명백히 드러난다. 하지만 암묵적 타입 강제 변환은 자바스크립트 엔진에 의해 암묵적으로, 즉 드러나지 않게 타입이 자동 변환되기 때문에 타입을 변경하겠다는 개발자의 의지가 코드에 명백히 나타나지 않는다.
>
> 따라서 자신이 작성한 코드에서 암묵적 타입 변환이 발생하는지, 발생한다면 어떤 타입의 어떤 값으로 변환되는지, 그리고 타입 변환된 값으로 표현식은 어떻게 평가될 것인지 예측 가능해야 한다. 만약 예측하지 못하거나 예측한 내용이 결과와 일치하지 않는다면 버그를 생산할 가능성이 높아진다.
>
> 그렇다면 명시적 타입 변환 만을 사용하고 암묵적 타입 변환은 발생하지 않도록 코드를 작성하면 어떨까? 좋은 생각이긴 하지만 이러한 논리는 옳지 않다. 때로는 명시적 타입 변환보다 암묵적 타입 변환이 가독성 면에서 더 좋을 수도 있다. 예를 들어 자바스크립트 문법을 잘 이해하고 있는 개발자에게는 `(10).toString()`보다 `10 + ''`이 더욱 간결하고 이해하기 쉬울 수 있다.
>
> 중요한 것은 코드를 예측할 수 있어야 한다는 것이다. 동료가 작성한 코드를 정확히 이해할 수 있어야 하고 자신의 코드는 타인에 의해 쉽게 이해될 수 있어야 한다. 이를 위해 타입 변환이 어떻게 동작하는지 정확히 이해하고 사용하도록 하자



### why?

> ## Why is it doing it wrong?
>
> 자바스크립트가 처음 만들어진 시점에 자바스크립트의 가장 큰 목적 하나가 "web을 정상적으로 동작시키자'' 였다.
>
> The simple reason is history. JavaScript has a long, weird, winding history from when Brendan Eich originally wrote the first prototype in 10 days at Netscape in 1995.
>
> Since then, anything that hasn't been "fixed" has only one reason. JavaScript has one simple rule -- don't break the web. This is why strange things like `typeof null === 'object'` exist. This is outside the scope of this article, so more on why that is [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#null).



## 같이 풀어볼 예제들!!

```javascript
- 1 + "1"
- 11 - "1"
- 3 * "3"
- "6" / 3
- 1 + "2" + 1

- true + false
- false * true
- 5 + true

const foo = {
  valueOf: () => 2
}
3 + foo // 5
4 * foo // 8

const bar = {
  toString: () => " promise is a boy :)"
}
1 + bar // "1 promise is a boy :)"


4 * [] // 0
4 * [2] // 8
4 + [2] // "42"
4 + [1, 2] // "41,2"
4 * [1, 2] // NaN

"string" ? 4 : 1 // 4
undefined ? 4 : 1 // 1
```

