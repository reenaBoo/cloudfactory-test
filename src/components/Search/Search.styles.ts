import styled from 'styled-components';
import Icon from '../../assets/images/search-icon.svg';
import CloseIcon from '../../assets/images/close-icon.svg';

export const StyledForm = styled.form`
  width: 30%;
  display: flex;
  padding: 5px;
  margin: 0 auto 15px;
  flex-direction: column;
  position: relative;
`;

export const Input = styled.input`
  font-size: 13px;
  line-height: 17px;
  padding: 10px 8px;
  width: 100%;
  border-radius: 2px;
  border: 1px solid #4874c7;

  &:focus {
    outline: 2px solid #4874c7;
  }
`;

export const Label = styled.label`
  font-size: 13px;
  line-height: 17px;
  color: #394c5a;
  margin: 0 0 5px 0;
`;

export const SearchButton = styled.button`
  background-image: url(${Icon});
  background-size: cover;
  background-color: transparent;
  width: 30px;
  height: 30px;
  border: none;
  position: absolute;
  right: 13px;
  bottom: 10px;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const CloseButton = styled.button`
  background-image: url(${CloseIcon});
  background-size: cover;
  background-color: transparent;
  width: 30px;
  height: 30px;
  border: none;
  position: absolute;
  right: 13px;
  bottom: 10px;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
