import React, {useState, useEffect} from 'react';

import DonarTable from '../sub/DonarTable';
import AddNewDonar from '../sub/AddNewDonar';
import SearchBar from '../sub/SearchBar';
// import { Link } from "react-router-dom"

import NoSearchResultFound from '../../../images/NoSearchResultFound.png';
import "./DonarInputPage.css"
const DonarInputPage = () => {
 
  const [showAddDonarForm,setShowAddDonarForm]=useState(false);
  const [showUpdateDonarForm,setShowUpdateDonarForm]=useState(false);
  const [fixedDonarId,setFixedDonarId]=useState('');
  const [searchResult, setSearchResult] = useState([ ]);
  const [searchTxt, setSearchTxt]=useState('');
  const [searchSuccess,setSearchSuccess]=useState('');

  const [donars,setDonars]=useState([
      {
          rowNumber:1,
          rowDonarId:'puppyman1',
          rowPersonId:'yash#321',
          rowBloodType:'B+',
          rowDonatedQuantity:'250ml',
          rowDate:'12/12/1999',
          rowHospitalId:'rajiv-123'
      },
      {
          rowNumber:2,
          rowDonarId:'kittyman2',
          rowPersonId:'santa#321',
          rowBloodType:'o+',
          rowDonatedQuantity:'250ml',
          rowDate:'1/7/2001',
          rowHospitalId:'satya-123'
      },
      {
          rowNumber:3,
          rowDonarId:'kittyman4',
          rowPersonId:'santa#321',
          rowBloodType:'o+',
          rowDonatedQuantity:'250ml',
          rowDate:'1/7/2001',
          rowHospitalId:'satya-123'
      },
      {
          rowNumber:4,
          rowDonarId:'teddyman3',
          rowPersonId:'buddi#321',
          rowBloodType:'AB-',
          rowDonatedQuantity:'250ml',
          rowDate:'4/7/2001',
          rowHospitalId:'datta-123'
      }
  ])

  const addDonar =(donarId,personId,bloodType,donatedQuantity,date,hospitalId) =>{
    let rowNumber=0;
    if(donars.length>0){
      rowNumber=donars[donars.length-1].rowNumber+1;
    }else{
      rowNumber=1;
    }
    const newDonar={
      rowNumber:donars.length+1,
      rowDonarId:donarId,
      rowPersonId:personId,
      rowBloodType:bloodType,
      rowDonatedQuantity:donatedQuantity,
      rowDate:date,
      rowHospitalId:hospitalId
    }
    setShowAddDonarForm(false)
    setDonars(donars=>[...donars,newDonar])
    console.log(donars,"donars list ")
  }
  
  const deleteDonar=(deleteDonarRowDonarId,searchtxt)=>{
    let filtered=(donars).filter(function(value){
      return value.rowDonarId!==deleteDonarRowDonarId;
    });
    setDonars(filtered);
    let filtered1=(searchResult).filter(function(value){
      return value.rowDonarId!==deleteDonarRowDonarId;
    });
    setSearchResult(filtered1);
    if(searchtxt!=''){
      console.log('searchtxt find searchehcbjah',searchtxt)
        searchHandler(searchtxt);
    }
  }

  const updateDonar=(updateDonarRowNumber)=>{
    let filtered=donars.filter(function(value){
      if(value.rowNumber===updateDonarRowNumber){
        setShowUpdateDonarForm(!showUpdateDonarForm);
        setFixedDonarId(value.rowDonarId);
        setShowAddDonarForm(false); 
      }
    });
  }

  const saveUpdateValues=(donarId,personId,bloodType,donatedQuantity,date,hospitalId)=>{
    console.log(donarId,"addInput")
    let filtered=donars.filter(function(value){
      if(value.rowDonarId===fixedDonarId){
        value.rowPersonId=personId;
        value.rowBloodType=bloodType;
        value.rowDonatedQuantity=donatedQuantity;
        value.rowDate=date;
        value.rowHospitalId=hospitalId;
      }
      return value;
    });
    setDonars(filtered);
    let filtered1=searchResult.filter(function(value){
      if(value.rowDonarId===fixedDonarId){
        value.rowPersonId=personId;
        value.rowBloodType=bloodType;
        value.rowDonatedQuantity=donatedQuantity;
        value.rowDate=date;
        value.rowHospitalId=hospitalId;
      }
      return value;
    });
    setSearchResult(filtered);
    setShowUpdateDonarForm(false);
  }
 
  const searchHandler=(searchtxt)=>{
    setSearchTxt(searchtxt);
    setSearchResult([]);
    let count=0;
      let filtered=donars.filter(function(value){
        if(value.rowDonarId.includes(searchtxt) || value.rowPersonId.includes(searchtxt) || value.rowHospitalId.includes(searchtxt)){
          count++;
          setSearchResult(searchResult=>[...searchResult,value]);
          
        }
      });
      (count==0) ? setSearchSuccess(true) : setSearchSuccess(false);
    }

    return (  
<div className='mt-5 container'>
  <div className="card">
    <div className="card-header">
      <figure className="text-center">
        <blockquote className="blockquote">
          <p>Donars List</p>
        </blockquote>
        <figcaption className="blockquote-footer">
          Donate<cite title="Source Title"> &</cite> Save.
      <SearchBar searchHandler={searchHandler}/>
        </figcaption>
      </figure>
    </div>
    <div className="card-body">
      {searchSuccess && 
      <div className='search-msg'>
        <img src={NoSearchResultFound} alt='alt'/><br/>
        <span>No items match your search</span><br/>
        <p style={{fontSize:'10px' , Color:'grey'}}>Try a different search</p>
      </div> 
}
      {!searchSuccess &&
      <DonarTable donars={donars} searchTxt={searchTxt} searchResult={searchResult} searchSuccess={searchSuccess} deleteDonar={deleteDonar} updateDonar={updateDonar} showAddDonarForm={showAddDonarForm}/>
}
      <button onClick={()=>{setShowAddDonarForm(!showAddDonarForm);setShowUpdateDonarForm(false)}} className="btn btn-outline-primary">
        {showAddDonarForm ? 'close new Donar' : 'new Donar' }
      </button>
      <br/>
      <br/>
      {showAddDonarForm && 
      <AddNewDonar addDonar={addDonar}/>
      }
      <br/>
      {showUpdateDonarForm && 
      <AddNewDonar  fixedDonarId={fixedDonarId} saveUpdateValues={saveUpdateValues}/>
      }
    </div>
  </div>
  
</div>
    )
}

export default DonarInputPage