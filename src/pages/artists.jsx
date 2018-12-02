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
      .then(parsedJSON =>
        parsedJSON.results.map(artist => ({
          Fname: artist.Fname,
          Lname: artist.Lname
        }))
      )
      .then(artists =>
        this.setState({
          data: artists,
          isLoading: false
        })
      )
      .catch(err => console.log('Error', err));
  };

  render() {
    const { isLoading, data } = this.state;
    return (
      <main>
        <section>
          <h3>Welcome to the Artists Page</h3>
          {data.map(artist => (
            <li>
              {artist.Fname} {artist.Lname}
            </li>
          ))}
        </section>
      </main>
    );
  }
}
export default Artists;
