import React, { Component } from 'react';
//import { BrowserRouter, Route } from 'react-router-dom';
import gal1 from '../img/Gallery/gal1.jpg';
import gal2 from '../img/Gallery/gal2.jpg';
import gal3 from '../img/Gallery/gal3.jpg';
import gal4 from '../img/Gallery/gal4.jpg';
import gal5 from '../img/Gallery/gal5.jpg';
import gal6 from '../img/Gallery/gal6.jpg';
import gal7 from '../img/Gallery/gal7.jpg';
import gal8 from '../img/Gallery/gal8.jpg';
import gal9 from '../img/Gallery/gal9.jpg';
//import gal10 from '../img/Gallery/gal10.jpg';
//import sample1 from '../img/Samples/sample1.jpg';
//import sample2 from '../img/Samples/sample2.jpg';

class Gallery extends Component {


  render() {
    return (

      <div class="container">
      <div class="row">
      <div class="gallery col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <h1 class="gallery-title">Gallery</h1>
      </div>
      
      {/*
      <div align="center">
          <button class="btn btn-default filter-button" data-filter="all">All</button>
          <button class="btn btn-default filter-button" data-filter="hdpe">HDPE Pipes</button>
          <button class="btn btn-default filter-button" data-filter="sprinkle">Sprinkle Pipes</button>
          <button class="btn btn-default filter-button" data-filter="spray">Spray Nozzle</button>
          <button class="btn btn-default filter-button" data-filter="irrigation">Irrigation Pipes</button>
      </div>
      <br/>*/}



          <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter hdpe">
              <img src={gal1} alt="" class="img-responsive"/>
          </div>

          <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 ">
              <img src={gal2} alt="" class="img-responsive"/>
          </div>

          <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 ">
              <img src={gal3} alt="" class="img-responsive"/>
          </div>

          <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 ">
              <img src={gal4} alt="" class="img-responsive"/>
          </div>

          <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 ">
              <img src={gal5} alt="" class="img-responsive"/>
          </div>

          <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter irrigation">
              <img src={gal6} alt="" class="img-responsive"/>
          </div>

          <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter spray">
              <img src={gal7} alt="" class="img-responsive"/>
          </div>

          <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter irrigation">
              <img src={gal8} alt="" class="img-responsive"/>
          </div>

          <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter irrigation">
              <img src={gal9} alt="" class="img-responsive"/>
          </div>

          {/* <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter hdpe">
              <img src={gal10} class="img-responsive"/>
          </div>

          <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter hdpe">
              <img src={sample1} class="img-responsive"/>
          </div>

          <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter hdpe">
              <img src={sample2} class="img-responsive"/>
          </div> */}

      </div>
  </div>

    );
  }
}

export default Gallery;
