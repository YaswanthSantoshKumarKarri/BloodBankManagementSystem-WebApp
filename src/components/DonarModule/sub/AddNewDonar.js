import React,{useState} from 'react'

const AddNewDonar = (props) => {
  const [donarId,setDonarId]=useState("");
  const [personId,setPersonId]=useState("");
  const [bloodType,setBloodType]=useState("");
  const [donatedQuantity,setDonatedQuantity]=useState("");
  const [date,setDate]=useState("");
  const [hospitalId,setHospitalId]=useState("");

  const submitDonar=()=>{
    if( donarId!=='' && personId!=='' && bloodType!=='' && donatedQuantity!=='' && date!=='' && hospitalId!==''){
      if(!props.fixedDonarId) {
        console.log(donarId,"addInput")
        props.addDonar(donarId,personId,bloodType,donatedQuantity,date,hospitalId);}
      else{  
        props.saveUpdateValues(donarId,personId,bloodType,donatedQuantity,date,hospitalId);
    }
    setDonarId('');
      setPersonId('');
      setBloodType('');
      setDonatedQuantity('');
      setDate('');
      setHospitalId('');
        
    }
}

  return (
    <form>

<div className="form-floating">
  <input type='text' 
                name='donarId' 
                required
                onChange={e=>{(props.fixedDonarId!=undefined) ? setDonarId(props.fixedDonarId) : setDonarId(e.target.value)}}
                value={donarId}
                placeholder="Enter Donar ID here"
                className="form-control" 
                id="donarId"
  />
    <label htmlFor="donarId"> Donar Id</label>
</div>
  <br/>
  <div className="form-floating">

  <input type='text' 
                autoComplete='off' 
                name='personId' 
                required
                onChange={e=>setPersonId(e.target.value)}
                value={personId} 
                placeholder="Enter Person ID here"
                className="form-control" 
                id="personId"
  />
  <label htmlFor="personId"> PersonId</label>
</div>    <br/>
<div className="form-floating">
  <input  type='text' 
                autoComplete='off' 
                name='bloodType' 
                required
                onChange={e=>setBloodType(e.target.value)}
                value={bloodType} 
                placeholder="Enter Blood type here"
                className="form-control" 
                id="bloodType"
  />
    <label htmlFor="bloodType"> Blood Type</label>
<br/>
</div>
<div className="form-floating">
  <input        type='text' 
                autoComplete='off' 
                name='donatedQuantity' 
                required
                onChange={e=>setDonatedQuantity(e.target.value)}
                value={donatedQuantity} 
                placeholder="Enter Donated quantity here"
                className="form-control" 
                id="donatedQuantity"
  />
  <label htmlFor="donatedQuantity"> Donated Quantity</label>
  <br/>
</div>             

<div className="form-floating">
  <input  type='date' 
                autoComplete='off' 
                name='date' 
                required
                onChange={e=>setDate(e.target.value)}
                value={date} 
                placeholder="Enter Donated Date here"
                className="form-control" 
                id="date"
  />
    <label htmlFor="date"> Donated Date</label>
<br/>
</div>
<div className="form-floating">
  <input        type='text'
                autoComplete='off' 
                name='hospitalId' 
                required
                onChange={e=>setHospitalId(e.target.value)}
                value={hospitalId} 
                placeholder="Enter Hospital ID here"
                className="form-control" 
                id="hospitalId"
  />
  <label htmlFor="hospitalId"> hospitalId</label>
</div>   
  <br/>
    <button 
    type="submit" 
    className="btn btn-primary" 
     onClick={submitDonar}
    >
      {(props.fixedDonarId) ? 'Update' :'Add' } 
    </button> 
  </form>
  )
}

export default AddNewDonar