import React from "react";
import styled from "styled-components";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";

const WriteActionButtonBlock = styled.div`
  margin-top: 20px;

  button + button {
    margin-left: 10px;
  }
`;

function WriteActionButton({ save }) {
  const navigate = useNavigate();

  return (
    <WriteActionButtonBlock>
      <Button violet>{save ? "저장" : "추가"}</Button>
      <Button onClick={() => navigate("/")}>취소</Button>
    </WriteActionButtonBlock>
  );
}

export default WriteActionButton;
