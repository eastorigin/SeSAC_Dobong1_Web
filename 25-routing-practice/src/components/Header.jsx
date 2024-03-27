import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
  const Header = styled.header`
    background-color: skyblue;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    .menu-item {
      margin: 0 8px;
      color: black;
    }
  `;
  return (
    <Header>
      <div>
        <Link to="/" className="menu-item">
          홈으로
        </Link>
        <Link to="/students/신동원" className="menu-item">
          학생
        </Link>
        <Link to="/students/codingon" className="menu-item">
          코딩온
        </Link>
        <Link to="/students/new?name=jisoo" className="menu-item">
          query
        </Link>
      </div>
    </Header>
  );
}
