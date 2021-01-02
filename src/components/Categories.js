import React, { Fragment } from 'react'
import Link from '../components/Link'

const Categories = ({ categories }) => (
  <Fragment>
    <ul>
      {categories.map(category => (
        <li key={category}>
          <Link to={`/categories/${category}`}>{category}</Link>
        </li>
      ))}
    </ul>
  </Fragment>
);

export default Categories
