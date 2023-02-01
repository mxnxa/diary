import React from "react";
import { Link } from "react-router-dom";
// import {  useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import Responsive from "./Responsive";

const HeaderBlock = styled.div`
  /* position: fixed; */
  width: 100%;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
`;

const Wrapper = styled(Responsive)`
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 2px;
  }
`;

function Header() {
  //   const navigate = useNavigate();

  return (
    <HeaderBlock>
      <Wrapper>
        <Link to="/" className="logo">
          Diary
        </Link>
        <div className="right">
          <Button to="/login" violet>
            로그인
          </Button>
          {/* <Button onClick={() => navigate("/register")}>회원가입</Button> */}
        </div>
      </Wrapper>
    </HeaderBlock>
  );
}

export default Header;
