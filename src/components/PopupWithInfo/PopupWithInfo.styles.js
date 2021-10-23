import styled from "styled-components";

export const Root = styled.div`
  background-color: #D1E0F1;
  width: 600px;
  height: 400px;
  margin: 0;
  padding: 0;
  position: fixed;
  top: 100px;
  display: flex;
  flex-direction: column;
  border-radius: 30px;
`;

export const Close = styled.div`
  position: absolute;
  top: -40px;
  right: 40px;
  background-image: url("../../images/close-button.svg");
  width: 40px;
  height: 40px;
  position: absolute;
  border: none;
  cursor: pointer;
`;

export const Title = styled.h2`
  font-size: 30px;
  margin: 25px auto 30px;
`;

export const Text = styled.div`
  display: flex;
  margin: 0 15px 15px 30px;
  font-size: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, .2);
  width: max-content;
  line-height: 1.21;
`;

// export const Name = styled.h1`
//   font-size: 20px;

// `;

// export const Name = styled.h1`
//   font-size: 20px;

// `;

