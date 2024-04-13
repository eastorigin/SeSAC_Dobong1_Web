import { Link, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import MainPage from "./pages/MainPage";
import Header from "./components/Header";
import Student from "./pages/Student";
import NotFound from "./pages/NotFound";
import { useState } from "react";

const MyLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

function App() {
  const [student, setStudent] = useState([]);
  const studentList = [
    {
      name: "신동원",
    },
    {
      name: "codingon",
    },
    {
      name: "jisoo",
    },
  ];
  return (
    <div className="App">
      <Link></Link>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/students/:name"
          element={<Student studentList={studentList} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
