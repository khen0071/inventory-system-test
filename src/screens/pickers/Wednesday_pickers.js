import React, { useState, useEffect } from 'react';

import TablePickers from '../../components/TablePickers';

import { Container, Table, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import axios from 'axios';
import styles from '../../styles/datasheet.module.css';

const Monday_pickers = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          'https://script.google.com/macros/s/AKfycbwOo65cG75Wc4mrwlB8fDY3PN34AzgkcHM9O8Xx8SGrODHjS-zeheBxJQ9oP20sk2fJ/exec'
        );

        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  var wednesdayArray = data.filter(function (item) {
    return item.day === 'wednesday';
  });

  var newArray = [];
  wednesdayArray.forEach((item) => {
    var newItem = {
      po_number: item.po_number,
      account: item.account,
      team: item.team,
      queue_num: item.queue_num,
      day: item.day,
      date: item.date.split('T')[0],
      product_details: [],
    };

    wednesdayArray.map((innerItem) => {
      if (innerItem.po_number === newItem.po_number) {
        newItem.product_details = newItem.product_details.concat({
          product_title: innerItem.product_title,
          tsin: innerItem.tsin,
          is_short: innerItem.is_short,
          units: innerItem.units,
          product_po_number: innerItem.po_number,
        });
      } else {
        newItem.product_details = newItem.product_details.concat({
          product_title: innerItem.product_title,
          tsin: innerItem.tsin,
          is_short: innerItem.is_short,
          units: innerItem.units,
          product_po_number: innerItem.po_number,
        });
      }
    });

    newArray.push(newItem);
  });

  const wednesdayArray_noDups = [
    ...new Map(newArray.map((item) => [item.po_number, item])).values(),
  ];

  const wednesdayDate = [
    ...new Map(newArray.map((item) => [item.date, item])).values(),
  ];

  const wednesdayTeam = [
    ...new Map(newArray.map((item) => [item.team, item])).values(),
  ];

  return (
    <>
      <div className={styles.nav_container}>
        <Navbar bg='primary' variant='dark' fixed='top'>
          <Container>
            <Nav className='m-auto'>
              <LinkContainer to='/'>
                <Nav.Link className='px-5'>Monday</Nav.Link>
              </LinkContainer>

              <LinkContainer to='/tuesday_pickers'>
                <Nav.Link className='px-5'>Tuesday</Nav.Link>
              </LinkContainer>

              <LinkContainer to='/wednesday_pickers'>
                <Nav.Link className='px-5'>Wednesday</Nav.Link>
              </LinkContainer>

              <LinkContainer to='/thursday_pickers'>
                <Nav.Link className='px-5'>Thursday</Nav.Link>
              </LinkContainer>

              <LinkContainer to='/friday_pickers'>
                <Nav.Link className='px-5'>Friday</Nav.Link>
              </LinkContainer>
            </Nav>
          </Container>
        </Navbar>

        <br />
      </div>
      <div className={styles.central_po_container}>
        <Table
          striped
          bordered
          hover
          responsive
          className={styles.table_layout}
        >
          <thead className={styles.table_thead}>
            <tr>
              {wednesdayDate?.map((item) => {
                return <th>Wednesday: {item.date} </th>;
              })}

              {wednesdayTeam?.map((item) => {
                return <th>Team: {item.team} </th>;
              })}
              <th>Outstanding POS:</th>
            </tr>
          </thead>
        </Table>

        {wednesdayArray_noDups?.map((wednesdayArray_noDup) => (
          <TablePickers mondayArray_noDup={wednesdayArray_noDup} />
        ))}
      </div>
    </>
  );
};

export default Monday_pickers;
