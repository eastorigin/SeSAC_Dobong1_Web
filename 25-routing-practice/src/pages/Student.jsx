import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import styled from "styled-components";

export default function Student({ studentList }) {
  const data = useParams();
  console.log(data);
  const navigate = useNavigate();

  // const student = studentList.find((student) => student.name === name);
  const Container = styled.div`
    background-color: yellowgreen;
  `;
  const Name = styled.span`
    color: blue;
    font-weight: bold;
  `;

  const [modeParams, setModeParams] = useSearchParams();

  console.log(modeParams.get("name"));
  return (
    <Container>
      <p>
        학생 이름은 <span>{data.name}</span>입니다.
      </p>
      {/* {modeParams.get("name") ? (
        <p>실제 학생 이름은 {modeParams.get("name")}입니다.</p>
      ) : null} */}
      {modeParams.get("name") &&
        `실제 학생 이름은 ${modeParams.get("name")}
      입니다.`}
      <button onClick={() => navigate(-1)}>이전 페이지로</button>
    </Container>
  );
}
