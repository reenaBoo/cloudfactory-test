import React from "react";
import { Root, Close, Title, Text, Popup } from "./PopupWithError.styles";

interface Props {
  error: string;
  onClose: () => void;
}

function PopupWithError({ error, onClose }: Props) {
  return (
    <Root>
      <Popup>
        <Close onClick={onClose}></Close>
        <Title>Ошибка</Title>
        <Text>{error}</Text>
      </Popup>
    </Root>
  );
}

export default PopupWithError;
