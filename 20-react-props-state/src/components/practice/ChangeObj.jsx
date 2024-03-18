import { useState } from "react";

export default function ChangeObj(props) {
  const { objArr } = props; //array

  const [idx, setIdx] = useState(0);
  function changeProfile() {
    if (idx === objArr.length - 1) {
      setIdx(0);
    } else {
      setIdx(idx + 1);
    }
  }

  return (
    <div>
      <p>이름: {objArr[0].name}</p>
      <p>나이: {objArr[0].age}</p>
      <p>별명: {objArr[0].nickName}</p>
      <button onClick={changeProfile}>다른 멤버 확인</button>
    </div>
  );
}
