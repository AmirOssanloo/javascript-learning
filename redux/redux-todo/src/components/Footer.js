import React from 'react';
import FilterLink from './FilterLink';

const Footer = () => {
  return (
    <div>
      Show:
      <br />
      <FilterLink filter='SHOW_ALL'>
        All
      </FilterLink>
      <br />
      <FilterLink filter='SHOW_ACTIVE'>
        ACTIVE
      </FilterLink>
      <br />
      <FilterLink filter='SHOW_COMPLETED'>
        COMPLETED
      </FilterLink>
    </div>
  );
};

export default Footer;