import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import LoginModal from "./components/Auth/LoginModal";
import RegisterModal from "./components/Auth/RegisterModal";
import Tournament from "./pages/Tournament";
import "./styles/Modal.scss";

const App: React.FC = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const toggleLoginModal = () => {
    setShowLoginModal(!showLoginModal);
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <span
            onClick={toggleLoginModal}
            style={{
              cursor: "pointer",
              color: "blue",
              textDecoration: "underline",
              marginRight: "20px",
            }}
          >
            로그인
          </span>
          <Link
            to="/tournament"
            style={{ color: "blue", textDecoration: "underline" }}
          >
            라면 이상형 월드컵
          </Link>
        </nav>
        {showLoginModal && <LoginModal toggleLoginModal={toggleLoginModal} />}
        <Routes>
          <Route path="/register" element={<RegisterModal />} />
          <Route path="/tournament" element={<Tournament />} />
          <Route path="/" element={<div>메인 페이지</div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
