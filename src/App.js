import React from 'react';
import './App.css';
import ShowComponent from './Components/ShowComponent';
import  Button  from 'react-bootstrap/Button';


class App extends React.Component{
  constructor(props){
    super(props)

    this.state ={
    curr: "true", 
    
  };
}
 
  profileControll=()=>{
    if(this.state.curr=="true"){
      this.setState({curr:"false"});
      
    }
    else
      this.setState({curr:"true"})    
   }
  
  render(){
    if(this.state.curr=="true"){
    return(
            <div className="App">
            <Button style={{width:300,height:50}} onClick={this.profileControll} >{this.state.curr}</Button>
            <ShowComponent/>
          </div>
    )}
    else{
     return(
       <div className="App" >
        <Button style={{width:300,height:50}} onClick={this.profileControll} >{this.state.curr}</Button>
       </div>
     );}
  }
} 

export default App;
