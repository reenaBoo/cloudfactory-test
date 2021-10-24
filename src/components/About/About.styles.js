import styled from "styled-components";

export const Root = styled.div`
  width: 1280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 30px auto;
  border-bottom: 1px solid #00000033;
`;

export const Text = styled.p`
  font-size: 20px;
  font-weight: 400;
  justify-content: center;
  text-align: center;
  margin: 30px auto;
`;

export const AboutPic = styled.img`
  max-width: 75vw;
  max-height: 75vh;
  display: inline-block;
  border: 5px solid #333333;
`;