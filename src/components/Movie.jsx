import React from "react";
import { Link } from "react-router-dom";

class Movie extends React.Component {
  render() {
    return (
      <div className="movie-card mb-3">
        <div>{this.props.title}</div>
        <div>
          <Link to={`/fiche/${this.props.cle}`}><img src={this.props.image} alt="" className="img-card" /></Link>
        </div>
      </div>
    );
  }
}
export default Movie;

