import { Component } from 'react';

import {
  Header,
  SearchForm,
  SearchFormBtn,
  ButtonLabel,
  Input,
} from './Searchbar.styled';

// axios.defaults.baseURL = 'https://pixabay.com/api/';

export class Searchbar extends Component {
  state = {
    value: '',
  };

  onChange = e => {
    this.setState({ value: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    const { value } = this.state;
    return (
      <Header>
        <SearchForm onSubmit={this.onSubmit}>
          <SearchFormBtn type="submit">
            <ButtonLabel>Search</ButtonLabel>
          </SearchFormBtn>

          <Input
            onChange={this.onChange}
            value={value}
            type="text"
            autocomplete="off"
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Header>
    );
  }
}
