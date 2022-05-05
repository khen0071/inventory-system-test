import React, { useState, useEffect } from 'react';

import TablePickers from '../../components/TablePickers';
import StickyNavbar from '../../components/StickyNavbar';

import { Table } from 'react-bootstrap';

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

  var tuesdayArray = data.filter(function (item) {
    return item.day === 'tuesday';
  });

  var newArray = [];
  tuesdayArray.forEach((item) => {
    var newItem = {
      po_number: item.po_number,
      account: item.account,
      team: item.team,
      queue_num: item.queue_num,
      day: item.day,
      date: item.date.split('T')[0],
      product_details: [],
    };

    tuesdayArray.forEach((innerItem) => {
      if (innerItem.po_number === newItem.po_number) {
        newItem.product_details = newItem.product_details.concat({
          product_title: innerItem.product_title,
          tsin: innerItem.tsin,
          is_short: innerItem.is_short,
          units: innerItem.units,
          product_po_number: innerItem.po_number,
          image: innerItem.image_url,
        });
      }
    });

    newArray.push(newItem);
  });

  const tuesdayArray_noDups = [
    ...new Map(newArray.map((item) => [item.po_number, item])).values(),
  ];

  const tuesdayDate = [
    ...new Map(newArray.map((item) => [item.date, item])).values(),
  ];

  const tuesdayTeam = [
    ...new Map(newArray.map((item) => [item.team, item])).values(),
  ];

  let sumPo = tuesdayArray_noDups.length;

  return (
    <>
      <div className={styles.nav_container}>
        <br />
      </div>
      <div className={styles.central_po_container}>
        <div className='fixed-top'>
          <StickyNavbar />
          <Table
            striped
            bordered
            hover
            responsive
            className={styles.table_layout1}
          >
            <thead className={styles.table_thead}>
              <tr>
                {tuesdayDate?.map((item) => {
                  return <th>tuesday: {item.date} </th>;
                })}

                {tuesdayTeam?.map((item) => {
                  return <th>Team: {item.team} </th>;
                })}
                <th>Outstanding POS: 0 / {sumPo}</th>
              </tr>
            </thead>
          </Table>
        </div>

        {tuesdayArray_noDups?.map((tuesdayArray_noDup) => (
          <TablePickers mondayArray_noDup={tuesdayArray_noDup} />
        ))}
      </div>
    </>
  );
};

export default Monday_pickers;
