import React from "react";
import styled from "styled-components";

const ResponsiveBlock = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  width: 1200px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    width: 1000px;
  }
  @media (max-width: 1000px) {
    width: 700px;
  }
  @media (max-width: 700px) {
    width: 100%;
  }
`;

function Responsive({ children, ...rest }) {
  return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>;
}

export default Responsive;
