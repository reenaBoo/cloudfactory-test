import { StyledTh, StyledTd, TableSection, StyledThead } from './Table.styles';

function Table({ dataNames, prices, onRowClick }) {
  return (
    <TableSection>
      <StyledThead>
        <tr>
          <StyledTh>Тикер</StyledTh>
          <StyledTh>Последний курс</StyledTh>
          <StyledTh>Максимальное значение</StyledTh>
          <StyledTh>Процентное изменение</StyledTh>
        </tr>
      </StyledThead>
      <tbody>
        {dataNames.map((name, index) => (
          <tr key={index + name} onClick={onRowClick(name)}>
            <StyledTd>{name}</StyledTd>
            <StyledTd>{prices[name].last}</StyledTd>
            <StyledTd>{prices[name].highestBid}</StyledTd>
            <StyledTd>{prices[name].percentChange}</StyledTd>
          </tr>
        ))}
      </tbody>
    </TableSection>
  )
}

export default Table;