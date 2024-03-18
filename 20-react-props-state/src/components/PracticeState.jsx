import { useState } from "react";

export function IncreaseState() {
  const [number, setNumber] = useState(0);
  const increaseNumber = () => setNumber(number + 1);
  return (
    <div>
      <p>{number}</p>
      <button onClick={increaseNumber}>더하기 1</button>
    </div>
  );
}

export function DecreaseState() {
  const [number, setNumber] = useState(0);
  const decreaseNumber = () => setNumber(number - 2);
  return (
    <div>
      <p>{number}</p>
      <button onClick={decreaseNumber}>빼기 2</button>
    </div>
  );
}

export function Emoticon() {
  const [number, setNumber] = useState(0);
  const increaseEmoticon = () => setNumber(number + 1);
  const decreaseEmoticon = () => setNumber(number - 1);
  return (
    <div>
      <p>
        {number} {number >= 8 ? "devil" : "smile"}
      </p>
      <button onClick={increaseEmoticon}>1 증가</button>
      <button onClick={decreaseEmoticon}>1 감소</button>
    </div>
  );
}
