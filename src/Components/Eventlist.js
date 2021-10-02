import HomeCSS from './Home.module.css';
import { Link } from 'react-router-dom';


const Eventlist = ({events}) => {
   
    return ( 
      <div className="event-list">
       
          
              {events.map((event)=>(
                <div className={HomeCSS.eventpreview}>
                 <ul className={HomeCSS.grid}>
                    <li><h1>{event.date}</h1></li>
                    <li><h2>{event.title}</h2></li>
                    <li><p>{event.des}</p></li>
                    <li><Link to={`/details/${event.id}`} className={HomeCSS.details}>+ Event Detail</Link> </li>
                    <li><h2>{event.time}</h2></li>
                   <li><p>{event.place}</p></li>
                 
                   </ul>
                   
                    <hr style={{
                        width: "85%"
                    }}/>
                   

                </div>
            ))}

        
         <div className={HomeCSS.grid}>
         <Link to= '/new-event/'><i className="fas fa-comment-alt"></i></Link>
         </div>
      </div>
     );
}
 
export default Eventlist;