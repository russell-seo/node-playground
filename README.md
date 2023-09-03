# node-playground


## JavaScript 이벤트 루프

아래와 같은 함수가 있다고 할 때 Javascript 가 어떻게 동작하는지 이벤트 루프 방식에 대해 간단히 정리할려고 한다.

~~~javascript
function run() {
  console.log('3초 후 실행'
}
console.log('시작');
setTimeout(run, 3000);
console.log('끝');

~~~

![스크린샷 2023-07-16 오후 11 19 18](https://github.com/russell-seo/node-playground/assets/79154652/c889ebfb-b6d6-446a-ad2e-97b827d8e9cb)
![스크린샷 2023-07-16 오후 11 21 49](https://github.com/russell-seo/node-playground/assets/79154652/ff628f7d-350d-4d38-8eeb-460e4b2207e1)
![스크린샷 2023-07-16 오후 11 22 09](https://github.com/russell-seo/node-playground/assets/79154652/3afb41f7-e809-44fc-8c2a-1cbd7f6667ea)
![스크린샷 2023-07-16 오후 11 22 16](https://github.com/russell-seo/node-playground/assets/79154652/58974fd9-8ba1-4323-8207-5687cbd32df8)


- Javascript 를 일단 실행하면 호출스택에는 anonymous 가 먼저 깔린다.
- console.log('시작'); 이 먼저 호출 스택에 쌓이고 실행되고 사라진다.
- setTimeout(run, 3000); 는 비동기 함수이므로 먼저 호출스택에 쌓여서 실행되고 백그라운드로 넘어간다. 백그라운드에는 `타이머(run, 3000)`로 입력된다
  - Javascript는 비동기 함수나 네트워크 호출등 비동기 함수를 만나면 `백그라운드` -> `테스크 큐`로 넘어간다.
  - 코드가 `백그라운드`로 넘어가면 호출스택과 동시에 실행된다(다른 쓰레드에서 처리)
- console.log('끝'); 이 호출 스택에 쌓이고 실행된다.
  - 혹 백그라운드 함수가 먼저 끝나더라고 `호출 스택`이 먼저 실행된다.
- 호출스택이 비어있으면 테스크 큐에서 함수를 끌어와서 실행시킨다.

> 이벤트 루프는 호출스택이 비어있을 때 테스크 큐에서 함수를 끌어와서 실행시킨다.
> 추가로 Promise.then 이나 catch, process.nextTick 같은 경우에는 테스크 큐에서 setTimeout 같은 함수보다 우선순위를 먼저 가져가기 때문에 먼저 호출스택으로 꺼내어 져서 실행된다.

`Promise의 내부 코드는 동기적으로 실행되지만 .then을 만나면 비동기적으로 실행된다.`
