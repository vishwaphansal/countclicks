import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Clickcount</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Click</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Store Clicks</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}