import { useState } from "react";

export function HandlerEx() {
  const [text, setText] = useState("Hello, World!");
  const innerHtml = () => {
    setText("Goodbye World!");
  };
  return (
    <div>
      <div>{text}</div>
      <button onClick={innerHtml}>클릭</button>
    </div>
  );
}

export function ChangeColor() {
  const [text, setText] = useState("검정색 글씨");
  const [color, setColor] = useState("black");
  const red = () => {
    setText("빨간색 글씨");
    setColor("red");
  };
  const blue = () => {
    setText("파란색 글씨");
    setColor("blue");
  };

  return (
    <div>
      <h1 style={{ color }}>{text}</h1>
      <button onClick={red}>빨간색</button>
      <button onClick={blue}>파란색</button>
    </div>
  );
}

export function Disappear() {
  const [text, setText] = useState("안녕하세요");
  const [button, setButton] = useState("사라져라");
  const disappear = () => {
    if (text === "안녕하세요") {
      setText("");
      setButton("보여라");
    } else {
      setText("안녕하세요");
      setButton("사라져라");
    }
  };

  return (
    <div>
      <button onClick={disappear}>{button}</button>
      <h1>{text}</h1>
    </div>
  );
}
