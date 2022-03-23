import React from 'react';
import { Root, Close, Title, Popup, StyledTd, StyledButton } from './PopupWithInfo.styles';
import { IPopupWithInfo } from './IPopupWithInfo';
import { SmallTable, StyledTr } from '../Table/Table.styles';

function PopupWithInfo({ onClose, info }: IPopupWithInfo) {
  return (
    <Root>
      <Popup>
        <Close onClick={onClose} />
        <Title>Данные по криптовалюте</Title>
        <SmallTable>
          <tbody>
            <StyledTr>
              <StyledTd>Название криптовалюты</StyledTd>
              <StyledTd>{info.name}</StyledTd>
            </StyledTr>
            <StyledTr>
              <StyledTd>Последний курс</StyledTd>
              <StyledTd>{info.last}</StyledTd>
            </StyledTr>
            <StyledTr>
              <StyledTd>Максимальное значение</StyledTd>
              <StyledTd>{info.high24hr}</StyledTd>
            </StyledTr>
            <StyledTr>
              <StyledTd>Процент роста</StyledTd>
              <StyledTd>{info.percentChange}</StyledTd>
            </StyledTr>
          </tbody>
        </SmallTable>
        <StyledButton href={`https://poloniex.com/exchange/${info.name}`} target="_blank">
          Стать богатым
        </StyledButton>
      </Popup>
    </Root>
  );
}

export default PopupWithInfo;
