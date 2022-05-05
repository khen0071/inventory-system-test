import React from 'react';
import { Table } from 'react-bootstrap';
import styles from '../styles/datasheet.module.css';

const TablePickers = ({ mondayArray_noDup, mondayArray_noDups }) => {
  const totalUnits = mondayArray_noDup.product_details.map((item) => {
    return item.units;
  });

  let sumUnits = 0;

  for (let i = 0; i < totalUnits.length; i++) {
    sumUnits += totalUnits[i];
  }

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
          <thead className={styles.table_thead1}>
            <tr>
              <th>po number: {mondayArray_noDup.po_number}</th>
              <th>account: {mondayArray_noDup.account}</th>
              <th>queue: {mondayArray_noDup.queue_num}</th>
            </tr>
          </thead>

          <thead className={styles.table_thead1}>
            <tr>
              <th>Total Units: {sumUnits} </th>
              <th>Are documents Matching?</th>
              <th>
                <input id='cb1' type='checkbox' />
              </th>
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
          <thead className={styles.table_thead2}>
            <tr>
              <th width='800'>Product Title</th>
              <th className='text-center'>TSIN</th>
              <th className='text-center'>IMAGE</th>
              <th className='text-center' width='250'>
                # units
              </th>
              <th className='text-center'>short</th>
            </tr>
          </thead>

          <tbody>
            {mondayArray_noDup.product_details.map((item) => (
              <tr>
                <td>{item.product_title}</td>
                <td className='text-center'>{item.tsin}</td>
                <td className='text-center'>
                  <img src={item.image} alt='product_image' />
                </td>
                <td className='text-center'>{item.units}</td>
                <td className='text-center'>
                  {item.is_short ? (
                    <input id='cb1' type='checkbox' checked />
                  ) : (
                    <input id='cb1' type='checkbox' />
                  )}
                </td>
              </tr>
            ))}
          </tbody>

          {/* <tbody>
            <tr>
              <td>{mondayArray_noDup.product_details[0].product_title}</td>
              <td className='text-center'>
                {mondayArray_noDup.product_details[0].tsin}
              </td>
              <td className='text-center'>
                <img
                  src={mondayArray_noDup.product_details[0].image}
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
          </tbody> */}
        </Table>

        <Table
          striped
          bordered
          hover
          responsive
          className={styles.table_layout}
        >
          <thead className={styles.table_thead3}>
            <tr>
              <th className='text-center'>Confirm finished pulling po</th>
              <th className='text-center'>
                <input id='cb1' type='checkbox' />
              </th>
            </tr>
          </thead>
        </Table>
      </div>
    </>
  );
};

export default TablePickers;
