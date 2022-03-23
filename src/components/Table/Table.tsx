import { StyledTh, StyledTd, TableSection, StyledThead } from './Table.styles';
import { ITable } from './ITable';

function Table({ dataNames, prices, onRowClick }: ITable) {
  const quotesChange = (name: string) => {
    let price = prices[name].high24hr - prices[name].last;
    if (price > 0) {
      return <StyledTd style={{ color: '#eb4d4b' }}>{`-${price.toFixed(8)}`}</StyledTd>;
    }
    if (price < 0) {
      price *= -1;
      return <StyledTd style={{ color: '#0ea600' }}>{`+${price.toFixed(8)}`}</StyledTd>;
    }
    return <StyledTd>Без изменений</StyledTd>;
  };

  return (
    <TableSection>
      <StyledThead>
        <tr>
          <StyledTh>Тикер</StyledTh>
          <StyledTh>Последний курс</StyledTh>
          <StyledTh>Максимальное значение</StyledTh>
          <StyledTh>Изменение</StyledTh>
          <StyledTh>Процентное изменение</StyledTh>
        </tr>
      </StyledThead>
      <tbody>
        {dataNames.map((name, index) => (
          <tr key={index + name} onClick={onRowClick(name)}>
            <StyledTd>{name}</StyledTd>
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
            <StyledTd style={{ color: prices[name].percentChange >= 0 ? '#0ea600' : '#eb4d4b' }}>
              {`${prices[name].percentChange} %`}
            </StyledTd>
          </tr>
        ))}
      </tbody>
    </TableSection>
  );
}

export default Table;
