import React from 'react';

const Header = (props) => {
  return (
    <header className="header row">
      <h1 className="col-md-4 justify-content-start">HI!</h1>
      <ul className="nav col-md-8 justify-content-end">
        <li className="nav-item">
          <a className="nav-link active" href="#">Active</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#">Disabled</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
