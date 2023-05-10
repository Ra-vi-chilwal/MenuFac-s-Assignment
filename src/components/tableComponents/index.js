import React from "react";
import './table.css';
import { Mean, Median, Mode } from "../methodFormulae/Formulae";
const Table =  ({method1, method2, method3, data1, data2, data3}) =>{
    return (  
        <>
       <table>
  <tr>
    <th>Measure</th>
    <th>Class 1</th>
    <th>Class 2</th>
    <th>Class 3</th>

  </tr>
  <tr>
    <td>{method1}</td>
    <td>{Mean(data1)}</td>
    <td>{Mean(data2)}</td>
    <td>{Mean(data3)}</td>
    

  </tr>
  <tr>
    <td>{method2}</td>
    <td>{Median(data1)}</td>
    <td>{Median(data2)}</td>
    <td>{Median(data3)}</td>

  </tr>
  <tr>
    <td>{method3}</td>
    <td>{Mode(data1)}</td>
    <td>{Mode(data2)}</td>
    <td>{Mode(data3)}</td>

  </tr>
</table>
        </>
    )

}
export default Table;