import React from 'react'
import DonarRowItems from './DonarRowItems'
import NoSearchResultFound from '../../../images/NoSearchResultFound.png';

const DonarTable = ({donars, deleteDonar,updateDonar,showAddDonarForm,searchResult,searchSuccess,searchTxt}) => {
  return (
        <table className="table table-hover">
    <thead>
      <tr>
        <th scope='col'>#</th>
        <th scope='col'>DonarId</th>
        <th scope='col'>PersonId</th>
        <th scope='col'>Blood type</th>
        <th scope='col'>Donated qyantity</th>
        <th scope='col'>Donated date</th>
        <th scope='col'>HospitalId</th>
      </tr>
    </thead>
    <tbody>
       { searchResult.length>0 ? (searchResult.map(res => (
            <DonarRowItems res={res} deleteDonar={deleteDonar} searchTxt={searchTxt} updateDonar={updateDonar} showAddDonarForm={showAddDonarForm} searchResult={searchResult} key={res.rowNumber}/>
        )))  : (donars.map(res => (
            <DonarRowItems res={res} deleteDonar={deleteDonar} searchTxt={searchTxt} updateDonar={updateDonar} showAddDonarForm={showAddDonarForm} key={res.rowNumber}/>
        )))  
        }  

        

    </tbody>
  </table>
  )
}

export default DonarTable