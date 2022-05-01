import React from 'react';
import { Table } from 'react-bootstrap';
import styles from '../styles/datasheet.module.css';

const TablePickers = ({ mondayArray_noDup }) => {
  console.log(mondayArray_noDup.product_details[0].tsin);

  return (
    <>
      <div className={styles.table_container}>
        <Table
          striped
          bordered
          hover
          responsive
          className={styles.table_layout}
        >
          <thead className={styles.table_thead}>
            <tr>
              <th>po number: {mondayArray_noDup.po_number}</th>
              <th>account: {mondayArray_noDup.account}</th>
              <th>queue: {mondayArray_noDup.queue_num}</th>
            </tr>
          </thead>
        </Table>

        <Table
          striped
          bordered
          hover
          responsive
          className={styles.table_layout}
        >
          <thead className={styles.table_thead}>
            <tr>
              <th>Product Details</th>
              <th>TSIN</th>
              <th>IMAGE</th>
              <th># units</th>
              <th>short</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{mondayArray_noDup.product_details[0].product_title}</td>
              <td>{mondayArray_noDup.product_details[0].tsin}</td>
              <td></td>
              <td>{mondayArray_noDup.product_details[0].units}</td>
              <td>
                {mondayArray_noDup.product_details[0].is_short ? (
                  <input type='checkbox' checked />
                ) : (
                  <input type='checkbox' />
                )}
              </td>
            </tr>
            <tr>
              <td>{mondayArray_noDup.product_details[1].product_title}</td>
              <td>{mondayArray_noDup.product_details[1].tsin}</td>
              <td></td>
              <td>{mondayArray_noDup.product_details[1].units}</td>
              <td>
                {mondayArray_noDup.product_details[1].is_short ? (
                  <input type='checkbox' checked />
                ) : (
                  <input type='checkbox' />
                )}
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default TablePickers;
