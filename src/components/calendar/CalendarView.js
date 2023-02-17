import React from "react";
import { useState } from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import Responsive from "../common/Responsive";
import CalendarHeader from "./CalendarHeader";
import CalendarBody from "./CalendarBody";
import EventView from "./EventView";

const Wrapper = styled(Responsive)`
  flex: 1;
  display: flex;
  background-color: #fff;
  /* border: 1px solid ${palette.gray[3]}; */
  border-radius: 20px;
  margin-top: 30px;
  margin-bottom: 30px;
  padding: 0;
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.08);
`;

const CalendarViewBlock = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const today = {
  year: new Date().getFullYear(),
  month: new Date().getMonth(),
  date: new Date().getDate(),
};

function CalendarView() {
  const [currentTargets, setCurrentTargets] = useState(today);
  const [selectedTargets, setSelectedTargets] = useState(today);
  const { year, month } = currentTargets;

  const prevMonth = () => {
    if (month > 0) {
      setCurrentTargets({ ...currentTargets, month: month - 1 });
    } else {
      setCurrentTargets({ ...currentTargets, year: year - 1, month: 11 });
    }
  };

  const nextMonth = () => {
    if (month < 11) {
      setCurrentTargets({ ...currentTargets, month: month + 1 });
    } else {
      setCurrentTargets({ ...currentTargets, year: year + 1, month: 0 });
    }
  };

  const onClickDate = (targets) => setSelectedTargets(targets);

  const selectedDate = () => {
    setCurrentTargets(today);
    setSelectedTargets(today);
  };

  return (
    <Wrapper>
      <CalendarViewBlock>
        <CalendarHeader
          currentTargets={currentTargets}
          prevMonth={prevMonth}
          nextMonth={nextMonth}
          selectedDate={selectedDate}
        />
        <CalendarBody
          currentTargets={currentTargets}
          selectedTargets={selectedTargets}
          onClickDate={onClickDate}
          selectedDate={selectedDate}
        />
      </CalendarViewBlock>
      <EventView />
    </Wrapper>
  );
}

export default CalendarView;
