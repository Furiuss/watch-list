import React from 'react'
import {Link} from 'react-router-dom'

import './Header.css'

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">WatchList</Link>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/">
                <i class="fa-solid fa-plus"></i>
                WatchList
              </Link>
            </li>
            <li>
              <Link to="/watched">Watched</Link>
            </li>
            <li>
              <Link to="/add" className="btn">
                + Add
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
