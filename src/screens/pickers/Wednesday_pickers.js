import React, { useState, useEffect } from 'react';

import PickersNav from '../../components/PickersNav';

import { Container, Table, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import styles from '../../styles/datasheet.module.css';

const Wednesday_pickers = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          'https://script.google.com/macros/s/AKfycbzazxAZ2emmkuWdosBe2iKAecYA7MnDnwzYyIQQBiRNrPbS25lUG9r0OWSjbYywGxR_/exec'
        );

        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  var wednesdayArray = data.filter(function (item) {
    return item.day === 'tuesday';
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
          short: innerItem.short,
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

  console.table(wednesdayArray_noDups);

  return (
    <>
      <PickersNav />

      <div className={styles.central_po_container}>
        <Table
          striped
          bordered
          hover
          responsive
          size='sm'
          className={styles.table_layout}
        >
          <thead className={styles.table_thead}>
            <tr>
              <th>PO NUMBER</th>
              <th>DATE</th>
              <th>QUEUE NUM</th>
              <th>ACCOUNT</th>
              <th>TEAM</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>59592452</td>
              <td>13/04/2022</td>
              <td>W-10</td>
              <td>MECHSOL</td>
              <td>JHB</td>
            </tr>
          </tbody>

          <thead className={styles.table_thead}>
            <tr>
              <th>PRODUCT TITLE</th>
              <th>IMAGES</th>
              <th>TSIN</th>
              <th>UNITS</th>
              <th>SHORT</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Pack Of 3 Pieces Motion Sensor LED Light</td>
              <td></td>
              <td>77361147</td>
              <td>1</td>
              <td>
                <input type='checkbox'></input>
              </td>
            </tr>
            <tr>
              <td>Single Shoe Clothes Closet Organizer</td>
              <td></td>
              <td>72926699</td>
              <td>2</td>
              <td>
                {' '}
                <input type='checkbox'></input>
              </td>
            </tr>

            <tr>
              <td>U-Shaped Full Body Pregnancy Pillow - Grey</td>
              <td></td>
              <td>76195419</td>
              <td>1</td>
              <td>
                {' '}
                <input type='checkbox'></input>
              </td>
            </tr>

            {/* <td>{product_detail.product_title}</td>
            <td>{product_detail.tsin}</td>
            <td>{product_detail.units}</td>
            <td>1</td> */}
          </tbody>

          <thead className={styles.table_thead}>
            <tr>
              <th>PO NUMBER</th>
              <th>DATE</th>
              <th>QUEUE</th>
              <th>ACCOUNT</th>
              <th>TEAM</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>162823861</td>
              <td>13/04/2022</td>
              <td>W-11</td>
              <td>MARIGOLD</td>
              <td>JHB</td>
            </tr>
          </tbody>

          <thead className={styles.table_thead}>
            <tr>
              <th>PRODUCT TITLE</th>
              <th>IMAGES</th>
              <th>TSIN</th>
              <th>UNITS</th>
              <th>SHORT</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Hair Towel Absorbent Dry Cap - Grey</td>
              <td></td>
              <td>75835934</td>
              <td>1</td>
              <td>
                <input type='checkbox' checked='checked'></input>
              </td>
            </tr>

            {/* <td>{product_detail.product_title}</td>
            <td>{product_detail.tsin}</td>
            <td>{product_detail.units}</td>
            <td>1</td> */}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Wednesday_pickers;
