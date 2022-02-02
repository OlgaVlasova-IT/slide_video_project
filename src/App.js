import data from './data';
import {useState} from "react"
import './App.css';
import ReactPlayer from 'react-player'
import heartBorder from "./heart-regular.svg"
import heartSolid from "./heart-solid.svg"
// import deleteIcon from "./delete-button.svg"
import cancelIcon from "./cancel.png"

function App() {
    const [indexMovie, setIdMovie] = useState(0);
    const {id, movieName, desc, trailer_link} = data[indexMovie];
    const [showMore, setShowMore] = useState(false);
    const [showLike, setShowLike] = useState(new Array(data.length).fill(false));
    const [watchList, setWatchList] = useState([])

    const prevBtn = () => {

        if (id <= 1) {
            setIdMovie(data.length - 1)
            setShowMore(false)

        } else if (id > data.length) {
            setIdMovie(0)
            setShowMore(false);
        } else {
            setIdMovie(indexMovie - 1);
            setShowMore(false);

        }
    }
    const nextBtn = () => {

        if (id >= data.length) {
            setIdMovie(0);
            setShowMore(false);

        } else {
            setIdMovie(id);
            setShowMore(false)
        }
    }
    const handleShowMore = () => {
        setShowMore(!showMore);
    }

    const addToWatchList = (id) => {
        let temp = [...showLike]
        temp[id - 1] = true;
     
        setShowLike(temp)
        
        const movieToAdd = data.find(movie => movie.id === id);
        if (!watchList.includes(movieToAdd)) {
            const newList = [...watchList];
            newList.unshift(movieToAdd);
            setWatchList(newList);
        }
    }

    const deleteMovie = (id) => {
       
        //filter temp array to delete movie
        const temp = watchList.filter(movie => movie.id !== id)
        //update WatchList
        setWatchList(temp);
        //update like
        const tempShowLike = [...showLike];
        //no show solid heart
        tempShowLike[id - 1] = false;
        //update showLike array
        setShowLike(tempShowLike);
    }

    return (
        <div className="App">
            <h3>
                The Best Comedies and Musicals of 2021 (by Esquire)
            </h3>
            <div className='movieCont'>
                <h2>"{movieName}"</h2>
                <div className='videoCont'>
                    <ReactPlayer width="390px" height="201px" controls={true} url={trailer_link}/>
                </div>
                <p className='desc'>
                    {
                        showMore
                            ? desc
                            : desc.substring(0, 100)
                    }
                    <button className="btnShowMore" onClick= {() => {handleShowMore()}}>
                        {
                            showMore
                                ? " Show Less"
                                : "Show More"
                        }
                    </button>
                </p>
                <div className="btnCont">
                    <button className="btn" onClick={prevBtn}>Prev</button>
                    <button className="btnLike" onClick={() => addToWatchList(id)}>
                        <img
                            className="heart"
                            alt="heart icon"
                            src={showLike[id - 1]
                                ? heartSolid
                                : heartBorder}
                            width="25px"></img>
                    </button>
                    <button className="btn" onClick={nextBtn}>Next</button>
                </div>

                <div className="listCont">
                    <h3>My to-watch-list</h3>
                    <ul>
                        {
                            watchList.map(movie => {
                                const {id, movieName, photo_landscape} = movie;
                                return (
                                    <div className='liCont'>
                                        <img src={photo_landscape} alt="promo movie" width="48px" height="24px"></img>
                                        <li key={id}>
                                            {movieName}
                                        </li>
                                        <button className="btnCancel" onClick={() => deleteMovie(id)}><img src={cancelIcon} alt="delete Icon" width="15px" height="15px"/></button>
                                    </div>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>

        </div>
    );
}

export default App;
