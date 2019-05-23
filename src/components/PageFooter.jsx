import React, { Component } from 'react';
import louis from './img/louis.jpeg';
import damien from './img/damien.jpeg';
import marylin from './img/marylin.jpeg';
import benoit from './img/benoit.jpeg';
import johan from './img/johan.jpeg';
import antoine from './img/antoine.jpg';
import vignetteFooter from './img/vignetteFooter.png';
import WildCodeSchool from './img/wcs.png';

class PageFooter extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="movie-description justify-content-center">
                    <h1 className="titre-equipe">Team II</h1>
                    <div className="movie-pic row">
                        <div className="movie-fav col-lg-4 col-md-12">
                            <img className="movie-poster" src={vignetteFooter} alt="POSTER" />
                        </div>
                        <div className="youtube col-lg-6 col-md-12">
                            <iframe width="560" height="315" title="bruce" src="https://www.youtube.com/embed/mQJI3rpre10" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <div className="movie-synopsis mb-5">
                                <h2>Synopsis</h2>
                                <p>The Watcha Team is here to serv you as you want. We can make awesome websites like this one, just ask and we 'll do it for you. Meet us asap if you have a prject , we have the skills !</p>
                            </div>
                        </div>
                    </div>
                    <div className="movie-infos container ">

                        <div className="movie-casting">
                            <div className="ml-5">
                                <h4 className="">Casting</h4></div>
                            <div className="team-project-2">
                                <a href="https://www.linkedin.com/in/antoine-jacqmin-72bb14182/" target="_blank" rel="noopener noreferrer">
                                    <img className="equipe" src={antoine} alt="img" />
                                </a>
                                <a href="https://www.linkedin.com/in/benoit-lebacq/" target="_blank" rel="noopener noreferrer">
                                    <img className="equipe" src={benoit} alt="img" />
                                </a>
                                <a href="https://www.linkedin.com/in/damien-ruckebusch-bb955815/" target="_blank" rel="noopener noreferrer">
                                    <img className="equipe" src={damien} alt="img" />
                                </a>
                                <a href="https://www.linkedin.com/in/johan-ceugnart/" target="_blank" rel="noopener noreferrer">
                                    <img className="equipe" src={johan} alt="img" />
                                </a>
                                <a href="https://www.linkedin.com/in/louis-allard-devweb/" target="_blank" rel="noopener noreferrer">
                                    <img className="equipe" src={louis} alt="img" />
                                </a>
                                <a href="https://www.linkedin.com/in/marylinealves/" target="_blank" rel="noopener noreferrer">
                                    <img className="equipe" src={marylin} alt="img" />
                                </a>
                            </div>
                        </div>
                        <div className="img-down">
                            <a href="https://wildcodeschool.fr/" target="_blank" rel="noopener noreferrer"><img src={WildCodeSchool} alt="WildCodeSchool" /></a>
                        </div>
                    </div>
                </div>
                <p className="littleInfo">This product uses the TMDb API but is not endorsed or certified by TMDb."</p>
            </div>
        )
    }
};
export default PageFooter;