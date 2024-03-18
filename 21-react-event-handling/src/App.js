import Counter from "./Counter";
import SyntheticEvent from "./SyntheticEvent";
import { HandlerEx, ChangeColor, Disappear } from "./components/ex/HandlerEx";

function App() {
  return (
    <div className="App">
      <h1>합성 이벤트</h1>
      <SyntheticEvent />
      <Counter />
      <HandlerEx />
      <ChangeColor />
      <Disappear />
    </div>
  );
}

export default App;
