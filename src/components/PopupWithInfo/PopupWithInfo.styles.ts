import styled from "styled-components";
import closeButton from "../../images/close-button.svg";

export const Root = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background:rgba(0,0,0,.8);
`;

export const Popup = styled.div`
  background-color: #FCFCFB;
  position: relative;
  width: 600px;
  height: 400px;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  border-radius: 30px;
  align-items: center;
`;

export const Close = styled.div`
  position: absolute;
  top: -35px;
  right: -35px;
  background-image: url(${closeButton});
  background-repeat: no-repeat;
  background-position: center;
  width: 40px;
  height: 40px;
  border: none;
  cursor: pointer;
  &:hover {
    transition: 0.3s linear;
    transform: rotate(90deg);
  }
`;

export const Title = styled.h2`
  font-size: 30px;
  margin: 25px auto 30px;
  font-weight: 700;
`;

export const StyledTd = styled.td`
  border-top: 1px solid rgba(34, 36, 38, 0.1);
  justify-content: center;
  font-weight: 400;
  font-size: 16px;
  padding: 18px 0;
  text-align: center;
  width: 50%;
`

export const StyledButton = styled.a`
  padding: 15px 10px;
  font-size: 18px;
  font-weight: 700;
  color: #FFFFFF;
  background-color: #0ea600;
  border: none;
  border-radius: 5px;
  width: 30%;
  margin: 18px 0;
  text-decoration: none;
  text-align: center;
`
