import React from 'react';

import PickersNav from '../../components/PickersNav';

import { Table } from 'react-bootstrap';

import styles from '../../styles/datasheet.module.css';

const Thursday_pickers = () => {
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

  //   var thursdayArray = data.filter(function (item) {
  //     return item.day === 'tuesday';
  //   });

  //   var newArray = [];
  //   thursdayArray.forEach((item) => {
  //     var newItem = {
  //       po_number: item.po_number,
  //       account: item.account,
  //       team: item.team,
  //       queue_num: item.queue_num,
  //       day: item.day,
  //       date: item.date.split('T')[0],
  //       product_details: [],
  //     };

  //     thursdayArray.map((innerItem) => {
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

  //   const thursdayArray_noDups = [
  //     ...new Map(newArray.map((item) => [item.po_number, item])).values(),
  //   ];

  //   console.table(thursdayArray_noDups);

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
              <td>59616930</td>
              <td>14/04/2022</td>
              <td>TH-5</td>
              <td>ZENNITH</td>
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
                Diamond Chain Design Silicone Fondant Icing Cake Mold - Pink
              </td>
              <td></td>
              <td>76309219</td>
              <td>1</td>
              <td>
                <input type='checkbox'></input>
              </td>
            </tr>
            <tr>
              <td>
                Memory Foam Leg Knee Pillow With Elastic Strap For Pain Relief -
                Black
              </td>
              <td></td>
              <td>76539254</td>
              <td>2</td>
              <td>
                {' '}
                <input type='checkbox'></input>
              </td>
            </tr>

            <tr>
              <td>
                7 Pieces Stainless Steel Icing Piping Nozzles for Decorating
                Cakes
              </td>
              <td></td>
              <td>76195419</td>
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
              <td>59616995</td>
              <td>14/04/2022</td>
              <td>TH-7</td>
              <td>ZENNITH</td>
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
              <td>14 inch Wooden Double-Handle Stainless Steel Pizza Slicer</td>
              <td></td>
              <td>77582656</td>
              <td>1</td>
              <td>
                <input type='checkbox'></input>
              </td>
            </tr>

            <tr>
              <td>Breathable and Soft Head Neck Flexible Pillow - Purple</td>
              <td></td>
              <td>75407931</td>
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

export default Thursday_pickers;
