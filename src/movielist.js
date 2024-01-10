import { Component } from "react";
import MovieCard from "./moviecard-integrated with movie list";

class MovieList extends Component{

    render(){
        // const {title,plot,price,rating,fav,cart,stars} = this.state;
        const {movies} = this.props; //destructuring
        const {addStars, decStars, handleFav, handleCart} = this.props;
        return (
            <>
                {/* <MovieCard title={title} plot={plot} price={price} rating={rating} fav={fav} cart={cart} stars={stars}/> */}
                    {/* OR */}
                {/* -------Passing everything as Props to Movie Card ---------*/}
                {movies.map((movie)=> <MovieCard movies = {movie} 
                                                addStars = {addStars} 
                                                decStars = {decStars}
                                                handleFav = {handleFav} 
                                                handleCart = {handleCart} 
                                                key = {movie.id} />)}

                {/* <MovieCard movies={this.state} /> */}
                {/* <MovieCard/> */}
            </>
        )
    }
}

export default MovieList;