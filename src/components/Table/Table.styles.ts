import styled from 'styled-components';

export const TableSection = styled.table`
  display: flex;
  width: 1170px;
  flex-direction: column;
  margin: 0;
  table-layout: fixed;
  border-collapse: collapse;
  box-shadow: #f1f2fa 0 5px 10px;
  background-color: #ffffff;
`;

export const SmallTable = styled(TableSection)`
  width: 550px;
`

export const StyledTh = styled.th`
  padding: 10px 0;
  font-size: 18px;
  color: #4874c7;
  width: 230px;
  &:first-of-type {
    width: 200px;
  }
  &:last-of-type {
    width: 280px;
  }
`;

export const StyledTd = styled.td`
  border-top: 1px solid rgba(34, 36, 38, 0.1);
  justify-content: center;
  font-weight: 400;
  font-size: 16px;
  padding: 10px 0;
  text-align: center;
  width: 230px;
  &:first-of-type {
    width: 200px;
  }
  &:last-of-type {
    width: 280px;
  }
`;

export const StyledTr = styled.tr`
  display: flex;
  justify-content: space-between;
`

export const StyledThead = styled.thead`
  font-size: 20px;
  color: #4874c7;
  font-weight: 700;
  box-shadow: rgb(31 31 31 / 15%) 0 4px 20px -2px;
`;


