import Counter from "./Counter";
import SyntheticEvent from "./SyntheticEvent";
import { HandlerEx, ChangeColor, Disappear } from "./components/ex/HandlerEx";
import EntirePractice from "./practice/EntirePractice";

function App() {
  return (
    <div className="App">
      <h1>합성 이벤트</h1>
      <SyntheticEvent />
      <Counter />
      <HandlerEx />
      <ChangeColor />
      <Disappear />

      <hr />
      <h1>실습</h1>
      <EntirePractice />
    </div>
  );
}

export default App;
