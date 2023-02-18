import React from "react";
import styled from "styled-components";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
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
  border-radius: 20px;
  padding: 40px 60px;
  background-color: #fff;
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.08);
`;

const DateBlock = styled.div`
  text-align: center;
  margin-bottom: 40px;

  p {
    display: inline-block;
    border-bottom: 1px solid #000;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  padding: 12px 15px;
`;

const TitleInput = styled(StyledInput)`
  font-size: 30px;
  font-weight: 700;
  border: 1px solid #ccc;
  border-bottom: none;
`;

const QuillWrapper = styled.div`
  .ql-editor {
    min-height: 500px;
    font-size: 16px;
  }
`;

const today = {
  year: new Date().getFullYear(),
  month: new Date().getMonth(),
  date: new Date().getDate(),
  hour: new Date().getHours(),
  minute: new Date().getMinutes(),
};

function Editor() {
  const { year, month, date, hour, minute } = today;
  // const h12 = hour > 12 ? hour - 12 : hour;
  const h12 = hour === 0 ? 12 : hour;
  const ampm = hour < 12 ? "오전" : "오후";
  const min_0 = minute < 10 ? "0" + minute : minute;
  const todaytime = `${year}.${month}.${date} ${ampm} ${h12}:${min_0}`;

  console.log(today);
  console.log(new Date());

  const modules = {
    toolbar: {
      container: [
        [{ font: [] }, { size: ["small", false, "large", "huge"] }],
        ["bold", "italic", "underline", "strike"],
        [{ color: [] }, { background: [] }],
        [
          { list: "ordered" },
          { list: "bullet" },
          { indent: "-1" },
          { indent: "+1" },
          { align: [] },
        ],
        [{ header: "1" }, { header: "2" }, "blockquote", "code-block"],
        ["link", "image", "video"],
      ],
    },
  };

  return (
    <Wrapper>
      <EditorBlock>
        <DateBlock>
          <p> {todaytime}</p>
          {/* {year}.{month}.{date} {ampm} {hour}:{minute} */}
        </DateBlock>
        <TitleInput placeholder="제목" />
        <QuillWrapper>
          <ReactQuill
            theme="snow"
            modules={modules}
            placeholder="소중한 일상을 기록해보세요."
          />
        </QuillWrapper>
        <WriteActionButton save />
      </EditorBlock>
    </Wrapper>
  );
}

export default Editor;
