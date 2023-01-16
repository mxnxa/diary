import React from "react";
import styled, { css } from "styled-components";
import palette from "../../lib/styles/palette";

const StyledButton = styled.button`
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  padding: 0.25rem 1rem;
  outline: none;
  cursor: pointer;
  background: ${palette.gray[8]};

  &:hover {
    background: ${palette.gray[6]};
  }

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
      padding: 0.6rem 0;
    `}

  ${(props) =>
    props.violet &&
    css`
      background: ${palette.violet[3]};

      &:hover {
        background: ${palette.violet[4]};
      }
    `}
`;

function Button(props) {
  return <StyledButton {...props} />;
}

export default Button;
