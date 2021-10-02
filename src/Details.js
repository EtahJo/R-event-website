import { useParams,useHistory } from "react-router";
import useFetch from "./useFetch";

const Details = () => {

    const{ id }=useParams();
    const { data:event,error,isPending} =useFetch('http://localhost:8000/events/' + id);
    const history=useHistory()
    const handleDelete = () =>{
        fetch('http://localhost:8000/events/'+ event.id,{
            method:'DELETE'
        }).then(()=>{
            history.push('/');

        })

    }
    
    
    return ( 
        <div className="details">
            {isPending && <div style={{
                color:'white'
            }}>Loading ...</div>}
            {error && <div>{ error }</div>}
            {event && (
                <article
                style={{
                    color: 'black',
                    textAlign:'center',
                    background: 'white',
                    padding: '20px'
                }}>
                <h2 style={{
                    color:'black'
                }}>{event.title}</h2>
                <p style={{
                    color: 'orange',
                    fontStyle:'italic'
                }}>{event.place}</p>
                <div>{event.des}</div>
                <button onClick={handleDelete}>delete</button>
                </article>
            )}
        </div>
     );
}
 
export default Details;