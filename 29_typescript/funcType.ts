function print(a: number, b: number, c: number): void {
  console.log(a);
  console.log(b);
  console.log(c);
}
print(1, 2, 3);
// print(1, 2, 3, 4); // err
// print(1, 2); // err

function print2(a: number, b: number, c?: number): void {
  console.log(a);
  console.log(b);
  console.log(c);
}
print2(1, 2, 3);
print2(1, 2);

// void type
function sayHeollo(): void {
  console.log("hello");
}

sayHeollo();

function concatStr(a: string, b: number): string {
  return a + b;
}

// 원의 넓이를 구하는 함수
function circleArea(r: number): number {
  return r * r * Math.PI;
}

console.log("안녕", 2);
console.log(circleArea(5));

// 함수 표현식으로
const triangleArea = (w: number, h: number): number => (w * h) / 2;
console.log("삼각형의 넓이", triangleArea(2, 4));

interface Greet {
  name: string;
  hi(): string;
  bye(a: number): string;
}

const jh: Greet = {
  name: "sdw",
  hi() {
    return "안녕 내 이름은 " + this.name + "이야";
  },
  bye(a: number) {
    return `작별인사를 ${a}번 했습니다.`;
  },
};

console.log(jh.hi());
console.log(jh.bye(5));

// never type
// 항상 함수의 끝에 절대 도달하지 않는 경우에만 never 타입 할당 가능
function goingOn(a: number): never {
  while (true) {
    console.log("끝나지 않는 함수입니다.");
    // if (a > 10) break; // 특정 조건일 때 빠져나올 수 있음 >> never type x
  }
}

// goingOn();

// 숫자가 오면 더하기
// 문자가 오면 문자 이어주기
// function addSomething(x: string | number, y: string | number): string | number {
//   return x + y;
// }

// 오버로딩, 오버라이딩
/*
- 오버라이딩: 클래스에서 상속을 했을 때, 메소드 재정의
- 오버로딩: 함수에서 매개변수의 개수나 타입, 함수의 타입이 다를 때
            같은 이름으로 매개변수의 종류와 개수를 다르게 선언할 수 있음.
            함수의 이름을 똑같이 사용하기 때문에 비슷한 기능일 때만 사용할 수 있음
*/
// 오버로딩
function addSomething(x: string, y: string): string;
function addSomething(x: number, y: number): number;
function addSomething(x: any, y: any) {
  return x + y;
}

addSomething(1, 1); // 2
addSomething("안녕", "하세요"); // "안녕하세요"
console.log(addSomething(1, 1));
console.log(addSomething("안녕", "하세요"));

// addSomething(1, "2");

const sum1 = (a: number, b: number): void => console.log(a + b);
sum1(5, 11);

const sum2 = (...number: number[]): number => {
  let sum = number.reduce((acc, curr) => acc + curr);
  return sum;
};
console.log(sum2(1, 2, 3, 4, 5));

/* 실습문제 2 */
function sum3(...a: number[]) {
  //   console.log(a);
  let sum = 0;
  a.forEach((number) => (sum += number));
  return sum;
}

console.log(sum3(1, 2, 3, 4, 5));
