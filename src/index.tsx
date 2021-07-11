import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navbar from './nav-bar/Nav-bar';
import reportWebVitals from './reportWebVitals';
import CatalogContent from './catalog-content/Catalog-content'
import MangaContent from './manga-content/Manga-content'
import NotFound from './not-found/Not-found';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AuthContent from './auth-panel/Auth-content';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/main" component={App} />
        <Route path="/catalog" component={CatalogContent}/>
        <Route path="/manga" component={MangaContent}/>
        <Route path="/auth" component={AuthContent}/>
        <Route component={NotFound} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
