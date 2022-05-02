import React from 'react';
import { Table } from 'react-bootstrap';
import styles from '../styles/datasheet.module.css';

const TablePickers = ({ mondayArray_noDup }) => {
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
              <th>Total Units: </th>
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
              <th width='800'>Product Details</th>
              <th className='text-center'>TSIN</th>
              <th className='text-center'>IMAGE</th>
              <th className='text-center'># units</th>
              <th className='text-center'>short</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{mondayArray_noDup.product_details[0].product_title}</td>
              <td className='text-center'>
                {mondayArray_noDup.product_details[0].tsin}
              </td>
              <td className='text-center'>
                <img
                  src={mondayArray_noDup.product_details[0].image}
                  width='150px'
                  height='150px'
                  alt='product_image'
                />
              </td>
              <td className='text-center'>
                {mondayArray_noDup.product_details[0].units}
              </td>
              <td className='text-center'>
                {mondayArray_noDup.product_details[0].is_short ? (
                  <input type='checkbox' checked />
                ) : (
                  <input type='checkbox' />
                )}
              </td>
            </tr>
            <tr>
              <td>{mondayArray_noDup.product_details[1].product_title}</td>
              <td className='text-center'>
                {mondayArray_noDup.product_details[1].tsin}
              </td>
              <td className='text-center'>
                <img
                  src={mondayArray_noDup.product_details[1].image}
                  width='150px'
                  height='150px'
                  alt='product_image'
                />
              </td>
              <td className='text-center'>
                {mondayArray_noDup.product_details[1].units}
              </td>
              <td className='text-center'>
                {mondayArray_noDup.product_details[1].is_short ? (
                  <input type='checkbox' checked />
                ) : (
                  <input type='checkbox' />
                )}
              </td>
            </tr>
          </tbody>
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
              <th className='text-center'>Are documents Matching?</th>
              <th className='text-center'>
                <input type='checkbox' />
              </th>
            </tr>
          </thead>
          <thead className={styles.table_thead}>
            <tr>
              <th className='text-center'>Confirm finished pulling po</th>
              <th className='text-center'>
                <input type='checkbox' />
              </th>
            </tr>
          </thead>
        </Table>
      </div>
    </>
  );
};

export default TablePickers;
