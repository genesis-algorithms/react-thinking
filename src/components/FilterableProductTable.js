import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import styled from 'styled-components';

const StyledFilteredProductTable = styled.section`
  border: 2px solid #f06868;
  display: inline-block;
  font-family: Helvetica;
  padding: 5px;
`;

export default class FilterableProductTable extends React.Component {
  render() {
    return (
      <StyledFilteredProductTable>
        <SearchBar />
        <ProductTable products={this.props.products}/>
      </StyledFilteredProductTable>
    );
  }
}