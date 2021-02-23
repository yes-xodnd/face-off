import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// pages
import HomeContainer from './pages/Home/HomeContainer';
import PicEditContainer from './pages/PidEdit/PicEditContainer';
import PicResultContainer from './pages/PicResult/PicResultContainer';

// UI elements
import Header from './pages/UI/Header';
import MessageAlertContainer from './pages/UI/MessageAlertContainer';
import LoadingContainer from './pages/UI/LoadingContainer';
import MenubarContainer from './pages/UI/MenubarContainer';
import AddFriendsContainer from './pages/PicResult/component/AddFriendsContainer';
import AdminFriendContainer from './pages/UserSetting/AdminFriendContainer';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter basename='/face-off'>
        <MessageAlertContainer />
        <LoadingContainer />

        <div className="window">
          <Header />
          <MenubarContainer />

          <Switch>
            <Route exact path='/'>
              <HomeContainer />
            </Route>
            <Route path='/edit'>
              <PicEditContainer />
            </Route>
            <Route path='/result'>
              <PicResultContainer />
            </Route>
          </Switch>
        </div>

        <AdminFriendContainer />
        <AddFriendsContainer />
      </BrowserRouter>

    </div>
  );
}

export default App;
