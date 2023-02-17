import React from "react";
import { useState } from "react";
import styled, { css } from "styled-components";
import palette from "../../lib/styles/palette";
import { GoPlus } from "react-icons/go";

const EventViewBlock = styled.div`
  flex: 0.3;
  border-left: 2px solid ${palette.gray[3]};
  padding: 20px 30px;
  position: relative;
`;

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

const eventlist = [
  { id: 1, title: "oo생일", time: "하루 종일" },
  { id: 2, title: "첫 번째 기록", body: "첫 번째 기록입니다." },
  { id: 3, title: "두 번째 기록", body: "두 번째 기록입니다." },
];

function EventView() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
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
  );
}

export default EventView;