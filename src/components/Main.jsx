import React from 'react';
import NavBar from './NavBar.jsx';
import '../style/app.scss'

const Main = (props) => {
  return (
    <div>
      <NavBar/>
      <div className="row">
        <div className="columns medium-6 large-4 small-centered">
          {props.children}
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default Main;
