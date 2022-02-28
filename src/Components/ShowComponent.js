import React from 'react';
import img from "../Ekran-Resmi-2019-11-18-18.08.13.png";
class ShowComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            fullName:"Alyeldeen",
            bio: "Be the best at what you do", 
            imgSrc: img,
            profession:"Engineer",
            date: new Date()
        }
    }
    render(){
        return(
            <div className="App">
            <h1>Hello {this.state.fullName}</h1>
            <h2>{this.state.bio}</h2>
            <img style={{width:300,height:300}}src={this.state.imgSrc}></img>
            <h2>{this.state.profession}</h2>
            <h2>Last Component was mounted in {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}
export default ShowComponent;