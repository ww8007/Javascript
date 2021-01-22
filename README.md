# Javascript

# 목차

- [Codesandbox](#codesandbox)
- [변수와 상수](#변수와-상수)
- [연산자](#연산자)
- [비교연산자](#비교-연산자)
- [문자열 끼리 합치기](#문자열-끼리-합치기)
- [조건문](#조건문)
- [함수](#함수)
- [화살표 함수](#화살표-함수)
- [객체](#객체)[객체](#객체)
- [객체의 비구조 할당](#객체의-비구조-할당)
- [객체 안에 함수 넣기](#객체-안에-함수-넣기)
- [getter setter 함수](#getter-setter-함수)
- [배열](#배열)
- [반복문](#반복문)
- [배열 내장함수](#배열-내장함수)

### Codesandbox

[Codesandbox](https://codesandbox.io/)

### 변수와 상수

특정 이름에 특정 값 담을 때 사용

- let
  특정 이름에 특정 값 담음

- 변수 : 바뀔 수 있는 값 (let)
  한 번 선언이 된다면(같은이름으로) 다시 선언 불가
  다른 블록 범위에서는 같은 이름으로 사용 가능

- 상수 : 한 번 설정하면 바꿀 수 없는 값
  한 번 선언이 된다면(같은이름으로) 다시 선언 불가
- var
  옛날의 방식은 var를 사용하여 변수 선언
  var, let 같은 맥락
  사용 범위가 다름 var, let
  IE 9, 10 -> let, const -> 존재하지 않지만 **Babe** 사용가능

* 문자열
  '' , "" 곁따옴표, 쌍따옴표 사용자 선택
  ; : 세미콜론 또한 사용자 선택
* bool
  ture, false 존재

* null, undifined
  null : 진짜 없음
  undifined : 아직 정해지지 않음

  ```jsx
  let friend = null;
  console.log(friend);
  let criminal;
  console.log(criminal);
  ```

### 연산자

- 산술 연산자
  사칙 연산자

### 비교 연산자

### 문자열 끼리 합치기

- 간단한 + 사용하여 이어 붙이기 가능

### 조건문

if else

```jsx
const a = 1;

if (a + 1 === 2) {
  console.log("a+1=2 입니다");
}
```

- let, var 차이

```jsx
const a = 1;

if (a + 1 === 2) {
  const a = 2;
  console.log("if 문의 a 값은 " + a);
}
console.log("if 문의 a 값은 " + a);
```

### 함수

특정 코드를 하나의 명령으로 처리

파라미터 -> 함수 -> 결과

- 넣는 값을 파라미터라 정의
- return 값이 반드시 존재

* 간단한 사칙 연산 함수

```javascript
function add(a, b) {
  return a + b;
}

const sum = add(1, 2);

console.log(sum);
```

- es6
  ECMAScript 6
  ES2015라 불리기도 함
  **const** **let**이 특징적

- backtick 사용하여 ` 문자열 받아오기

  ```jsx
  function hello(name) {
    return `Hello ${name}`;
  }

  const result = hello("jang ");

  console.log(result);
  ```

### 화살표 함수

let, const로 시작

= 다음에 파라미터 지정

```jsx
const add = (a, b) => {
  return a + b;
};
const sum = add(1, 2);
console.log(sum);
```

- 화살표 함수와 function this 값이 다름

### 객체

하나의 이름에 여러종류의 값을 넣을 수 있게 해줌

- key 값에는 보통 문자열

```jsx
const dog = {
  name: "멍멍이",
  age: 2,
  cute: true,
  sample: {
    a: 1,
    b: 2,
  },
};
console.log(dog.sample.a);
```

### 객체의 비구조 할당

객체 구조 분해라고 부를 수 있음
특정 값들을 객체에서 빼올 수 있음
함수 내부에서 꼭 사용할 필요는 없음

```jsx
const mydog = {
  name: "멍멍이",
  age: 2,
};
const { name } = mydog;
console.log(name);
const yourdog = {
  name: "복순이",
  age: 6,
};

function print(hero) {
  const { name, age } = hero;
  const text = `${name}는 (${age})살 입니다.`;
  console.log(text);
}

print(mydog);
print(yourdog);
```

### 객체 안에 함수 넣기

- 화살표 함수 안의 this는 자기가 속해 있는 곳을 가리키지 않음
- 객체 안 선언된 함수 에서의 this는 자기가 속해 있는 곳을 가르킴
- 밖으로 함수를 꺼내게 되면 이전 객체와의 관게가 사라짐

```jsx
const dog = {
  name: "멍멍이",
  sound: "멍멍",
  say() {
    console.log(this.sound);
  },
};
const cat = {
  name: "야옹이",
  sound: "야옹~",
};
cat.say = dog.say;
cat.say();
dog.say();
// 선언 된 객체가 존재 하지 않기 때문에 아래는 오류가 생긴다.
const Catsay = dog.say;
Catsay();
```

### getter setter 함수

- getter
  특정 값을 조회하려고 할 때 사용
  연산 된 값 return 받아서 사용

```jsx
const numbers = {
  a: 1,
  b: 2,
  get sum() {
    console.log("sum 함수 실행");
    return this.a + this.b;
  },
};

console.log(numbers.sum);
numbers.b = 7;
console.log(numbers.sum);
```

- setter
  - 파라미터 값이 무조건 존재

* get 함수를 통한 파라미터 없는 함수 지정 가능

```jsx
const dog = {
  _name: "멍멍이",
  get name() {
    console.log("_name 조회");
    return this._name;
  },
  set name(value) {
    console.log("이름이 바뀝니다." + value);
    this._name = value;
  },
};
console.log(dog.name);
dog.name = "뭉뭉이";
console.log(dog.name);
```

- 반복 호출의 값이 달라지고 싶지 않다면 getter, setter 사용
- getter -> 조회 할 때 마다 함수 호출
- setter -> 설정 할 때 마다 par 따라 설정 또는 함수 실행 가능

### 배열

배열 안에 여러 타입 선언 가능 -> 숫자 문자 문자열 객체

- .push
  push를 통한 삽입 가능
- .length
  길이 판단 가능

```jsx
const obj = [
  {
    name: "멍멍이",
  },
  { name: "야옹이" },
];

obj.push({ name: "멍뭉이" });
console.log(obj);
console.log(obj.length);
```

### 반복문

1. for 문
   ```jsx
   for (let i = 0; i < 10; i++) {
     console.log(i);
   }
   ```
2. while문

   ```jsx
   let i = 0;

   while (i < 10) {
     console.log(i);
     i++;
   }
   ```

3. for of

   - 배열 안 원소를 가지고 작업을 해야 할 때 씀

   * 배열 내장 함수를 가지고 더 쉽게 작업이 가능하기에 이렇게 쓰는 경우는 많이 없음

   ```jsx
   const numbers = [10, 20, 30, 40, 50];

   for (let number of numbers) {
     console.log(number);
   }
   ```

- Obj keys, values, entries

  ```jsx
  const numbers = [10, 20, 30, 40, 50];

  const doggy = {
    name: "멍멍이",
    sound: "멍멍",
    age: 2,
  };

  console.log(Object.keys(doggy));
  console.log(Object.values(doggy));
  console.log(Object.entries(doggy));
  // 배열 형태로 객체 key value 표현
  ```

4. for in

   - 객체에 대한 반복적인 행위

   ```jsx
   const numbers = [10, 20, 30, 40, 50];

   const doggy = {
     name: "멍멍이",
     sound: "멍멍",
     age: 2,
   };

   for (let key in doggy) {
     console.log(`${key}: ${doggy[key]}`);
   }
   ```

### 배열 내장함수

1. forEach

   1. 함수를 밖에 선언하여 사용

      ```jsx
      const superheros = ["아이언맨", "캡틴 아메리카", "토르", "스칼렛위치"];

      function print(hero) {
        console.log(hero);
      }

      superheros.forEach(print);
      ```

   2. 함수를 forEach 안에 선언하여 사용

      ```jsx
      const superheros = ["아이언맨", "캡틴 아메리카", "토르", "스칼렛위치"];

      superheros.forEach(function (hero) {
        console.log(hero);
      });
      ```

   3. 화살표 함수 사용

      ```jsx
      const superheros = ["아이언맨", "캡틴 아메리카", "토르", "스칼렛위치"];

      superheros.forEach((hero) => {
        console.log(hero);
      });
      ```

2. map
   배열 안 원소를 변환할 때 사용(모든원소)

   1. map 사용 밖에서 화살표 함수 정의하여 사용

      ```jsx
      const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      const square = (n) => n * n;
      const squared = array.map(square);

      console.log(squared);
      ```

   2. map 안에 함수 선언

      ```jsx
      const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      const squared = array.map((n) => n * n);

      console.log(squared);
      ```

   3. 선언된 배열 안 객체에서 text만 뽑아서 사용

      ```jsx
      const items = [
        {
          id: 1,
          text: "hello",
        },
        {
          id: 2,
          text: "bye",
        },
      ];

      const texts = items.map((item) => item.text);
      console.log(texts);
      ```

3. indexOf
   특정 항목 배열 중 몇 번째 원소인지 알려줌

   ```jsx
   const superHeros = ["아이언맨", "캡틴", "토르", "닥터 스트레인지"];

   const index = superHeros.indexOf("토르");
   console.log(index);
   ```

4. findIndex
   안의 값이 객체이거나 조건 일 경우 indexOf로 해결 불가한 경우 사용

   - 특수한 조건에 사용

   ```jsx
   const todos = [
     {
       id: 1,
       text: "자바 스크립트 입문",
       done: true,
     },
     {
       id: 2,
       text: "함수 배우기",
       done: true,
     },
     { id: 3, text: "객체와 배열 배우기", done: true },
     {
       id: 4,
       text: "배열 내장함수 배우기",
       done: false,
     },
   ];
   const index = todos.findIndex((todo) => todo.done === false);
   console.log(index);
   ```

5. find
   객체 자체나 원소에서 찾은 값을 알려줌

   ```jsx
   const index = todos.find((todo) => todo.done === false);
   console.log(index);
   ```

6. filter
   따로 조건을 만족시키는 경우만 필터링
   - true false 인 경우는 true false 반환 가능
   ```jsx
   const taskNotDone = todos.filter((todo) => todo.done === false);
   console.log(taskNotDone);
   const taskNotDone = todos.filter((todo) => !todo.done);
   console.log(taskNotDone);
   ```
