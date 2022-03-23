import React from 'react';
import { Root, Close, Title, Text, Popup } from './PopupWithError.styles';
import { IPopupWithError } from './IPopupWithError';

function PopupWithError({ error, onClose }: IPopupWithError) {
  return (
    <Root>
      <Popup>
        <Close onClick={onClose} />
        <Title>Ошибка</Title>
        <Text>{error}</Text>
      </Popup>
    </Root>
  );
}

export default PopupWithError;
