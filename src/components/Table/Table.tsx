import { StyledTh, StyledTd, TableSection, StyledThead } from './Table.styles';
import { ITable } from './ITable';
import { useCallback } from 'react';

function Table({ dataNames, prices, onRowClick }: ITable) {
  const quotesChange = useCallback(
    (name: string) => {
      let price = Number(
        (((prices[name].last - prices[name].high24hr) / prices[name].last) * 100).toFixed(2),
      );
      if (price > 0) {
        return <StyledTd style={{ color: '#0ea600' }}>{`+${price}%`}</StyledTd>;
      }
      if (price < 0) {
        return <StyledTd style={{ color: '#eb4d4b' }}>{`${price}%`}</StyledTd>;
      }
      return <StyledTd>Без изменений</StyledTd>;
    },
    [prices],
  );

  return (
    <TableSection>
      <StyledThead>
        <tr>
          <StyledTh>Тикер</StyledTh>
          <StyledTh>Последний курс</StyledTh>
          <StyledTh>Максимальное значение (24ч.)</StyledTh>
          <StyledTh>Изменение</StyledTh>
        </tr>
      </StyledThead>
      <tbody>
        {dataNames.map((name, index) => (
          <tr key={index + name} onClick={onRowClick(name)}>
            <StyledTd>{name.replace('_', ' / ')}</StyledTd>
            <StyledTd
              style={{
                color:
                  prices[name].last > prices[name].high24hr
                    ? '#0ea600'
                    : prices[name].last < prices[name].high24hr
                    ? '#eb4d4b'
                    : '',
              }}
            >
              {prices[name].last}
            </StyledTd>
            <StyledTd>{prices[name].high24hr}</StyledTd>
            {quotesChange(name)}
          </tr>
        ))}
      </tbody>
    </TableSection>
  );
}

export default Table;
