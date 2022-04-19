import React ,{useEffect,useState} from 'react'
import axios from 'axios'

const Lifecycle = () => {
    const [state,setState]=useState({
        age: 2,
        colour: "blue",
        name: "Sparkle Angel"
    })


    const [data,setData]=useState([]);


useEffect(()=>{
      // So here if you want to do anything when the component is loaded
    // And you want to do that thing only once
    // then you have to run the proces herer
    let config = {
        headers: {
            "Access-Control-Allow-Headers": '*',
        }
      }

    axios.get("https://crudcrud.com/api/5f7100112a1a42c39550c4a598b17d5f/unicorns").then(data=>{
        //console.log()
        setData(data["data"])
    }).catch(err=>{
        console.log(err);
    })


    //console.log("With array argument")

},[])

const handleChange=(event)=>{
    setState({...state,[event.target.name]:event.target.value})

}

useEffect(()=>{
    // updation phase 

    // Do some operation ---->
    // You make an api call in here 
    //console.log("Without array argument")

})


useEffect(()=>{

    // 

    // So here if you want to do anything when the component is loaded
    // And you want to do that thing only once
    // then you have to run the proces herer

    //console.log("With A return statment")

    return ()=>{
        console.log("Return method called")


    }

},[])

const clickHandler=()=>{

    let config = {
        headers: {
            "Access-Control-Allow-Origin": '*',
        }
      }
      
   axios.post("https://crudcrud.com/api/5f7100112a1a42c39550c4a598b17d5f/unicorns",config,state).then(data=>{
       alert("Success")

       // Once this is success ---
       // We can make an api call again
   }).catch(err=>{
       console.log(err);
   })
}



  return (
      <div className='container'>
           <div className='row'>
        <div className='col-4 offset-4'>

            <input type="text" className='form-control' onChange={handleChange}/>

<button onClick={clickHandler} className='btn btn-success'>
Change State
</button>

        </div>
      


    

    </div>
    <div className='row'>

        {
            data.map(ele=>(
                <li key={ele._id}>{ele._id} {ele.name}</li>
            ))
        }

    </div>

      </div>
   

   
  )
}

export default Lifecycle