export function PracticeProps(food) {
  const { name } = food;
  return (
    <div>
      <p>제가 좋아하는 음식은 {name}입니다.</p>
    </div>
  );
}

PracticeProps.defaultProps = {
  name: "돈까스",
};

// import img from "../img.jpg";
export function BookProps(props) {
  const { title, author, price, type } = props;
  return (
    <div>
      <h1>이번주 베스트셀러</h1>
      <h2>{title}</h2>
      <p>저자: {author}</p>
      <p>판매가: {price}원</p>
      <p>구분: {type}</p>
    </div>
  );
}

export function TextProps(props) {
  const { text, valid } = props;
  return (
    <div>
      <p>{text}</p>
      <button onClick={valid}>콘솔 메세지</button>
    </div>
  );
}

TextProps.defaultProps = {
  text: "이건 기본 text props입니다.",
};
