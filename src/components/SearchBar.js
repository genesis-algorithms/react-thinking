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
  render() {
    return (
      <StyledSearchBar>
        <TextInput type='text' placeholder='Search...' />
        <label>
          <input type='checkbox'/>
          {' '}Only show products in stock
        </label>
      </StyledSearchBar>
    );
  }
}
