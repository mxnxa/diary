import React from "react";
import styled from "styled-components";
import palette from "../../../lib/styles/palette";
import Responsive from "../../common/Responsive";
import WriteActionButton from "../WriteActionButton";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EditorBlock = styled(Responsive)`
  height: 80%;
  border-radius: 20px;
  padding: 40px 60px;
  background-color: #fff;
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.08);
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 60px;
`;

const StyledInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-size: 16px;
  padding: 10px 0;
`;

const SelectDateBlock = styled.div`
  font-size: 16px;
  line-height: 1.5;
  border-top: 1px solid ${palette.gray[3]};
  border-bottom: 1px solid ${palette.gray[3]};
  padding: 10px 0;

  .start,
  .finish {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

function Editor() {
  return (
    <Wrapper>
      <EditorBlock>
        <Title>일정 추가</Title>
        <StyledInput placeholder="제목" />
        <SelectDateBlock>
          <div className="start">
            시작 <p>2023. 02. 17 오후 9:31</p>
          </div>
          <div className="finish">
            종료 <p>2023. 02. 17 오후 9:31</p>
          </div>
        </SelectDateBlock>
        <StyledInput placeholder="메모" />
        <WriteActionButton />
      </EditorBlock>
    </Wrapper>
  );
}

export default Editor;
