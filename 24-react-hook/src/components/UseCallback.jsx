import { useEffect, useState, useCallback } from "react";

export default function UseCallback() {
  const [number, setNumber] = useState(0);
  const [isTrue, setIsTrue] = useState(true);

  const func1 = () => {
    console.log(`number: ${number}`);
  };

  const func2 = useCallback(() => {
    console.log(`number: ${number}`);
  }, [number]);

  useEffect(() => {
    console.log("함수1 변경");
  });

  useEffect(() => {
    console.log("함수2 변경");
  }, [func2]);
  return (
    <>
      <div>
        <input type="text" value={number} />
        <br />
        <button>call function</button>
        <button>{isTrue.toString()}</button>
      </div>
    </>
  );
}
