import React from 'react';
import styled from 'styled-components';

const Td = styled.td`
  border-bottom: 2px solid #80d6ff;
  border-top: 2px solid #80d6ff;
`;

export default class ProductRow extends React.Component {
  render() {
    const product = this.props.product;
    const name = product.stocked ?
      product.name : 
      <span style={{color: 'red'}}>
        {product.name}
      </span>;

    return (
      <tr>
        <Td>{name}</Td>
        <Td>{product.price}</Td>
      </tr>
    );
  }
}