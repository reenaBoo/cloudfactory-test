import styled from "styled-components";

export const TableSection = styled.table`
  display: flex;
  width: 1100px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  table-layout: fixed;
  border-collapse: collapse;
`;

export const StyledTh = styled.th`
  padding: 10px 30px;
  border: 1px solid rgba(0, 0, 0, .2);
  font-size: 22px;
  color: #4874c7;
  align-items: center;
  width: 275px;
  box-sizing: border-box;
`;

export const StyledTd = styled.td` //Надо доделать и понять как одинаковый размер столбцов делается
  border: 1px solid rgba(0, 0, 0, .2);
  font-weight: 400;
  font-size: 18px;
  color: #4874c7;
  align-items: center;
  align-content: center;
  padding: 10px 30px;
  width: 275px;
  box-sizing: border-box;
`;

export const StyledThead = styled.thead`
  margin: auto;
  align-content: center;
  align-items: center;
  font-size: 20px;
  color: #4874c7;
  font-weight: 700;
`;


