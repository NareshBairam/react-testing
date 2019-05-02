import React from 'react';
import logo from '../../assets/logo.png';

import './styles.scss';

const header = (props) => {
  return (
    <header className="headerComponent" data-test="headerComponent">
        <div className="logo">
            <img className="logoIMG" data-test="logoIMG" src={logo} alt="logo"/>
        </div>
    </header>
  );
}

export default header;
