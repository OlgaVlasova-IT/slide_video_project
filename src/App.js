import data from './data';
import {useState} from "react"
import './App.css';
import ReactPlayer from 'react-player'

function App() {
  const [ idMovie, setIdMovie] = useState(0);
  const { id, movieName , desc, trailer_link} = data[idMovie];
  
  
  const prevBtn = () => {
 
   
    if (id <= 1) {
      setIdMovie(data.length-1)
    }
    else if (id > data.length) {
      setIdMovie(0)
    } else {setIdMovie(idMovie-1);
 
  }
  }
  const nextBtn = () => {
  
     if (id >= data.length) {
      setIdMovie(0);
    } else setIdMovie(id);

     
  }

 
  return (
    <div className="App">
    <h3> The Best Comedies and Musicals of 2021 (by Esquire) </h3>
       <div className='movieCont'>
           <h2>"{movieName}"</h2>
           <div className='videoCont'>
           <ReactPlayer width="390px" height="201px" controls={true}
            url={trailer_link} />
            </div>
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
