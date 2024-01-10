import React from "react";
// PROPS in class Component
    // class Student extends React.Component{
    //     render(){
    //         console.log(this.props);
    //         return (
    //             <>
    //                 <h1>Hello, {this.props.stuname}</h1>
    //                 <p>You have secured:{this.props.marks}%</p>
    //                 <hr/> 
    //             </>
    //         )
    //     }
    // }
    
//PROPS in functional Component
    function Student(props){
        const {stuname} = props;
        return (
            <>
                <h1>Hello, {stuname}</h1>
                <p>You have scored {props.marks} %</p>
                <hr/>
            </>
        )
    }
export default Student;