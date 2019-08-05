import React, {Component } from 'react';
import Navbar from './components/Navbar'
import {BrowserRouter, Route } from 'react-router-dom'
import Notification from './components/Notification';
import Announcement from './components/Announcement';
import Addtalk from './components/Addtalk';
import Addlab from './components/Addlab';
import Addevent from './components/Addevent';
class App extends Component {
  render(){
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route path='/notification' component={Notification}/>
        <Route path='/announcement' component={Announcement}/>
        <Route path='/talk' component={Addtalk}/>
        <Route path='/lab' component={Addlab}/>
        <Route path='/event' component={Addevent}/>
      </div>
      </BrowserRouter>
    );
  }
}
export default App;
  
