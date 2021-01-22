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
- [Reducer](#reducer)

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

7. splice, slice

   - splice

   * 배열에서 항목을 선택해서 삭제 (반환값으로 삭제된 항목 가져오기 가능)

   ```jsx
   const numbers = [10, 20, 30, 40];
   const index = numbers.indexOf(30);
   numbers.splice(index, 2);
   console.log(numbers);
   ```

   - slice
     - 배열에서 짤라서 가져오기 -> 기존 배열 건드리지 않음(불변성 유지)
     ```jsx
     const numbers = [10, 20, 30, 40];
     const sliced = numbers.slice(0, 2);
     console.log(sliced);
     console.log(numbers);
     ```

8. shift

   - 첫 번째 원소를 밖으로 꺼냄(불변성 유지 x)

   ```jsx
   const numbers = [10, 20, 30, 40];

   const value = numbers.shift();
   console.log(value);
   console.log(numbers);
   ```

9. pop

   - 뒤 쪽 부터 밖으로 꺼냄(불변성 유지 x)

   ```jsx
   const numbers = [10, 20, 30, 40];

   const value = numbers.pop();
   console.log(value);
   console.log(numbers);

   ans = (3)[(10, 20, 30)];
   ```

10. unshift

    - 첫 번째 인덱스에 원소 추가(불변성 유지 x)

    ```jsx
    const numbers = [10, 20, 30, 40];
    numbers.unshift(5);
    console.log(numbers);

    ans = (5)[(5, 10, 20, 30, 40)];
    ```

11. concat

    - 불변성 유지

    * 여러개 배열을 하나의 배열로 만들어 줌

    - spread 연산자와 비슷

    ```jsx
    const arr = [1, 2, 3];
    const arr2 = [4, 5, 6];

    const concated = arr.concat(arr2);

    console.log(concated);

    ans = (6)[(1, 2, 3, 4, 5, 6)];
    ```

12. join

    - 불변성 유지

    * 배열을 문자열로 만들어줌

    - join의 par 값으로 ' '나 ', ' 이렇게도 사용 가능하다.

    ```jsx
    const arr = [1, 2, 3, 4, 5];

    console.log(arr.join());
    ```

### Reducer

- 배열이 주어졌을 때 배열 안 값들 사용하여 연산

- 첫 번째 파라미터 : accumulator(누적된 값 )
  - 루프를 돌려서 누적된 값을 만드는 함수
- 두 번째 파라미터 : current(배열 값)
- 세 번째 파라미터 : 인덱스(index)
- 네 번째 파라미터 : 배열(arrary)

```jsx
const number = [1, 2, 3, 4, 5];

const avg = number.reduce((accumulator, current, index, arr) => {
  if (index === arr.length - 1) return (accumulator + current) / (index + 1);
  return accumulator + current;
});
console.log(avg);
```

- 위의 코드의 경우는 accumulator에 누적된 값이 마지막 인덱스의 배열 값 까지 더해 졌을 경우 평균을 구해주는 코드이다. 3번째 인자의 index 값과 4번째 인자의 arr(배열) 값을 사용하여서 길이를 판단 한뒤 이를 활용한다.

```jsx
const alpha = ["a", "a", "a", "b", "c", "d", "c", "c", "c"];

const my = alpha.reduce((acc, current) => {
  if (acc[current]) {
    acc[current] += 1;
  } else {
    acc[current] = 1;
  }
  return acc;
}, {});

console.log(my);
```

- reducer 예제

```jsx
function countBiggerThanTen(numbers) {
  return numbers.reduce((acc, current) => {
    if (current > 10) {
      return acc + 1;
    } else {
      return acc;
    }
  }, 0);
}

const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
console.log(count); // 5

export default countBiggerThanTen;
```

### 프로토타입과 클래스

- 객체 생성자
  함수를 통해 새로운 객체를 만들고 그 안에 함수를 넣을 수 있게 해줌
  - 객체 생성자 통해 새로운 객체 -> **new**

```jsx
function Animal(type, name, sound) {
  this.type = type;
  this.name = name;
  this.sound = sound;
  this.say = function () {
    console.log(this.sound);
  };
}

const dog = new Animal("개", "멍멍이", "멍멍");
const cat = new Animal("고양이", "야옹이", "야옹~");

dog.say();
cat.say();
```

위의 코드는 함수의 내용은 같지만 두 번이나 선언이 되고 있음
-> say가 같은 기능을 한다면 밖으로 꺼내 재사용

- 프로토타입을 사용하여 재사용이 가능하게 함

```jsx
Animal.prototype.say = function () {
  console.log(this.sound);
};
```

```jsx
Animal.prototype.sharedvalue = 1;
```

위 와 같이 상수를 선언하여 모든 객체에 삽입도 가능하다.

### 객체생성자 상속

call
1 par : 객체 생성자 함수에서의 this
2 ~ other : par

- prototype 을 통해 각 객체가 가지고 있는 값을 통해 기능 구현 가능

```javascript
function Animal(type, name, sound) {
  this.type = type;
  this.name = name;
  this.sound = sound;
}

Animal.prototype.say = function () {
  console.log(this.sound);
};

function Dog(name, sound) {
  Animal.call(this, "개", name, sound);
}
function Cat(name, sound) {
  Animal.call(this, "고양이", name, sound);
}

Dog.prototype = Animal.prototype;
Cat.prototype = Animal.prototype;

const dog = new Dog("멍멍이", "멍멍");
const cat = new Cat("야옹이", "야옹~");

dog.say();
cat.say();
```

### ES6 class

- javascript는 class 개념이 없었기에 이렇게 구현해 왔음
  es6는 class 존재 하지만 다른 언어의 개념과는 조금 다름

- 함수를 class 내부에서 사용 할 때 바로 prototype으로 설정됨

- 상속을 받을 때는 constructor 안 super를 사용해 상속을 받아야함

```jsx
class Animal {
  constructor(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
  }
  say() {
    console.log(this.sound);
  }
}

class Dog extends Animal {
  constructor(name, sound) {
    super("개", name, sound);
  }
}
class Cat extends Animal {
  constructor(name, sound) {
    super("고양이", name, sound);
  }
}

const dog = new Dog("멍멍이", "멍멍");
const cat = new Cat("나비", "야옹~");
const cat2 = new Cat("나비2", "하위");
dog.say();
cat.say();
cat2.say();
```

### class 만들어보기

- 클래스 내부에 선언하는 함수 -> **method**
- 자소분리

```javascript
class Food {
  constructor(name) {
    this.name = name;
    this.brands = [];
  }
  addBrand(brand) {
    this.brands.push(brand);
  }
  print() {
    console.log(`${this.name} 을 파는 음식점들`);
    console.log(this.brands.join(", "));
  }
}

const pizza = new Food("피자");
pizza.addBrand("피자헛");
pizza.addBrand("도미노");
console.log(pizza.brands);
pizza.print();
```

### 삼항 연산자

- 다중으로 사용가능

```jsx
const array = [];
let text = array.length === 0 ? "배열이 비어있습니다." : "비어있지 않습니다.";
console.log(text);
```

### Truthy and Falsy

True 같은 Flase 같은 걸 의미

에러 null checking -> undefined

```javascript
console.log(!undefined);
console.log(!null);
console.log(!0);
console.log("");
console.log(!Nan);
console.log(!false);
```

위를 제외한 모든 값들은 false로 나타남
!로 했을 경우

```javascript
const Truthy = value ? true : false;
console.log(Truthy);
```

!! 두번을 사용하면 삼항 연산자 사용하지 않고도
