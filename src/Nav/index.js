import React from 'react'
import './style.scss'
import { NavLink } from 'react-router-dom'

const activeStyle = {
  color: 'rgb(187, 46, 31)',
}

function Nav() {
  return (
    <nav className="Nav">
      <ul className="Nav__list">
        <li className="Nav__list-item">
          <NavLink className="Nav__list-item-link" exact to="/" activeStyle={activeStyle}>
            Top
          </NavLink>
        </li>
        <li className="Nav__list-item">
          <NavLink className="Nav__list-item-link" to="/new" activeStyle={activeStyle}>
            New
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
