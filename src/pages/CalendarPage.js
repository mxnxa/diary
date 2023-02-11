import React from "react";
import styled from "styled-components";
import CalendarView from "../components/calendar/CalendarView";
import Header from "../components/common/Header";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

function CalendarPage() {
  return (
    <Container>
      <Header />
      <CalendarView />
    </Container>
  );
}

export default CalendarPage;
