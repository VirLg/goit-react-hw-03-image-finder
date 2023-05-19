import React from 'react';
import { Form, SearchFormButton, SearchFormInput } from './SearchBar.styled';

class SearchBar extends React.Component {
  state = {
    value: '',
  };

  heandleChange = ({ target }) => {
    const { value } = target;
    this.setState({ value: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { value } = this.state;
    if (value.trim() === '') {
      return;
    }
    this.props.onSubmit(value);
  };

  render() {
    return (
      <header className="searchbar">
        <Form className="form" onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit" className="button">
            <span className="button-label">Search</span>
          </SearchFormButton>

          <SearchFormInput
            className="input"
            type="text"
            placeholder="Search images and photos"
            value={this.state.value}
            onChange={this.heandleChange}
          />
        </Form>
      </header>
    );
  }
}

export default SearchBar;
