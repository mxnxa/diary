import React from "react";
import styled from "styled-components";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Responsive from "../../common/Responsive";
import WriteActionButton from "../WriteActionButton";

const EditorBlock = styled(Responsive)`
  border-radius: 20px;
  margin-top: 100px;
  margin-bottom: 100px;
  padding: 50px;
  background-color: #fff;
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.08);
`;

const DateBlock = styled.div`
  text-align: center;
  margin-bottom: 60px;

  p {
    display: inline-block;
    border-bottom: 1px solid #000;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  margin-bottom: 20px;
`;

const TitleInput = styled(StyledInput)`
  font-size: 40px;
  font-weight: 700;
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
  const h12 = hour > 12 ? hour - 12 : hour;
  const ampm = hour < 12 ? "오전" : "오후";
  const todaytime = `${year}.${month}.${date} ${ampm} ${h12}:${minute}`;

  const modules = {
    toolbar: {
      container: [
        [{ size: ["small", false, "large", "huge"] }, { color: [] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [
          { list: "ordered" },
          { list: "bullet" },
          { indent: "-1" },
          { indent: "+1" },
          { align: [] },
        ],
        ["code-block", "link", "image"],
      ],
    },
  };

  return (
    <EditorBlock>
      <DateBlock>
        <p> {todaytime}</p>
        {/* {year}.{month}.{date} {ampm} {hour}:{minute} */}
      </DateBlock>
      <TitleInput placeholder="제목" />
      <ReactQuill theme="snow" modules={modules} />
      <WriteActionButton save />
    </EditorBlock>
  );
}

export default Editor;
