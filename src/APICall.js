import React, { Component } from 'react';

class APICall extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    fetch('https://randomuser.me/api/?results=50') // Your URL here example) http://localhost:4000/artists
      .then(response => response.json())
      .then(parsedJSON =>
        console.log('data:', parsedJSON).catch(err => console.log('Error', err))
      );
  };

  render() {
    return <div />;
  }
}
export default APICall;
