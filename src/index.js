import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Route } from 'react-router-dom';
//import Header from './components/layout/header';
//import Menu from './components/layout/menu';
import Home from './pages/home';
import BookOnline from './pages/BookOnline';
import Artists from './pages/artists';
import Footer from './components/layout/footer';
import Gallery from './pages/gallery';
import Contact from './pages/contact';
import NewNavigation from './components/layout/new-navigation';

ReactDOM.render(
  <BrowserRouter>
    <React.Fragment>
      <Route path="/" component={NewNavigation} />
      <Route path="/" exact component={Home} />
      <Route path="/book-online" component={BookOnline} />
      <Route path="/artists" component={Artists} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/contact" component={Contact} />
      <Route path="/" component={Footer} />
    </React.Fragment>
  </BrowserRouter>,
  document.getElementById('root')
);
// registerServiceWorker();
