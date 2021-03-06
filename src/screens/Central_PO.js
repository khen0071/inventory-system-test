import React, { useState, useEffect } from 'react';
import Pagination from '../components/PaginationCentralPo.js';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import styles from '../styles/datasheet.module.css';

const Central_PO = () => {
  const [data, setData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(20);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          'https://script.google.com/macros/s/AKfycbzazxAZ2emmkuWdosBe2iKAecYA7MnDnwzYyIQQBiRNrPbS25lUG9r0OWSjbYywGxR_/exec'
        );

        setData(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  //Get current product data
  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstDate = indexOfLastData - dataPerPage;
  const currentData = data.slice(indexOfFirstDate, indexOfLastData);
  //paginate function
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.central_po_container}>
          <h1>Central PO</h1>

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
                <th>DATE</th>
                <th>DAY</th>
                <th>PO NUMBER</th>
                <th>ACCOUNT</th>
                <th>TEAM</th>
                <th>PRODUCT TITLE</th>
                <th>TSIN</th>
                <th>UNITS</th>
                <th>QUEUE</th>
              </tr>
            </thead>
            <tbody>
              {currentData?.map((item) => {
                return (
                  <tr>
                    <td>{item.date.split('T')[0]}</td>
                    <td>{item.day}</td>
                    <td>{item.po_number}</td>
                    <td>{item.account}</td>
                    <td>{item.team}</td>
                    <td>{item.product_title}</td>
                    <td>{item.tsin}</td>
                    <td>{item.units}</td>
                    <td>{item.queue_num}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>

          <Pagination
            dataPerPage={dataPerPage}
            totalData={data.length}
            paginate={paginate}
          />
        </div>
      </div>
    </>
  );
};

export default Central_PO;
