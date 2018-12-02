import React, { Component } from 'react';

class Artists extends Component {
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
    fetch('http://localhost:4000/getartists') // Your URL here example http://localhost:4000/artists
      .then(response => response.json())
      .then(parsedJSON => console.log('data:', parsedJSON))
      .catch(err => console.log('Error', err));
  };

  render() {
    return <main>
    <section>
    <h3>Welcome to the Artists Page</h3>
    </section>
</main>;
  }
}
export default Artists;