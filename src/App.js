import { Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import palette from "./lib/styles/palette";
import CalendarPage from "./pages/CalendarPage";
import DailyPage from "./pages/DailyPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import SchedulePage from "./pages/SchedulePage";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  body {
    background-color: ${palette.violet[0]};
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<CalendarPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/daily" element={<DailyPage />} />
      </Routes>
    </>
  );
}

export default App;
