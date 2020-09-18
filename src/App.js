import React from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Post from './Component/Post/Post';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Comments from './Component/Comments/Comments';
import NoMatch from './Component/NoMatch/NoMatch';
import CommentsDetail from './Component/CommentsDetail/CommentsDetail';


function App() {
  return (
    
    <div>
      <Header></Header>
      <Router>
          <Switch>
            <Route path="/post">
              <Post/>
            </Route>
            <Route exact path="/">
              <Post/>
            </Route>
            <Route path="/comments">
              <Comments/>
            </Route>
            <Route path="commentsDetail/:commentsDetailId">
              <CommentsDetail/>
            </Route>
            <Route path="*">
              <NoMatch></NoMatch>
            </Route>          
          </Switch>
      </Router>
    </div>
  );
}

export default App;
