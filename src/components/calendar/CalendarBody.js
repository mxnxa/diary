import React from "react";
import styled, { css } from "styled-components";
import palette from "../../lib/styles/palette";

const CalendarBodyBlock = styled.div`
  flex: 1;
  display: grid;
  grid-template-rows: 30px repeat(6, 1fr); // 행
  grid-template-columns: repeat(7, 1fr); // 열
`;

// 요일
const CalendarDay = styled.div`
  text-align: center;
  line-height: 30px;
`;

// 날짜
const CalendarDate = styled.p`
  border-top: 1px solid ${palette.gray[3]};
  /* border-left: 1px solid ${palette.gray[3]}; */
  padding: 10px;
  cursor: pointer;

  ${({ isCurrentMonth }) =>
    !isCurrentMonth &&
    css`
      color: ${palette.gray[3]};
      cursor: inherit;
    `}
`;

const daylist = [
  "일요일",
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일",
];

function CalendarBody({ currentTargets }) {
  const { year, month, date } = currentTargets;

  const startDate = new Date(year, month, 1);

  const renderDate = new Date(
    startDate.getFullYear(),
    startDate.getMonth(),
    startDate.getDate() - startDate.getDay()
  );

  console.log(startDate);
  console.log(renderDate.getFullYear());

  const render = () => {
    let result = [];

    for (let i = 1; i <= 42; i++) {
      result.push(
        <CalendarDate
          key={i}
          currentTargets={currentTargets}
          isCurrentMonth={month === renderDate.getMonth()}
        >
          {renderDate.getDate()}
        </CalendarDate>
      );
      renderDate.setDate(renderDate.getDate() + 1);
    }

    return result;
  };

  return (
    <CalendarBodyBlock>
      {daylist.map((day, idx) => (
        <CalendarDay key={idx}>{day}</CalendarDay>
      ))}
      {render()}
    </CalendarBodyBlock>
  );
}

export default CalendarBody;
