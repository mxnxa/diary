import React from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import Button from "../common/Button";

const CalendarHeaderBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${palette.gray[3]};
  padding: 15px 40px;

  p {
    min-width: 200px;
    font-size: 26px;
    font-weight: 700;
    text-align: center;
  }
`;

function CalendarHeader({ currentTargets, prevMonth, nextMonth }) {
  const { year, month } = currentTargets;

  return (
    <CalendarHeaderBlock>
      <Button onClick={prevMonth}>&lt;</Button>
      <p>
        {year}년 {month + 1}월
      </p>
      <Button onClick={nextMonth}>&gt;</Button>
    </CalendarHeaderBlock>
  );
}

export default CalendarHeader;
