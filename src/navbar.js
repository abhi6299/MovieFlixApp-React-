import React from "react"
import styled from "styled-components"; // for styled-component styling
import styleNav from './nav.module.css'; //use this for module.css styling 

const Title = styled.div`
font-size: 30px;
color: #fff;
font-weight: 600;
font-family: Montserrat, sans-serif;
text-transform: uppercase;
margin-left: 20px;
&:hover{
    color:red;
}
`;
const CartImg = styled.img`
    height: 48px;
    margin-right: 20px;
`;

// Added dynamic styling in cartcount styled component
const CartCount = styled.span`
    background: ${(PROPS)=>PROPS.col};
    border-radius: 50%;
    padding: 4px 8px;
    position: absolute;
    right: 10px;
    top: -5px;
    font-size: 12px;
    visibility: ${(p)=>p.show? "visible": "hidden"};
    &:hover{
        color:red;
    }
`;

class NavBar extends React.Component{
    render(){
        return(
            <>
                {/* Method 1 Inline Styling: Putting all attributes in tag */}
                {/* <div style={{width: 100+"%", height:70, backgroundColor:"red", display:"flex", justifyContent:"space-between"}}> */}
                
                {/* Method 2 Inline Styling /Internal Styling: Putting obj in place of attr */}
                <div style={styles.nav}>
                    
                    {/* <div style={styles.title}>MOVIE FLIX</div> */}
                    {/* Method3: Using styled component styling method for title */}
                    <Title>Movie Flix</Title>
                    {/* Used Internal styling on cart container */}
                    <div style={styles.cartIconContainer}> 
                        {/* Used styled component below */}
                        <CartImg src="https://cdn-icons-png.flaticon.com/128/891/891462.png"
                            alt="cart-icon"/> 
                        <CartCount col="orange" show={true}>{this.props.cartCount}</CartCount>
                    </div>
                </div>
            </>
        )
        //Entire NavBar using modulel.css
        // return (
        //     <>
        //     <div className={styleNav.nav}>
              
        //     <div className={styleNav.title}>MOVIE APP</div>
              
        //       <div className={styleNav.cartIconContainer}>
        //           <img className={styleNav.cartIcon} 
        //                alt="Cart-Icon" 
        //                src = "https://cdn-icons-png.flaticon.com/128/891/891462.png"    
        //           />
        //           <span className ={styleNav.cartCount}>5</span>
        //       </div>
        //     </div>
      
        //     </>
        //     )
    }
}
export default NavBar;

//Normal styling - add a className to the t ag we want to add below style
// .nav{
//     width:100%;
//      height:70;
//      background-color: red;
//      display: flex;
//      justify-content: space-between;
//   }

const styles = {
    cartIcon: {
        height: 48,
        marginRight: 20,
      },
      nav: {
        height: 70,
        display: "flex",
        justifyContent: "space-between" ,
        alignItems: "center",
        position: "relative",
        background: "linear-gradient(170deg, #1bc059, #0d47a1)"
      },
      title:{
        fontSize: 30,
        color: "#fff",
        fontWeight: 600,
        fontFamily: '"Montserrat", sans-serif',
        textTransform: "uppercase",
        marginLeft: 20
      },
      
      cartIconContainer: {
        position: "relative",
        cursor: "pointer",
      },
      cartCount: {
        background: "orange",
        borderRadius: "50%",
        padding: "4px 8px",
        position: "absolute",
        right: 10,
        top: -5,
        fontSize: 12,
      },
}