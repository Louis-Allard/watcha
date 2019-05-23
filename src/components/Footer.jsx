import React, {Fragment}  from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

class Footer extends React.Component {
  render() {
    return (
      <Fragment>
          <NavLink activeClassName="active" className="littleInfo" exact to='/PageFooter'>
          Made by a WildCodeSchool Team !
          </NavLink><br />
          <NavLink activeClassName="active" className="littleInfo" exact to='/LegalMentions'>
          Legal Mentions
          </NavLink>
      </Fragment>
    );
  }
}

export default Footer;