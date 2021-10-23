import React from "react";
import { Root, Close, Title, Text } from './PopupWithInfo.styles';

function PopupWithInfo({ info }) {
  return (

    <Root>
      <Close></Close>
      <Title>Данные по криптовалюте</Title>
      <Text>Название криптовалюты: {info.name}</Text>
      <Text>Последний курс: {info.last}</Text>
      <Text>Максимальное значение: {info.highestBid}</Text>
      <Text>Процент роста: {info.percentChange}</Text>
    </Root>
  )
}

export default PopupWithInfo;