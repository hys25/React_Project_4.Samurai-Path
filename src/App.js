import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import {Route, BrowserRouter} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <Navbar/>
        <div className="app-wrapper-content">
			<Route path='/dialogs' 
				render={ () => <DialogsContainer /> } />
			<Route path='/profile' 
				render={ () => <Profile /> } />
			<Route path='/news' 
				render={ () => <News /> } />
			<Route path='/users' 
				render={ () => <UsersContainer /> } />
			<Route path='/settings' />
			
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
