import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import palette from "../../lib/styles/palette";

const buttonStyle = css`
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  background: ${palette.gray[8]};
  padding: 0.25rem 1rem;
  outline: none;
  cursor: pointer;

  &:hover {
    background: ${palette.gray[6]};
  }

  ${(props) =>
    props.fullWidth &&
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

const StyledButoon = styled.button`
  ${buttonStyle}
`;
const StyledLink = styled(Link)`
  ${buttonStyle}
`;

function Button(props) {
  return props.to ? <StyledLink {...props} /> : <StyledButoon {...props} />;
}

export default Button;
