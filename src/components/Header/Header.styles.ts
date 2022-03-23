import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../../images/headerlogo.svg";

export const StyledHeader = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, .2);
  background-color: #FFFFFF;
  box-shadow: #F1F2FA 0 5px 10px;
  width: 100%;
`

export const Root = styled.div`
  width: 1280px;
  height: 80px;
  display: flex;
  justify-content: center;
  margin: auto;
  align-items: center;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: 150px 50px;
  background-position: left;
`;

export const StyledLink = styled(Link)`
  margin: 0 50px;
  padding: 5px 10px;
  text-decoration: none;
  font-size: 20px;
  color: #4874c7;
  align-items: start;
  outline: 5px solid transparent;
  font-weight: 700;
  &:after {
    display: block;
    content: '';
    border-bottom: solid 2px #4874c7;
    transform: scaleX(0);
    transition: transform 300ms ease-in-out;
    transform-origin: 0 50%;
  }
  &:hover:after {
    transform: scaleX(1);
  }
`;
