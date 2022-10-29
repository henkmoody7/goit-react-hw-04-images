import { useState } from 'react';

import {
  Header,
  SearchForm,
  SearchFormBtn,
  ButtonLabel,
  Input,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const onChange = e => {
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(value);
    setValue('');
  };

  return (
    <Header>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormBtn type="submit">
          <ButtonLabel>Search</ButtonLabel>
        </SearchFormBtn>

        <Input
          onChange={onChange}
          value={value}
          type="text"
          autocomplete="off"
          placeholder="Search images and photos"
        />
      </SearchForm>
    </Header>
  );
};
