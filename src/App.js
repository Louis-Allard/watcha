import React, { Component, Fragment } from 'react';
import './App.css';
import './header.css';
import { Dropdown, DropdownItem, DropdownToggle, DropdownMenu, InputGroup, InputGroupAddon, Input, Collapse, NavbarToggler, Navbar } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom";
import Routing from "./components/Routing";
import Footer from './components/Footer';
import ScrollToTop from "./components/ScrollTop"

class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      search: "",
      isOpen: false
    };
    this.onChange = this.onChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  onChange(e) {
    this.setState({
      search: e.target.value,
    });
  }
  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  handleToggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {   
    return (
      <Router>
        <ScrollToTop>
        <div className="App">
          <Fragment>
            <div className="menu">
            <Navbar color="black" light expand="md">
              
                <ul>
                  <li><NavLink activeClassName="active" style={{ textDecoration: 'none', outline: 'none' }} exact to="/">
                    <img className="logo" src="https://image.noelshack.com/fichiers/2019/15/5/1555076151-screenshot-from-2019-04-12-11-21-07-convertimage-1.png" alt="" />
                  </NavLink></li>
                </ul>
              <NavbarToggler color="light" onClick={this.handleToggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <div className="link-nav">
                <ul className="navbar-nav mx-auto leftList">
                  <li><NavLink activeClassName="active" className="textdeco" exact to="/gallery/Adventure/12">Adventure</NavLink></li>
                  <li><NavLink activeClassName="active" className="textdeco" exact to="/gallery/Science Fiction/878">Sc. Fiction</NavLink></li>
                  <li><NavLink activeClassName="active" className="textdeco" exact to="/gallery/Action/28">Action</NavLink></li>
                  <li><NavLink activeClassName="active" className="textdeco" exact to="/gallery/Crimes/80">Crimes</NavLink></li>
                  <li><NavLink activeClassName="active" className="textdeco" exact to="/gallery/Western/37">Westerns</NavLink></li>
                  <li><NavLink activeClassName="active" className="textdeco" exact to="/gallery/Drama/18">Drama</NavLink></li>
                  <li><NavLink activeClassName="active" className="textdeco" exact to="/gallery/Comedy/35">Comedy</NavLink></li>
                </ul>
                <ul className="navbar-nav mx-auto rightList">
                  <li><NavLink activeClassName="active" className="textdeco" exact to="/gallery/Thriller/53">Thriller</NavLink></li>
                  <li><NavLink activeClassName="active" className="textdeco" exact to="/gallery/Horror/27">Horror</NavLink></li>
                  <li><NavLink activeClassName="active" className="textdeco" exact to="/gallery/Animation/16">Animation</NavLink></li>
                  <li><NavLink activeClassName="active" className="textdeco" exact to="/gallery/Documentary/99">Documentary</NavLink></li>
                  <li><NavLink activeClassName="active" className="textdeco" exact to="/gallery/War/10752">War</NavLink></li>
                  <li><NavLink activeClassName="active" className="textdeco" exact to="/gallery/History/36">History</NavLink></li>
                  <li><NavLink activeClassName="active" className="textdeco" exact to="/gallery/Romance/10749">Romance</NavLink></li>
                  <li><NavLink activeClassName="active" className="textdeco" exact to="/gallery/Music/10402">Music</NavLink></li>
                </ul>
                </div>
              </Collapse>
                <ul>
                  <div className="nav-item">
                  
                    <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                      <DropdownToggle nav caret>
                      Listes
                    </DropdownToggle>
                      <DropdownMenu>
                      <DropdownItem>
                      <NavLink activeClassName="active" className="nav-link" exact to="/GalleryFavorite">
                      My favorites
                      </NavLink>
                    </DropdownItem>
                  </DropdownMenu>        
                    </Dropdown>
                  </div>
                </ul>
                </Navbar>
                <form className="recherche">
              <InputGroup>
                <InputGroupAddon addonType="prepend"></InputGroupAddon>
                <Input placeholder="Search a movie"
                  value={this.state.search}
                  onChange={this.onChange}
                />
                <Link to={`/searchgallery/${this.state.search}`}>
                  <button className="buto ml-2">Search</button></Link>
              </InputGroup>
            </form>
            </div>
          </Fragment>
          <Routing />
          <Footer className="footer" />
        </div>
        </ScrollToTop>
      </Router>
    
    );
  }
}
export default App;
