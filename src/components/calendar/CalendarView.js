import React from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import Button from "../common/Button";

const CalendarViewBlock = styled.div`
  flex: 2;
`;

const CalendarHead = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid ${palette.gray[3]};
  padding: 10px 0;
`;

const CalendarBody = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: 40px repeat(6, 1fr);
  gap: 10px;
`;

const CalendarDay = styled.div`
  text-align: center;
`;
const CalendarDate = styled.p`
  text-align: center;
`;

const render = () => {
  let result = [];

  for (let i = 1; i < 32; i++) {
    result.push(<CalendarDate>{i}</CalendarDate>);
  }

  return result;
};

const daylist = [
  "일요일",
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일",
];

function CalendarView() {
  return (
    <CalendarViewBlock>
      <CalendarHead>
        <Button violet>이전</Button>
        <p>2023년 2월</p>
        <Button violet>다음</Button>
      </CalendarHead>
      <CalendarBody>
        {daylist.map((day) => (
          <CalendarDay>{day}</CalendarDay>
        ))}
        {render()}
      </CalendarBody>
    </CalendarViewBlock>
  );
}

export default CalendarView;
