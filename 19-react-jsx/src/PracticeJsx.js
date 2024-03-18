// 함수형 컴포넌트로 진행
export default function PracticeJsx() {
  const name = "동녘";
  const animal = "닭";
  const numbers = [3, 5];
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  const a = 5;
  const b = 3;
  return (
    <div>
      <div>
        <h2>
          제 반려 동물의 이름은 {name}입니다.
          {name}는 {animal}입니다.
        </h2>
      </div>
      <div> {sum === 8 ? "정답입니다!" : "오답입니다!"} </div>
      <div> {a > b && "a가 b보다 큽니다"}</div>
      <div>
        <h1>Hello World</h1>
        아이디: <input type="text"></input>
        <br></br>
        <br></br>
        비밀번호: <input type="password"></input>
      </div>
    </div>
  );
}
