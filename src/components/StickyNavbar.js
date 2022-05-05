import React from 'react';
import { Container, Navbar, Nav, Table } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import styles from '../styles/datasheet.module.css';
const StickyNavbar = () => {
  return (
    <>
      <Table striped bordered hover responsive className={styles.table_layout1}>
        <thead className={styles.table_thead}>
          <tr>
            {' '}
            <LinkContainer to='/'>
              <th>Monday</th>
            </LinkContainer>
            <LinkContainer to='/tuesday_pickers'>
              <th>Tuesday</th>
            </LinkContainer>
            <LinkContainer to='/wednesday_pickers'>
              <th>Wednesday</th>
            </LinkContainer>
            <LinkContainer to='/thursday_pickers'>
              <th>Thursday</th>
            </LinkContainer>
            <LinkContainer to='/friday_pickers'>
              <th>Friday</th>
            </LinkContainer>
          </tr>
        </thead>
      </Table>
    </>
  );
};

export default StickyNavbar;
