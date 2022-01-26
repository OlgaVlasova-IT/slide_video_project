import data from './data';
import {useState} from "react"
import './App.css';
import ReactPlayer from 'react-player'

function App() {
  const [ idMovie, setIdMovie] = useState(0);
  const { id, name , desc, trailer_link, photo_landscape, source} = data[idMovie];
  const array = [];
  const [myWatchList, setMyWatchList] = useState(array);
  
  const prevBtn = () => {
    setMyWatchList(array)
   
    if (id <= 1) {
      setIdMovie(data.length-1)
    }
    else if (id > data.length) {
      setIdMovie(0)
    } else {setIdMovie(idMovie-1);
 
  }
  }
  const nextBtn = () => {
    setMyWatchList(array)
     if (id >= data.length) {
      setIdMovie(0);
    } else setIdMovie(id);

     
  }

  const addToList = () => {
  array.push({ name: name, logo: photo_landscape});
   setMyWatchList(array);
    
  }

  return (
    <div className="App">
    <h3> The Best Comedies and Musicals of 2021 (by Esquire) </h3>
       <div className='movieCont'>
           <h3>{name}</h3>
           <ReactPlayer width="488px" height="252px" controls={true}
            url={trailer_link} />
           <p className="desc">{desc}</p>
           <div className="btnCont">
           <button className ="btn" onClick={prevBtn}>Prev</button>
           <button className ="btn" onClick={nextBtn}>Next</button>
           </div>
       </div>
    
    </div>
  );
}

export default App;
