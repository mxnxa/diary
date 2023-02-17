import React from "react";
import { useState } from "react";
import styled, { css } from "styled-components";
import palette from "../../lib/styles/palette";
import Button from "../common/Button";
import Responsive from "../common/Responsive";
import { GoPlus } from "react-icons/go";

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

const CalendarHead = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${palette.gray[3]};
  padding: 15px 40px;

  p {
    font-size: 26px;
    font-weight: 700;
    margin: 0 40px;
  }
`;

const CalendarBody = styled.div`
  flex: 1;
  display: grid;
  grid-template-rows: 30px repeat(6, 1fr); // 행
  grid-template-columns: repeat(7, 1fr); // 열
  /* gap: 10px; */
  /* padding: 10px ; */
`;

// 요일
const CalendarDay = styled.div`
  text-align: center;
  line-height: 30px;
  /* border-bottom: 1px solid ${palette.gray[3]}; */
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
    `}/* ${({ active }) =>
    active &&
    css`
      width: 25px;
      height: 25px;
      border-radius: 50%;
      background-color: ${palette.violet[3]};
    `} */
`;

// 이벤트 목록
const EventViewBlock = styled.div`
  flex: 0.3;
  border-left: 2px solid ${palette.gray[3]};
  padding: 20px 30px;
  position: relative;
`;

// 이벤트 아이템
const EventItem = styled.li`
  cursor: pointer;
  /* border-bottom: 1px solid ${palette.gray[3]}; */

  & + & {
    margin-top: 20px;
  }

  .title {
    font-weight: 700;
    margin-bottom: 5px;
  }
  .time {
    font-size: 12px;
  }
  .body {
    font-size: 14px;
  }
`;

// 이벤트 추가 버튼
const EventAddButton = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${palette.violet[3]};
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  color: #fff;
  font-size: 26px;
  font-weight: 700;
  cursor: pointer;
  position: absolute;
  bottom: 40px;
  right: 40px;

  &:hover {
    background-color: ${palette.violet[4]};
  }
`;

// 이벤트 추가 서브 메뉴
const SubMenu = styled.ul`
  position: absolute;
  bottom: 115px;
  right: 40px;
  border: 1px solid ${palette.gray[3]};
  border-radius: 8px;
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.08);
  display: none;

  ${({ openMenu }) =>
    openMenu &&
    css`
      display: block;
    `}

  li {
    cursor: pointer;
    padding: 7px 15px;

    &:nth-child(1) {
      border-bottom: 1px solid ${palette.gray[3]};
    }
  }
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

const today = {
  year: new Date().getFullYear(),
  month: new Date().getMonth(),
  date: new Date().getDate(),
};

const eventlist = [
  { id: 1, title: "oo생일", time: "하루 종일" },
  { id: 2, title: "첫 번째 기록", body: "첫 번째 기록입니다." },
  { id: 3, title: "두 번째 기록", body: "두 번째 기록입니다." },
];

function CalendarView() {
  const [currentTargets, setCurrentTargets] = useState(today);
  // const [selectedTargets, setSelectedTargets] = useState(today);
  const { year, month } = currentTargets;
  const [openMenu, setOpenMenu] = useState(false);

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

  const startDate = new Date(year, month, 1);

  const renderDate = new Date(
    startDate.getFullYear(),
    startDate.getMonth(),
    startDate.getDate() - startDate.getDay()
  );

  const render = () => {
    let result = [];

    for (let i = 1; i <= 42; i++) {
      result.push(
        <CalendarDate key={i} isCurrentMonth={month === renderDate.getMonth()}>
          {renderDate.getDate()}
        </CalendarDate>
      );
      renderDate.setDate(renderDate.getDate() + 1);
    }

    return result;
  };

  return (
    <Wrapper>
      <CalendarViewBlock>
        <CalendarHead>
          <Button onClick={() => prevMonth()}>&lt;</Button>
          <p>
            {year}년 {month + 1}월
          </p>
          <Button onClick={() => nextMonth()}>&gt;</Button>
        </CalendarHead>
        <CalendarBody>
          {daylist.map((day, idx) => (
            <CalendarDay key={idx}>{day}</CalendarDay>
          ))}
          {render()}
        </CalendarBody>
      </CalendarViewBlock>
      <EventViewBlock>
        <ul>
          {eventlist.map((item) => (
            <EventItem key={item.id}>
              <span className="title">{item.title}</span>
              {item.time ? (
                <span className="time">{item.time}</span>
              ) : (
                <p className="body">{item.body}</p>
              )}
            </EventItem>
          ))}
        </ul>
        <SubMenu openMenu={openMenu}>
          <li>
            <a href="/schedule">일정 추가</a>
          </li>
          <li>
            <a href="/daily">일상 기록</a>
          </li>
        </SubMenu>
        <EventAddButton onClick={() => setOpenMenu(true)}>
          <GoPlus />
        </EventAddButton>
      </EventViewBlock>
    </Wrapper>
  );
}

export default CalendarView;
