import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import palette from "../../lib/styles/palette";

const AuthTemplateBlock = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .logo-area {
    /* color: ${palette.violet[4]}; */
    display: block;
    text-align: center;
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 2px;
    margin-bottom: 2rem;
  }
`;

const WhiteBox = styled.div`
  width: 360px;
  padding: 2rem;
  background: #fff;
  border-radius: 5px;
  border: 1px solid ${palette.gray[4]};
`;

function AuthTemplate({ children }) {
  return (
    <AuthTemplateBlock>
      <div className="logo-area">
        <Link to="/">Diary</Link>
      </div>
      <WhiteBox>{children}</WhiteBox>
    </AuthTemplateBlock>
  );
}

export default AuthTemplate;
