import React, { Component } from 'react';
import Data from "./Data";
import Movie from "./Movie"

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      page: 1,
      lastCall: 0
    };
  };
  componentDidMount() {
    this.getData();
    window.addEventListener('scroll', this.handleScroll);
  };
  handleScroll = () => {
    this.upPageNumber();
  };
  getData() {
    if (this.props.match.params.id === '0') {
      const filteredData = Data.filter((gallery) => {
        if (gallery.type === this.props.match.params.galleryName) {
          return true;
        }
        return false;
      })
      const Theurl = filteredData[0].url
      fetch(Theurl + `${this.state.page}`)
        .then(response => response.json())
        .then(data => {
          let newList = [...this.state.movies, ...data.results];
          this.setState({
            movies: newList
          });
        });
    }
    else {
      fetch(`https://api.themoviedb.org/3/discover/movie?api_key=1092ee57947c8bdfc25a5a0641ecb8ec&with_genres= ${this.props.match.params.id}&page=${this.state.page}`)
        .then(response => response.json())
        .then(data => {
          let newList = [...this.state.movies, ...data.results];
          this.setState({
            movies: newList
          });
        });
    };
  };
  upPageNumber = () => {
    if (Date.now() - this.state.lastCall > 1000) {
      this.setState({
        page: this.state.page + 1,
        lastCall: Date.now()
      }, () => {
        this.getData();
      });
    }
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="row" onScroll={() => { this.upPageNumber() }}>
          <h2 className="title-cat">{this.props.match.params.galleryName}</h2>
          <div className="gallery-type">
            {this.state.movies.map((film, idx) => {
              return (
                <div className="m-1">
                  <Movie
                    key={idx}
                    cle={film.id}
                    image={"https://image.tmdb.org/t/p/w500" + film.poster_path}
                    genres={film.genre_ids}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    )
  }
};

export default Gallery;