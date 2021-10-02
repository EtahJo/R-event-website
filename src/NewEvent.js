import { useState } from "react";
import { useHistory,useParams } from "react-router";
const NewEvent= () => {
    const[date,setDate]=useState('');
    const[title,setTitle]=useState('');
    const[des,setDes]=useState('');
    const[time,setTime]=useState('');
    const[place,setPlace]=useState('');
    const[isPending,setIsPending]=useState(false);
    const history = useHistory();
    const id = useParams();

    const handleSubmit =(e)=>{
        e.preventDefault();
        const event ={date,title,des,time,place};
        setIsPending(true);
      fetch('http://localhost:8000/events',{
          method:'POST',
          headers:{"Content-Type":"application/json"},
          body: JSON.stringify(event)

      }).then(()=>{
          console.log('new event added');
          setIsPending(false);
          history.push('/thanks');
      })
     


    }

    return (  
       <div className="contact">
           <h2>Create New Event</h2>
           <form onSubmit={handleSubmit}
           style={{
               background:'white'
           }}> 
               <label>Date:</label>
               <input type="text"
               required
               value={date}
               onChange={(e)=>setDate(e.target.value)}
               
               />
               <label>Title:</label>
               <input type="text" 
               required
               value={title}
               onChange={(e)=> setTitle(e.target.value)}
               />
               <label>Description:</label>
               <textarea 
               required
               value={des}
               onChange={(e)=>setDes(e.target.value)}
               ></textarea>
               <label>Time</label>
               <input type="text" 
               required
               value={time}
               onChange={(e)=> setTime(e.target.value)}
               />

               <label>Place</label>
               <input type="text" 
               required
               value={place}
               onChange={(e)=> setPlace(e.target.value)}
               />
              {!isPending && <button>Add Event</button>}
              {isPending && <button disabled>Adding Event...</button>}
            

           </form>
       </div>
    );
}
 
export default NewEvent;