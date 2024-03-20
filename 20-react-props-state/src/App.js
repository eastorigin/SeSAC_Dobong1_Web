import PracticeMap from "./components/PracticeMap";
import Alphabet from "./components/Alphabet";
import { ClassProps, ClassProps2 } from "./components/ClassProps";
import ClassState from "./components/ClassState";
import { FunctionProps, FunctionProps2 } from "./components/FunctionProps";
import FunctionState from "./components/FunctionState";
import {
  BookProps,
  PracticeProps,
  TextProps,
} from "./components/PracticeProps";
import {
  IncreaseState,
  DecreaseState,
  Emoticon,
} from "./components/PracticeState";
import PropsMap from "./components/PropsMap";
import AnswerState from "./components/practice/AnswerState";
import ChangeObj from "./components/practice/ChangeObj";
import PororoObj from "./components/practice/PororoObj";
import PracticeMap2 from "./components/PracticeMap2";

function App() {
  const dataArr = [
    { name: "peach", number: 5, price: 5000 },
    { name: "banana", number: 1, price: 3000 },
    { name: "apple", number: 10, price: 7000 },
    { name: "grape", number: 12, price: 8500 },
  ];
  return (
    <div className="App">
      <h1>hello, props</h1>
      <ClassProps name="루피" color="pink" nickname="공주" />
      <ClassProps name="뽀로로" color="blue" nickname="사고뭉치" />
      <ClassProps2
        name="포비"
        color="beige"
        nickname="곰"
        // bgColor="black"
      />
      <FunctionProps name="사과" number={5} price={1000} />
      <FunctionProps2 price={50000} />
      <FunctionProps2 price={10000} name="딸기">
        <section style={{ backgroundColor: "yellow" }}>
          <article>1</article>
          <article>2</article>
          <article>3</article>
        </section>
      </FunctionProps2>
      <PracticeProps name="제육볶음" color="red" />
      <BookProps
        title="나의 하루는 4시 40분에 시작된다"
        author="김유진"
        price={13500}
        type="자기계발서"
      />
      <TextProps></TextProps>

      <h1>hello, state</h1>
      <ClassState />
      <FunctionState />
      <IncreaseState />
      <DecreaseState />
      <Emoticon />

      <h1>정답</h1>
      <AnswerState></AnswerState>
      <PororoObj></PororoObj>

      <h1>map과 filter 사용</h1>
      <PropsMap arr={dataArr} />
      <Alphabet />

      <h1>map 실습</h1>
      <PracticeMap />
      <PracticeMap2 />
    </div>
  );
}

export default App;
