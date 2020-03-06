import React from 'react';
import FilterLink from './FilterLink';

const Footer = () => {
  return (
    <div>
      Show:
      <br />
      <FilterLink filter='all'>
        All
      </FilterLink>
      <br />
      <FilterLink filter='active'>
        ACTIVE
      </FilterLink>
      <br />
      <FilterLink filter='completed'>
        COMPLETED
      </FilterLink>
    </div>
  );
};

export default Footer;