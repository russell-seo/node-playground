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


- Javascript 를 
