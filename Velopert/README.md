### HTML JavaScript 연결

1. Dom 연결

   ```javascript
   const number = document.getElementById("number");
   ```

2. getElementById로 html에 설정된 id 값 불러오기

   ```javascript
   const number = document.getElementById("number");
   const increase = document.getElementById("increase");
   const decrease = document.getElementById("decrease");

   console.log(number);
   console.log(increase);
   console.log(decrease);
   ```

3. onclick = () => {} 통해 클릭 이벤트 생성

   ```javascript
   increase.onclick = () => {
     console.log("increase 클릭");
   };
   decrease.onclick = () => {
     console.log("decrease 클릭");
   };
   ```

4. parseInt() 통해 숫자를 10진수로 치환
   ```javascript
   increase.onclick = () => {
     const current = parseInt(number.innerText, 10);
     number.innerText = current + 1;
   };
   decrease.onclick = () => {
     const current = parseInt(number.innerText, 10);
     number.innerText = current + 1;
   };
   ```

- Dom 내장
  number.innerText : 해당 테그 안 정보(텍스트)
  number.offsetTop : top 값
  .id : id

* id 없을 경우 querSelectorAll을 통한 html 테그로 뽑아오기
  ```javascript
  const buttons = document.querySelectorAll("button");
  console.log(buttons);
  const [increase, decrease] = buttons;
  ```

### Mordal 생성
