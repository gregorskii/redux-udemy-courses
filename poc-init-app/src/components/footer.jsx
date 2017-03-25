import React from 'react';

const Footer = (props) => {
  return (
    <footer className="footer row">
      <ul className="nav justify-content-end col-md-12">
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
    </footer>
  );
}

export default Footer;
