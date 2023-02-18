import React from "react";
import { useState } from "react";
import styled, { css } from "styled-components";
import palette from "../../lib/styles/palette";
import { GoPlus } from "react-icons/go";
import Button from "../common/Button";

const EventViewBlock = styled.div`
  flex: 0.3;
  border-left: 2px solid ${palette.gray[3]};
  padding: 20px 30px;
  position: relative;
`;

const EventItem = styled.li`
  cursor: pointer;

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
const EventAddButton = styled(Button)`
  /* width: 60px;
  height: 60px; */
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  font-size: 30px;
  position: absolute;
  bottom: 40px;
  right: 40px;
  transition: 0.3s;

  ${({ openMenu }) =>
    openMenu &&
    css`
      transform: rotate(45deg);
    `}
`;

// 이벤트 추가 서브 메뉴
const SubMenu = styled.ul`
  position: absolute;
  bottom: 115px;
  right: 40px;
  border: 1px solid ${palette.gray[3]};
  border-radius: 8px;
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.08);
  opacity: 0;
  visibility: hidden;
  transition: 0.3s;

  ${({ openMenu }) =>
    openMenu &&
    css`
      opacity: 1;
      visibility: visible;
    `}

  li {
    cursor: pointer;
    transition: 0.3s;

    &:first-child {
      border-bottom: 1px solid ${palette.gray[3]};
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
    }
    &:last-child {
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
    }

    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }

    a {
      display: block;
      height: 100%;
      padding: 8px 15px;
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
      <EventAddButton
        violet
        circle
        width="60px"
        height="60px"
        openMenu={openMenu}
        onClick={() => setOpenMenu(!openMenu)}
      >
        <GoPlus />
      </EventAddButton>
    </EventViewBlock>
  );
}

export default EventView;
