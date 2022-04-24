import React, { useState, useEffect } from 'react';

import PickersNav from '../../components/PickersNav';

import { Container, Table, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import styles from '../../styles/datasheet.module.css';

const Friday_pickers = () => {
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

  var thursdayArray = data.filter(function (item) {
    return item.day === 'tuesday';
  });

  var newArray = [];
  thursdayArray.forEach((item) => {
    var newItem = {
      po_number: item.po_number,
      account: item.account,
      team: item.team,
      queue_num: item.queue_num,
      day: item.day,
      date: item.date.split('T')[0],
      product_details: [],
    };

    thursdayArray.map((innerItem) => {
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

  const thursdayArray_noDups = [
    ...new Map(newArray.map((item) => [item.po_number, item])).values(),
  ];

  console.table(thursdayArray_noDups);

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
              <td>59616937</td>
              <td>15/04/2022</td>
              <td>F-3</td>
              <td>MEHTAR</td>
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
              <td>Silicon Anti-Crack Set</td>
              <td></td>
              <td>75459741</td>
              <td>2</td>
              <td>
                <input type='checkbox' checked='checked'></input>
              </td>
            </tr>
            <tr>
              <td>Indoor Folding Cardio Exercise Bike</td>
              <td></td>
              <td>75469558</td>
              <td>1</td>
              <td>
                {' '}
                <input type='checkbox'></input>
              </td>
            </tr>

            <tr>
              <td>Baby Milestone Blanket- Mom and Dad's Love Design</td>
              <td></td>
              <td>76036011</td>
              <td>2</td>
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
              <td>59671036</td>
              <td>15/04/2022</td>
              <td>F-5</td>
              <td>DOMISH</td>
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
              <td>
                Ultrasonic Humidifier, 300ml Small Cool Mist Humidifier with
                Night Light
              </td>
              <td></td>
              <td>76331337</td>
              <td>1</td>
              <td>
                <input type='checkbox'></input>
              </td>
            </tr>

            <tr>
              <td>
                13 Pieces Of Infant Baby Health Nursery Care Kit Set - Blue
              </td>
              <td></td>
              <td>76710206</td>
              <td>1</td>
              <td>
                <input type='checkbox'></input>
              </td>
            </tr>

            <tr>
              <td>Sliding Wrapping Paper Cutter</td>
              <td></td>
              <td>72780306</td>
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

export default Friday_pickers;
