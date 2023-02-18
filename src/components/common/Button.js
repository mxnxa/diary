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
  transition: 0.3s;

  &:hover {
    background: ${palette.gray[6]};
  }

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
      padding: 0.6rem 0;
    `}

  ${({ violet }) =>
    violet &&
    css`
      background: ${palette.violet[3]};

      &:hover {
        background: ${palette.violet[4]};
      }
    `}

    ${({ circle }) =>
    circle &&
    css`
      border-radius: 50%;
    `}

    ${({ width }) =>
    width &&
    css`
      width: ${width};
    `}

    ${({ height }) =>
    height &&
    css`
      height: ${height};
    `}
`;

const StyledButton = styled.button`
  ${buttonStyle}
`;
const StyledLink = styled(Link)`
  ${buttonStyle}
`;

function Button({ children, to, violet, width, height, ...rest }) {
  console.log(rest);
  return (
    <>
      {to ? (
        <StyledLink to={to} violet={violet} {...rest}>
          {children}
        </StyledLink>
      ) : (
        <StyledButton violet={violet} width={width} height={height} {...rest}>
          {children}
        </StyledButton>
      )}
    </>
  );
}

export default Button;
