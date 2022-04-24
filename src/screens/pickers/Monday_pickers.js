import React, { useState, useEffect } from 'react';

import PickersNav from '../../components/PickersNav';

import { Table } from 'react-bootstrap';
import axios from 'axios';
import styles from '../../styles/datasheet.module.css';

const Monday_pickers = () => {
  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const { data } = await axios.get(
  //           'https://script.google.com/macros/s/AKfycbzazxAZ2emmkuWdosBe2iKAecYA7MnDnwzYyIQQBiRNrPbS25lUG9r0OWSjbYywGxR_/exec'
  //         );

  //         setData(data);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };
  //     fetchData();
  //   }, []);

  //   var mondayArray = data.filter(function (item) {
  //     return item.day === 'monday';
  //   });

  //   var newArray = [];
  //   mondayArray.forEach((item) => {
  //     var newItem = {
  //       po_number: item.po_number,
  //       account: item.account,
  //       team: item.team,
  //       queue_num: item.queue_num,
  //       day: item.day,
  //       date: item.date.split('T')[0],
  //       product_details: [],
  //     };

  //     mondayArray.map((innerItem) => {
  //       if (innerItem.po_number === newItem.po_number) {
  //         newItem.product_details = newItem.product_details.concat({
  //           product_title: innerItem.product_title,
  //           tsin: innerItem.tsin,
  //           short: innerItem.short,
  //           units: innerItem.units,
  //           product_po_number: innerItem.po_number,
  //         });
  //       }
  //     });

  //     newArray.push(newItem);
  //   });

  //   const mondayArray_noDups = [
  //     ...new Map(newArray.map((item) => [item.po_number, item])).values(),
  //   ];

  //   console.table(mondayArray_noDups);

  //   var test2 = mondayArray_noDups?.map((item) =>
  //     item.product_details?.map((data) => {
  //       return {
  //         po_number: item.po_number,
  //         product_title: data.product_title,
  //         tsin: data.tsin,
  //       };
  //     })
  //   );

  //   console.log(test2);

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
              <td>62175701</td>
              <td>11/04/2022</td>
              <td>M-2</td>
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
                10m 3D Vintage Stone Bricks Wallpaper Home Decoration - Brown
              </td>
              <td></td>
              <td>76523677</td>
              <td>2</td>
              <td>
                <input type='checkbox' checked='checked'></input>
              </td>
            </tr>
            <tr>
              <td>
                10 Pieces Of Stackable Nesting Rainbow Mixing Bowl And Measuring
                Cup Set
              </td>
              <td></td>
              <td>77481595</td>
              <td>1</td>
              <td>
                {' '}
                <input type='checkbox'></input>
              </td>
            </tr>
            <tr>
              <td>Magnetic Window Cleaner</td>
              <td></td>
              <td>73854871</td>
              <td>3</td>
              <td>
                {' '}
                <input type='checkbox'></input>
              </td>
            </tr>

            <tr>
              <td>
                3-Tier Foldable Trolley Storage Cart Organizer Tray - Blue
              </td>
              <td></td>
              <td>76536930</td>
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
              <th>QUEUE NUM</th>
              <th>ACCOUNT</th>
              <th>TEAM</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>62175702</td>
              <td>11/04/2022</td>
              <td>M-2</td>
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
              <td>Mini Plastic Sealer- Blue</td>
              <td></td>
              <td>74967250</td>
              <td>1</td>
              <td>
                <input type='checkbox'></input>
              </td>
            </tr>
            <tr>
              <td>Gun Cleaning Kit - Rifle Pistol Shotgun Firearm</td>
              <td></td>
              <td>41259960</td>
              <td>3</td>
              <td>
                {' '}
                <input type='checkbox'></input>
              </td>
            </tr>
            <tr>
              <td>Sup Game Box (400 in 1)-Red</td>
              <td></td>
              <td>73943953</td>
              <td>1</td>
              <td>
                {' '}
                <input type='checkbox'></input>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Monday_pickers;
