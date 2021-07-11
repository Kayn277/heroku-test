import React from 'react';
import './Nav-bar.css';
import { NavLink } from 'react-router-dom';


function Navbar() {
  return (
    <div className="Nav-bar">
      <div className="navigation-panel">
        <ul>
            <li><NavLink activeClassName="active" className="inactive" to="/main">Главная</NavLink></li>
            <li><NavLink activeClassName="active" className="inactive" to="/catalog">Каталог</NavLink></li>
            <li><NavLink activeClassName="active" className="inactive" to="/manga">Манга</NavLink></li>
            <li><NavLink activeClassName="active" className="inactive" to="/adfgad">Новости</NavLink></li>
            <li className="auth-button"><NavLink activeClassName="active" className="inactive" to="/auth">Войти</NavLink></li>

        </ul>
    </div>
    </div>
  );
}



export default Navbar;
