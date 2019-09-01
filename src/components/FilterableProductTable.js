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
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false,
    }
  }
  render() {
    return (
      <StyledFilteredProductTable>
        <SearchBar 
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
        <ProductTable 
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}  
        />
      </StyledFilteredProductTable>
    );
  }
}