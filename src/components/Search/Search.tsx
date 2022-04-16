import React, { useState } from 'react';
import { StyledForm, Input, Label, SearchButton, CloseButton } from './Search.styles';

interface ISearch {
  tabData: string[];
  setTabData: any;
  setIsSearch: any;
  isSearch: boolean;
}

function Search({ tabData, setTabData, setIsSearch, isSearch }: ISearch) {
  const [value, setValue] = useState('');

  function handleChange(e: any) {
    setValue(e.target.value);
  }

  function handleResetSearch() {
    setValue('');
    setIsSearch(false);
  }

  function handleFormSubmit(e: any) {
    e.preventDefault();
    const newValue = value.replace(' / ', '_');
    setValue(newValue);
    const filteredData = tabData.filter((el) => el === newValue);
    setTabData(filteredData);
    setIsSearch(true);
  }

  return (
    <StyledForm onSubmit={handleFormSubmit}>
      <Label htmlFor="search">Поиск криптовалюты</Label>
      <Input id="search" placeholder="Введите название..." value={value || ''} onChange={handleChange} />
      {isSearch ? <CloseButton onClick={handleResetSearch} type="reset" /> : <SearchButton type="submit" />}
    </StyledForm>
  );
}

export default Search;
