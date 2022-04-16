import styled from "styled-components";
import closeButton from "../../assets/images/close-button.svg";

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
  background: rgba(0, 0, 0, 0.8);
  z-index: 1;
`;

export const Popup = styled.div`
  background-color: #d1e0f1;
  position: relative;
  width: 600px;
  height: 400px;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  border-radius: 30px;
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
  font-weight: 900;
`;

export const Text = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px auto 30px;
  font-size: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  width: max-content;
  line-height: 1.3;
  font-weight: 700;
  max-width: 500px;
`;
