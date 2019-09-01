import React from 'react';
import styled from 'styled-components';

const Th = styled.th`
  border-bottom: 2px solid #b7e778;
  border-top: 2px solid #b7e778;
  text-align: left;
`;

export default class ProductCategoryRow extends React.Component {
  render() {
    const category = this.props.category;
    return (
      <tr>
          <Th colSpan='2'>{category}</Th>
      </tr>
    );
  }
}