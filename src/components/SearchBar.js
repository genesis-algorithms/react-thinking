import React from 'react';
import styled from 'styled-components';

const StyledSearchBar = styled.form`
  border: 2px solid #fab57a;
  margin: 5px;
  padding: 5px;
`;

const TextInput = styled.input`
  display: block;
  margin-bottom: 5px;
  width: 220px;
`;

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }

  handleInStockChange(e) {
    this.props.onInStockChange(e.target.checked);
  }

  render() {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;

    return (
      <StyledSearchBar>
        <TextInput
          type='text'
          placeholder='Search...'
          value={filterText}
          onChange={this.handleFilterTextChange}
        />
        <label>
          <input
            type='checkbox'
            checked={inStockOnly}
            onChange={this.handleInStockChange}
          />
          {' '}Only show products in stock
        </label>
      </StyledSearchBar>
    );
  }
}
