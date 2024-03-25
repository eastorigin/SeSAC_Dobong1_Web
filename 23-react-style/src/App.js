import logo from "./logo.svg";
import "./App.css";
import BasicCss from "./components/BasicCss";
import ModuleCss from "./components/ModuleCss";
import StyledComp from "./components/StyledComp";
import FirstPage from "./components/FirstPage";
import AppCopy from "./App copy";
import Sass from "./components/Sass";

function App() {
  return (
    <>
      <h1>react에 style 적용하기</h1>
      <BasicCss />
      <ModuleCss />
      <StyledComp />
      {/* <FirstPage />
      <AppCopy /> */}
      <Sass />
    </>
  );
}

export default App;
