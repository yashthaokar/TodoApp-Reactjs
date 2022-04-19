import React from 'react'
import { useState } from 'react';

const Table = ({ele, k ,  deleteTask}) => {
    const [check, setCheck]= useState(false);

     const [ifDate, setIfDate]= useState(false);

    const handleCheck =()=>{
        if ( check=== false){
            setCheck(true);
        }
        else {setCheck(false)};
    };

    
    const handelDate=(event)=>{
        const selDate= new Date(event.target.value) ;
        const curDate= new Date().getTime();
        console.log(selDate.getTime());
        console.log(curDate);

        if (curDate>selDate.getTime()){
            alert('Due date is passed')
            setIfDate(!ifDate)
        }
        

    }; 

  return (
  <tr className='tr' key={k}>
    <td className='tr'>{ele.first}</td>
    <td className='tr'>{ele.middle}</td>
    <td className='tr'>{ele.last}</td>
    <td className='tr'>{ele.task} <hr />{ifDate?<p style={{ color:'red'}}>Your due date is passed</p>:<></>} </td>
 

    <td className='tr'>  <input name='date' type="date" className='form-control' 
    onChange={handelDate

    }  /><hr /></td>

    <td><input type="checkbox" onClick={handleCheck}/>
    </td>
    <td key={k}><button onClick={()=>deleteTask (k)} className='btn btn-danger' disabled={check===false} >
            Delete Task

        </button></td>
        
</tr>
  )
}

export default Table;