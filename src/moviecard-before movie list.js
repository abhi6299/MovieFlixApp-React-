import {Component} from 'react';

class MovieCard extends Component{
    constructor(){
        super(); //calling constructor of the inherited class first
        this.state = {
            title:"Captain America",
            plot:"Supernatural power and saving the world from evil",
            price: 199,
            rating: 8.9,
            stars:0,
            fav:true,
            cart:true
        }
        // this.addStars =  this.addStars.bind(this); 
    }
    // Handler to add Stars ---------------------------------------------------
    // addStars = () => {
    //     console.log(this);
    // }
    addStars(){
        if(this.state.stars >= 5){
            return;
        }
        // this.state.stars += 0.5;
        // //Re-render App component
        //Or use setState()f
            //..using 1st form of setState()
            // this.setState({ //will automatically re-render as well
            //     stars:this.state.stars + 0.5 
            // })
            //..using 2nd form of setState()
            this.setState((prev)=>{
                return {
                    stars: prev.stars + 0.5
                }
            },()=>console.log("Just checking the asynchronity of setState function: Inside cb f,",this.state.stars));
            console.log("Just checking the asynchronity of setState function:Outside cb f,",this.state.stars)
        // console.log(this);
    }
    // Handler to decrease Stars ---------------------------------------------------
    decreaseStars(){
        if(this.state.stars <= 0){
            return;
        }
        this.setState({
            stars:this.state.stars - 0.5 //1st form used
        })
    }
    // Handler to toggle value of fav variable ---------------------------------------------------
    handleFav = ()=>{
        this.setState({
            fav:!this.state.fav
        })
    }
    // Handler to toggle value of cart variable ---------------------------------------------------
    handleCart = ()=>{
        this.setState({
            cart:!this.state.cart
        })
    }
    // To render the component when called -------------------------------------------
    render(){
        const {title,plot,price,rating,fav,cart} = this.state;
        return (
            <div className='main'>
                {/**Movie Card */}
                <div className='movie-card'>

                    {/**Left section of Movie Card */}
                    <div className='left'>
                        <img alt="poster" src='https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg' />
                    </div>
                    
                    {/**Right section Movie Card */}
                    <div className='right'>
                        <div className='title'>{this.state.title}</div>
                        <div className='plot'>{plot}</div>
                        <div className='price'>Rs. {price}</div>

                        {/**Footer starts here with ratings, stars and buttons */}
                        <div className='footer'>
                            <div className='rating'>{rating}</div>
                            
                            {/**Star image with increase and decrease buttons and star count */}
                            <div className='star-dis'>
                                {/* Minus icon - */}
                                    {/* <img className="str-btn" alt="Decrease" src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png" /> */}
                                    {/* Using Fontawesome site - Added CDN for that in index.html*/}
                                    <i className="fa-solid fa-minus stars" onClick={()=>this.decreaseStars()}></i>
                                
                                {/* Using Flaticon site - Star*/}
                                <img className="stars" alt="stars" src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png" />
                                
                                {/* Increase icon + */}
                                <i className="fa-solid fa-plus stars" onClick={this.addStars.bind(this)}></i>
                                {/* <img className="str-btn" alt="increase" src="https://cdn-icons-png.flaticon.com/128/2997/2997933.png" /> */}
                                
                                <span className="starCount">{this.state.stars}</span>
                            </div>
                            {/* {fav ? <button className='unfavourite-btn' onClick={this.handleFav}>Un-Favourite</button>: <button className='favourite-btn' onClick={this.handleFav}>Favourite</button>} */}
                            {/* OR */}
                            <button className={fav?'unfavourite-btn':'favourite-btn'} onClick={this.handleFav}>{fav?'unfavourite':'favourite'}</button>
                            <button className={cart?'unfavourite-btn':'cart-btn'} onClick={this.handleCart}>{cart?'Remove':'Add to cart'}</button>
                            {/* <button className='cart-btn'>Add to cart</button> */}
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default MovieCard;