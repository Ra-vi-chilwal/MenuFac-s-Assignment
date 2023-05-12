import React from "react";
import './table.css';
import { Mean, Median, Mode } from "../methodFormulae/Formulae";
const Table =  ({method1, method2, method3,arrayData=[]}) =>{
    return (  
        <>
       <table>
  <tr>
    <th>Measure</th>
    {arrayData.length>0 && arrayData.map((item, index)=>{
      return(
        <th>Class {index+1}</th>
      )
    })}

  </tr>
  <tr>
    <td>{method1}</td>
    {arrayData.length>0 && arrayData.map((item, index)=>{
      return(
        <td>{Mean(item.typeArray || item)}</td>
      )
    })}
    

  </tr>
  <tr>
    <td>{method2}</td>
    {arrayData.length>0 && arrayData.map((item, index)=>{
      return(
        <td>{Median(item.typeArray || item)}</td>
      )
    })}

  </tr>
  <tr>
    <td>{method3}</td>
    {arrayData.length>0 && arrayData.map((item, index)=>{
      return(
        <td>{Mode(item.typeArray|| item)}</td>
      )
    })}

  </tr>
</table>
        </>
    )

}
export default Table;