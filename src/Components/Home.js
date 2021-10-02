import HomeCSS from './Home.module.css';
import Eventlist from './Eventlist';
import useFetch from '../useFetch';

const Home= ()=> {
    const { data: events ,isPending,error} = useFetch('http://localhost:8000/events')
    return (
       
        <div className={HomeCSS.home}>
            { error && <div style={{
                color: 'white'
            }}
            >{ error }</div>}
            {isPending && <div style ={{
                color: 'white'
            }}>Loading...</div>}
               
          {events && <Eventlist events ={events}/>}
          
        </div>
    )
}

export default Home
