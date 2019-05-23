import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
class MoviePlayedIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [] ,
      count : 1
    };
  }
  componentDidMount() {
    this.getMovie();
  }  
  getMovie() { 
    if (this.state.count % 2 === 0) {
      axios.get(`https://api.themoviedb.org/3/movie/${this.props.idMovie}?api_key=ff37a1a34cd2beecb41b30cbfda1916b`)
        .then(response => {
          this.setState({
            movies: response.data
          });
        });
        this.setState({count : this.state.count+1})      
    }
    else {
      axios.get(`https://api.themoviedb.org/3/movie/${this.props.idMovie}?api_key=1092ee57947c8bdfc25a5a0641ecb8ec`)
        .then(response => {
          this.setState({
            movies: response.data
          });
          
        });
      this.setState({count : this.state.count+1})      
    }
  }
  render() {
    const isLoaded = () => this.state.movies.poster_path;
    return (
      <div className="movie-card">
        <div className=" border-0 m-1">
          {
            isLoaded()
              ? <Link to={`/fiche/${this.props.idMovie}`}><img src={`https://image.tmdb.org/t/p/w500${this.state.movies.poster_path}`} alt="" className="img-card" /></Link>
              : <img src={require("../loading.png")} className="img-card" alt=""></img>
          }
        </div>
      </div>
    );
  }
}
export default MoviePlayedIn;
