import MovieCard from '../Components/MovieCard'
import { useState,useEffect } from 'react';
import '../css/Home.css'
import {searchMovies,getPopularMovies} from '../services/api';

function Home(){

    const [searchQuery,setSearchQuery] = useState("");
    const [movies,setMovies] = useState([]);
    //to store loading data
    const[error,setError] = useState(null);
    const[loading,setLoading] = useState(true);
    useEffect(()=>{
        //to an api 
        const loadPopularMovies = async () =>{
            try{
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            }
            catch(err){
                console.log(err)
                setError("Failed to Load Movies...")
            }
            finally{
                setLoading(false)
            }
        }

        loadPopularMovies()
    },[])

    const handleSearch = (e) =>{
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery("")
    };
    return (
        <div className="home">

            <form onSubmit={handleSearch} className='search-form'>
                <input type="text" placeholder='Enter Movie Name....' className='search-input' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
                    <button type='submit' className='search-button'>Search</button>
            </form>
            <div className="movie-grid" >
                {movies.map(movie => <MovieCard movie={movie} key={movie.id}/>)}
            </div>
        </div>
    );
}
export default Home