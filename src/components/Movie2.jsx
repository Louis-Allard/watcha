import React from "react";
import { Link } from "react-router-dom";

class Movie2 extends React.Component {
  render() {
    return (
      <div className="movie-card ">
        <div>{this.props.title}</div>
        <div>
          <Link to={`/fiche/${this.props.cle}`}><img src={this.props.image} alt="" className="img-card effect" /></Link>
        </div>
      </div>
    );
  }
}
export default Movie2;
