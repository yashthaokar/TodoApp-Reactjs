import React from 'react'
import { useState } from 'react'; // state represent the deta the component holds (store deta ) and useState is hook.
import Table from './Table';
import './Todo2.css'

function Todo2() {
   
    const [tasks, setTasks] = useState([]);
    const [state, setState] = useState({

        first: '',
        middle: '',
        last: '',
        task: '',
       
    });// we create object which carray deta of mulitple components. we creat object instated of useing multiple  useState.

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.value });


    }; // the onchange is capture here by handlechage .

    const onsubmit = () => {
       if (state.first && state.middle && state.last && state.task)
{  setTasks([...tasks, state]);}
else{ alert ('you have to type something in all fileds')}

            setState({

            first: '',
            middle: '',
            last: '',
            task: '',
             // we created setState for setdefalut blank input with setting value=(state)

        });
    };
     

    const deleteTask = (p) => {
        tasks.splice(p,1)
        setTasks([...tasks])
        console.log(tasks)

    };
   
   

    return (
        <div className='container'>
            <div className='row' style={{ marginTop: '100px' }}>
                <div className='col-4 offset-4'>

                    {/* when the change happend in the input then the event is captured by handlechage method which is created upper side.*/}
                    <input name='first' placeholder='FirstName' type="text" className='form-control' value={state.first} onChange={handleChange} /><hr />

                    <input name='middle' placeholder='MiddleName' type="text" className='form-control' value={state.middle} onChange={handleChange} /><hr />

                    <input name='last' placeholder='LastName' type="text" className='form-control' value={state.last} onChange={handleChange} /><hr />

                    <input name='task' placeholder='WriteHereAboutTask' type="text" className='form-control' value={state.task} onChange={handleChange} /><hr />

                  

                    <button name='submit' className='btn btn-primary' style={{ marginTop: '30px' }} onClick={onsubmit}>
                        Add Todo
                    </button>
                </div>
            </div>

            <div className='row'>
                <div className='col-6 offset-3'>

              
                   

                    <table className='table'>
                        <thead>

                            <tr className='tr'>
                                <th className="th">FIRST NAME</th>

                                <th className="th">MIDDLE NAME</th>
                                <th className="th">LAST NAME</th>
                                <th className="th">TASK</th>
                                <th className="th">DATE</th>


                            </tr>
                        </thead>


                        <tbody>
                                {
                                    tasks.map((ele,i)=>{

                                        return(
                                           <Table k={i} ele={ele}  deleteTask={ deleteTask}/>
                                        )
                                    }

                                    )
                                }
                            
                        </tbody>
                        
                    </table>
                                   

                                   
                             

                </div>
                      
            </div>

        </div>

    
    )
}

export default Todo2;