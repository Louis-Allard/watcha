import React, { Component } from 'react';
import Movie2 from "./Movie2";
import { NavLink } from 'react-router-dom';
import $ from "jquery";
import className from 'classnames'

class Categorie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      page: 1,      
    };
    this.scroll = this.scroll.bind(this)
  }  
  scroll(direction){
    let far = $( `.scroll${this.props.scroll}` ).width()/2*direction;
    let pos = $(`.scroll${this.props.scroll}`).scrollLeft() + far;
    $(`.scroll${this.props.scroll}`).animate( { scrollLeft: pos }, 1000)
        this.setState({
      page: this.state.page + 1,
    }, () => {
      this.getMovie();
    });
  };
  componentDidMount() {
    this.getMovie();
  };
  getMovie() {
    const baseUrl = this.props.url;
    fetch(baseUrl + this.state.page)
      .then(response => response.json())
      .then(data => {
        let newList = [...this.state.movies, ...data.results];
        this.setState({
          movies: newList
        });
      });
  };
  horizontalScroll(event) {    
    if (event.target.scrollWidth - event.target.scrollLeft < event.target.offsetWidth + 200 && !this.fetching) {        
        this.setState({
            page: this.state.page + 1,
        }, () => {
            this.getMovie();
        });
    }
}
  render() {
    return (      
      <div className="container-fluid ">
        <h2 className="categoriesName ml-3"><NavLink className="Categoname" style={{ textDecoration: 'none', outline: 'none' }} exact to={`/gallery/${this.props.type}/${this.props.id}`}>{this.props.type}</NavLink></h2>
        <div className="mt-5 row">
          <div className={ className(`scroll${this.props.scroll} col-12 containing` )} onScroll={event=>this.horizontalScroll(event)}>
            {this.state.movies.map((film, idx) => {
              return (
                <Movie2
                  key={idx}
                  cle={film.id}
                  image={"https://image.tmdb.org/t/p/w500" + film.poster_path}
                />
              );
            })}
          </div>
          <button className="prev" onClick={this.scroll.bind(null, -1)}>&#10094;</button>
          <button className="next" onClick={this.scroll.bind(null, 1)}>&#10095;</button>
        </div>
      </div>
      
    )
  }
};

export default Categorie;
