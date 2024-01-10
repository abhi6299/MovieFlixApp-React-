//Used when studying for PROPS
import Student from './student(learningPROPS)'; 
//For understanding module.css concept 
import HeadingOne from './Understanding Global scope,CSS modules/HeadingOne';
import HeadingTwo from './Understanding Global scope,CSS modules/HeadingTwo';
import './Understanding Global scope,CSS modules/heading.css';
//------------------------------------------------------------------------------
import React from 'react';
import './styles.css';
import MovieList  from "./movielist";
import NavBar from './navbar';
import { movieList } from './movieData';

class App extends React.Component {
  constructor(){
    super(); //calling constructor of the inherited class first
    this.state = {
        movies : movieList ,
        cartCount:0
    }
    // this.addStars =  this.addStars.bind(this); 
}

  handleIncStars = (movie) => {
      const{movies} = this.state;
      const mid = movies.indexOf(movie);
      if(movies[mid].stars>=5){
          return;
      }
      movies[mid].stars += 0.5;
      this.setState({
          movies: movies
      })
  }

  handleDecStars = (movie) => {
    const{movies} = this.state;
    const mid = movies.indexOf(movie);
    if(movies[mid].stars<=0){
        return;
    }
    movies[mid].stars -= 0.5;
    this.setState({
        movies
    })
  }

  handleFav = (movie)=>{
  const {movies} = this.state;
  const mid = movies.indexOf(movie);
  movies[mid].fav=!movies[mid].fav
      this.setState({
          movies:movies
      })
  }

  handleCart = (movie)=>{
  const {movies} = this.state;
  const mid = movies.indexOf(movie);
  movies[mid].cart=!movies[mid].cart
  console.log(movies[mid].cart);
  if(movies[mid].cart){
    this.state.cartCount += 1;
  }else{
    this.state.cartCount -= 1;
  }
  this.setState({
          movies:movies,
          cartCount:this.state.cartCount
      })
  console.log(this.state.cartCount);
  }

  render(){
    const {movies} =this.state;
    return (
      <>
        {/* <h1>MovieFlix</h1> */}
        <NavBar cartCount={this.state.cartCount}/>
        <MovieList movies={movies}
                    addStars = {this.handleIncStars} 
                    decStars = {this.handleDecStars}
                    handleFav = {this.handleFav} 
                    handleCart = {this.handleCart}/>
  
        {/* Leanring PROPS */}
          {/* <Student stuname="Abhi" marks={80}/>
          <Student  marks={70}/>
          <Student stuname="AbhiGoyal" /> */}

        {/* Learning CSS Modules */}
          {/* <HeadingOne/>
          <HeadingTwo/> */}
      </>
    );
  }
}

// Student.defaultProps = {
//   stuname:"Student",
//   marks:"N.A."
// }

export default App;
