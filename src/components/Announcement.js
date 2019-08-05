import React from 'react';
import {Form} from 'react-bootstrap';
import {Component } from 'react';

function Textpage(props){
    return <h1>Textpage</h1>
}
function Imagepage(props){
    return <h1>Imagepage</h1>
}
export default class Announcement extends Component{
    constructor(props) {
        super(props);

    this.state ={
    Title:'test',
      //  description:'dfsdh',
      //  Image:'url'
    }}
    handleChange = (e) => {
       // console.log("inside");
      this.setState({
        Title:e.target.value,
        //description :e.target.value
      });
    }
    handleClick=(e) =>
    {
        e.preventDefault();
        console.log('Announcement submitted')
    }
    render(){
    return(
    <div className="container">
        <h4 className="center">Announcement</h4>   
        <form id="text">
            <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Control as="select" onChange={this.handleChange}>
            <option id="">Select</option>
            <option id="Textpage"  value="text">Text</option>
            <option id="Imagepage" value="image">Image</option>
            </Form.Control>
            </Form.Group>
        </form>
        <p>Selected item is  {this.state.Title}</p> 
        
        {/* <div>Image uRL:</div> */}
        <button onClick={this.handleClick}>Send Announcement</button>
        </div>
    );
    }
}