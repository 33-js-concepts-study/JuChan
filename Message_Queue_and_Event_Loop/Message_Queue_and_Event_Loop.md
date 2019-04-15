# Message Queue and Event Loop



단일 쓰레드는 쓰레드가 하나뿐이라는 의미이며 이말은 곧 하나의 작업(task)만을 처리할 수 있다는 것을 의미한다. 하지만 실제로 동작하는 웹 애플리케이션은 많은 task가 동시에 처리되는 것처럼 느껴진다. 이처럼 자바스크립트의 동시성(Concurrency)을 지원하는 것이 바로 **이벤트 루프(Event Loop)**이다.

<이벤트 루프(Event Loop)와 브라우저의 환경>![자바스크립트 브라우저 환경](<https://poiemaweb.com/img/event-loop.png>)

이와 같이 자바스크립트 엔진은 단순히 작업이 요청되면 Call Stack을 사용하여 요청된 작업을 순차적으로 실행할 뿐이다. 앞에서 언급한 동시성(Concurrency)을 지원하기 위해 필요한 비동기 요청(이벤트를 포함) 처리는 자바스크립트 엔진을 구동하는 환경 즉 브라우저(또는 Node.js)가 담당한다.

- Event Queue === Task Queue === Message Queue === Callback Queue

  비동기 처리 함수의 콜백 함수, 비동기식 이벤트 핸들러, Timer 함수(setTimeout(), setInterval())의 콜백 함수가 보관되는 영역으로 **이벤트 루프(Event Loop)에 의해 특정 시점(Call Stack이 비어졌을 때)에 순차적으로 Call Stack으로 이동되어 실행**된다.

- Event Loop(이벤트 루프)

  Call Stack 내에서 현재 실행중인 task가 있는지 그리고 Event Queue에 task가 있는지 반복하여 확인한다. 만약 Call Stack이 비어있다면 Event Queue 내의 task가 Call Stack으로 이동하고 실행된다.



### 결론

이벤트 루프는 콜 스택과 콜백 큐 사이에서 눈치보는 중간다리 역할이다.  "콜 스택이 비어져있나?? => (비어져있으면) 콜백 큐에 있는 00야 콜 스택이 비어졌으니까 너 이제 저기로 가!"

