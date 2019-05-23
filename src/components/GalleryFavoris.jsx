import React, { Component } from 'react';
import axios from "axios";
import Movie from "./Movie"

class GalleryFavoris extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }
  componentDidMount() {
    axios.get('http://localhost:5050/favorites/')
      .then((response) => {
        let movies = [];
        response.data.map((fav) => {
          const movieId = fav.movie_id;
          return (axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=a8a3380a564299f359c18e52aaa5bc79`)
            .then(response => {
              const movie = {
                id: response.data.id,
                poster_path: response.data.poster_path,
                genre_ids: response.data.genre_ids
              };
              movies.push(movie);
              this.setState({
                movies: movies
              });
            }))
        });
      });
  };
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row" >
          <h2 className="title-cat">My Favorites</h2>
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
      </div>
    )
  }
};
export default GalleryFavoris;