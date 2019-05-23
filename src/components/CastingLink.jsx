import React from 'react';
import { Link } from "react-router-dom"; 
class CastingLink extends React.Component {
    render() {
        return (
            <div className="actors-pics">              
                <Link to={`/casting/${this.props.id}`}> <img src={this.props.img} className="actor-pic" alt="img" /></Link>
                <br/>
                <span>{this.props.name}</span>
            </div>
        )
    };
};
export default CastingLink;