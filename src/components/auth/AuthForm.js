import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import Button from "../common/Button";

const AuthFormBlock = styled.div`
  h3 {
    color: ${palette.gray[7]};
    margin-bottom: 1rem;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  font-size: 1rem;
  border: 1px solid ${palette.gray[4]};
  border-radius: 5px;
  outline: none;
  padding: 6px 12px;

  &:focus {
    border: 1px solid ${palette.violet[4]};
  }
  & + & {
    margin-top: 0.5rem;
  }
`;

const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;

  a {
    color: ${palette.gray[6]};

    &:hover {
      color: ${palette.gray[8]};
      text-decoration: underline;
    }
  }
`;

const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
`;

const textMap = {
  login: "로그인",
  register: "회원가입",
};

function AuthForm({ type }) {
  const text = textMap[type];

  return (
    <AuthFormBlock>
      <h3>{text}</h3>
      <form>
        <StyledInput type="text" name="username" placeholder="아이디" />
        <StyledInput type="password" name="password" placeholder="비밀번호" />
        {type === "register" && (
          <StyledInput
            type="password"
            name="passwordConfirm"
            placeholder="비밀번호 확인"
          />
        )}
        <ButtonWithMarginTop fullWidth violet>
          {text}
        </ButtonWithMarginTop>
      </form>
      <Footer>
        {type === "login" ? (
          <Link to="/register">회원가입</Link>
        ) : (
          <Link to="/login">로그인</Link>
        )}
      </Footer>
    </AuthFormBlock>
  );
}

export default AuthForm;
