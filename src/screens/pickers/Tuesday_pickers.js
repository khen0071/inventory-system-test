import React, { useState, useEffect } from 'react';

import PickersNav from '../../components/PickersNav';

import { Container, Table, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import styles from '../../styles/datasheet.module.css';

const Tuesday_pickers = () => {
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

    tuesdayArray.map((innerItem) => {
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

  const tuesdayArray_noDups = [
    ...new Map(newArray.map((item) => [item.po_number, item])).values(),
  ];

  console.table(tuesdayArray_noDups);

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
              <td>62217084</td>
              <td>12/04/2022</td>
              <td>TU-19</td>
              <td>LK IMPORTS</td>
              <td>CPT</td>
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
              <td>Orthopedic Leg Pillow</td>
              <td></td>
              <td>73895365</td>
              <td>1</td>
              <td>
                <input type='checkbox'></input>
              </td>
            </tr>
            <tr>
              <td>Universal Water Saving Head</td>
              <td></td>
              <td>73749577</td>
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
              <td>62217085</td>
              <td>12/04/2022</td>
              <td>TU-20</td>
              <td>LK IMPORTS</td>
              <td>CPT</td>
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
              <td>
                Quick Dry Soft Toilet Brush With Automatic Opening & Closing
                Holder Set
              </td>
              <td></td>
              <td>76575325</td>
              <td>1</td>
              <td>
                <input type='checkbox' checked='checked'></input>
              </td>
            </tr>
            <tr>
              <td>5 Pairs of Gel Toe Protector Corn Toe Relief Sleeves</td>
              <td></td>
              <td>72896244</td>
              <td>1</td>
              <td>
                {' '}
                <input type='checkbox'></input>
              </td>
            </tr>
            <tr>
              <td>
                500ml Portable Silicone Collapsible Stylish Water Bottle With
                Carabiner
              </td>
              <td></td>
              <td>90100370</td>
              <td>1</td>
              <td>
                {' '}
                <input type='checkbox' checked='checked'></input>
              </td>
            </tr>

            <tr>
              <td>38/40mm Nylon Replaceable Watch Strap</td>
              <td></td>
              <td>73364491</td>
              <td>1</td>
              <td>
                {' '}
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

export default Tuesday_pickers;
