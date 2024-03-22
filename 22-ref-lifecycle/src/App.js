import LifeCycleFunc from "./components/LifeCycleClass";
import PostList, { PracLifeCycle } from "./components/FakePost";
import { RefClass1, RefClass2 } from "./components/RefClass";
import { RefFunc1, RefFunc2 } from "./components/RefFunction";
import FakePost from "./components/FakePost";
import Container from "./components/Container";

function App() {
  return (
    <div className="App">
      <h1>ref</h1>
      <RefClass1 />
      <RefClass2 />
      <RefFunc1 />
      <RefFunc2 />

      <h1>life cycle</h1>
      {/* <LifeCycleClass /> */}
      <LifeCycleFunc />
      {/* <FakePost /> */}
      {/* <PostList /> */}
      <Container>
        <PostList />
      </Container>
    </div>
  );
}

export default App;
