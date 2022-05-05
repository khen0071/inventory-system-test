import React from 'react';

import { LinkContainer } from 'react-router-bootstrap';

import styles from '../styles/datasheet.module.css';
const StickyNavbar = () => {
  return (
    <>
      <div className={styles.nav_container}>
        <ul>
          <LinkContainer to='/'>
            <li>Monday</li>
          </LinkContainer>

          <LinkContainer to='/tuesday_pickers'>
            <li>Tuesday</li>
          </LinkContainer>

          <LinkContainer to='/wednesday_pickers'>
            <li>Wednesday</li>
          </LinkContainer>

          <LinkContainer to='/thursday_pickers'>
            <li>Thursday</li>
          </LinkContainer>

          <LinkContainer to='/friday_pickers'>
            <li>Friday</li>
          </LinkContainer>
        </ul>
      </div>
    </>
  );
};

export default StickyNavbar;
