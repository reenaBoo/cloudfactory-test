import React from "react";
import { Root, Close, Title, Text, Popup } from './PopupWithError.styles';

function PopupWithError({ error, onClose }) {
  return (
    <Root>
      <Popup>
        <Close onClick={onClose}></Close>
        <Title>Ошибка</Title>
        <Text>{error}</Text>
      </Popup>
    </Root>
  )
}

export default PopupWithError;