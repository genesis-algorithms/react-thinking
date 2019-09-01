import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';
import styled from 'styled-components';

const Table = styled.table`
  border: 2px solid #fab57a;
  margin: 5px;
  padding: 5px;
  position: relative;
`;

const Th = styled.th`
  text-align: left;
  width: 150px;
`;

export default class ProductTable extends React.Component {
  render() {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;

    let rows = [];
    let lastCategory = null;

    this.props.products.forEach(product => {
      if (inStockOnly && !product.stocked) return;
      if (product.name.indexOf(filterText) === -1) return;
      if (product.category !== lastCategory ) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category}
          />
        );
      }
      rows.push(
        <ProductRow
          product={product}
          key={product.name}
        />
      );
      lastCategory = product.category;
    });

    return (
      <Table>
        <thead>
          <tr>
            <Th>Name</Th>
            <Th>Price</Th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    );
  }
}