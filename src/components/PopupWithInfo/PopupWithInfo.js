import React from "react";
import { Root, Close, Title, Text, Popup } from './PopupWithInfo.styles';

function PopupWithInfo({ info, onClose }) {
  return (
    <Root>
      <Popup>
        <Close onClick={onClose}></Close>
        <Title>Данные по криптовалюте</Title>
        <Text>Название криптовалюты: {info.name}</Text>
        <Text>Последний курс: {info.last}</Text>
        <Text>Максимальное значение: {info.highestBid}</Text>
        <Text>Процент роста: {info.percentChange}</Text>
      </Popup>
    </Root>
  )
}

export default PopupWithInfo;
