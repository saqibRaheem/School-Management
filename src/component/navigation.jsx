import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Nav() {
  return (
    <>
        <div className="container-fluid nav_bg flex   " >
        <div className="row  ">
          <div className="col-15 mx-auto">
            <nav className="navbar navbar-expand-lg fixed rounded-lg navbar-light text-zinc-100 bg-amber-700">
              <div className="container-fluid">
                <NavLink className="navbar-brand " to="/">
                 English Language Institute
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse "
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav  ml-auto mb-2 mb-lg-0 flex sm:justify-center space-x-8 text-zinc-100 ">
                    <li className="nav-item ">
                      <NavLink
                        activeClassName="menu_active"
                        exact
                        className="text-zinc-100 no-underline"
                        aria-current="page"
                        to="/Home"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu_active"
                        className=" text-zinc-100 no-underline "
                        to="/Faqs"
                      >
                        FAQS
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu_active"
                        className="text-zinc-100 no-underline"
                        to="/MissionStatement"
                      >
                        Mission Statement
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu_active"
                        className="text-zinc-100 no-underline"
                        to="/Activities"
                      >
                        Activities & Services
                      </NavLink>
                    </li>
                    <li className="nav-item ">
                      <NavLink
                        activeClassName="menu_active"
                        className="text-zinc-100 no-underline"
                        to="/Contact"
                      >
                       Contact Us
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}