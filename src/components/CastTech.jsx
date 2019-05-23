import React from 'react';
import axios from 'axios'

class CastTech extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            crew: []
        }
    }
    componentDidMount() {
        axios.get(`https://api.themoviedb.org/3/movie/ ${this.props.idFilm} /credits?api_key=a8a3380a564299f359c18e52aaa5bc79`).then(res => {
            this.setState({
                crew: res.data.crew
            });
        });
    }
    render() {
        return (
            this.state.crew.filter((member, i) => {
                return member.job.includes('Producer');
            }).map((casting) => {
                return <p className="listingCast"><span>{casting.job} :</span> {casting.name}</p>
            }
            )
        )
    }

}
export default CastTech;
