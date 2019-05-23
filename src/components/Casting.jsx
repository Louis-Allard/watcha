import React from "react";
import axios from 'axios';
import MoviesPlayedIn from "./MoviesPlayedIn"
class Casting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movieList: []
        };
    };
    componentDidMount() {
        this.getMovielist()
    }
    getMovielist() {
        axios.get(`https://api.themoviedb.org/3/person/${this.props.match.params.castingNumber}/movie_credits?api_key=a8a3380a564299f359c18e52aaa5bc79`)
            .then(resp => {
                this.setState({
                    movieList: resp.data.cast
                });
            })
    };
    render() {
        return (
            <div className="container-fluid">
                <div className="row mt-5 ">
                    <div className="gallery-type">
                        {this.state.movieList.filter((movie) => {
                            return movie.original_title
                        }).map((role) => {
                            return <div>
                                <MoviesPlayedIn
                                    moviePlayed={role.original_title}
                                    idMovie={role.id}
                                    key={role.original_title}
                                />
                            </div>
                        })
                        }
                    </div>
                </div>
            </div>
        )
    };
};
export default Casting;