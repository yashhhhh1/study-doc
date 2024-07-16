/* eslint-disable no-unused-vars */
import about from "../../assets/navabr-assets/about.svg";
import about_fill from "../../assets/navabr-assets/about-fill.svg";
import Add_material from "../../assets/navabr-assets/add-material.svg";
import book from "../../assets/navabr-assets/book.svg";
import book_fill from "../../assets/navabr-assets/book-fill.svg";
import box_arrow_in_right from "../../assets/navabr-assets/box-arrow-in-right.svg";
import course from "../../assets/navabr-assets/course.svg";
import course_fill from "../../assets/navabr-assets/course-fill.svg";
import dpad from "../../assets/navabr-assets/dpad.svg";
import dpad_fill from "../../assets/navabr-assets/dpad-fill.svg";
import gridbox from "../../assets/navabr-assets/gridbox.svg";
import home from "../../assets/navabr-assets/home.svg";
import lightbulb_fill from "../../assets/navabr-assets/lightbulb-fill.svg";
import lightbulb from "../../assets/navabr-assets/lightbulb.svg";
import megaphone from "../../assets/navabr-assets/megaphone.svg";
import search from "../../assets/navabr-assets/search.svg";
import "./Headers.css";

import React, { useContext, useEffect } from "react";
import { UserContext } from "../../App";
import { NavLink, useNavigate } from "react-router-dom";

export const Headers = () => {
  const { state, dispatch } = useContext(UserContext);

  const navigate = useNavigate();


  return (
    <>
      <nav className="navbar align-items-center border-bottom">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <NavLink
              to={"/"}
              className="navbar-brand m-0 textColor fw-bold brand"
            >
              Studoc
            </NavLink>
            <div
              id="verticalbar"
              className="mx-xxl-2 mx-1 d-none d-lg-inline-block"
            ></div>

            <NavLink
              className="nav-link textColor fw-lighter lh-sm brandSubHeading d-none d-lg-inline-block"
              to={"/"}
            >
              Share
              <br />
              <span className="fw-medium brandSubHeading d-none d-lg-inline-block">
                Material
              </span>
            </NavLink>
            <div className="position-relative ms-4 d-none d-xl-inline-block">
              <input
                className="searchInput bg-body-tertiary iconCursor ps-md-5 p-1 p-md-2"
                type="search"
                placeholder="Search Material"
                aria-label="Search"
              />
              <img
                className="position-absolute searchImg iconCursor"
                src={search}
                alt="search"
                loading="lazy"
              />
            </div>
          </div>
          <div className="d-flex align-items-center">
            {state.user ? (
              <>
                <div className="d-none d-lg-block">
                  <ul className="d-flex m-0 list-unstyled">
                    <li className="nav-item iconChange me-4 pt-2">
                      <NavLink
                        to="/course"
                        className="nav-link text-center p-0"
                      >
                        <div className="d-flex align-items-center overflow-hidden changeWidth mx-auto">
                          <img
                            className="iconHeight mx-2"
                            src={course}
                            alt="course"
                            loading="lazy"
                          />
                          <img
                            className="iconHeight mx-2"
                            src={course_fill}
                            alt="course_fill"
                            loading="lazy"
                          />
                        </div>
                        <div className="smallFont textColor">Course</div>
                      </NavLink>
                    </li>

                    <li className="nav-item iconChange me-4 pt-2">
                      <NavLink
                        to="/subject"
                        className="nav-link text-center p-0"
                      >
                        <div className="d-flex align-items-center overflow-hidden changeWidth mx-auto">
                          <img
                            className="one iconHeight mx-2"
                            src={book}
                            alt="book"
                            loading="lazy"
                          />
                          <img
                            className="two iconHeight mx-2"
                            src={book_fill}
                            alt="book-half"
                            loading="lazy"
                          />
                        </div>
                        <div className="smallFont textColor">Subject</div>
                      </NavLink>
                    </li>

                    <li className="nav-item iconChange me-4 pt-2">
                      <NavLink
                        to="/upload"
                        className="nav-link text-center p-0"
                      >
                        <div className="d-flex align-items-center overflow-hidden changeWidth mx-auto">
                          <img
                            className="iconHeight mx-2"
                            src={dpad}
                            alt="dpad"
                            loading="lazy"
                          />
                          <img
                            className="iconHeight mx-2"
                            src={dpad_fill}
                            alt="dpad"
                            loading="lazy"
                          />
                        </div>
                        <div className="smallFont textColor">Add</div>
                      </NavLink>
                    </li>

                    <li className="nav-item iconChange me-4 pt-2">
                      <NavLink
                        to="/upload"
                        className="nav-link text-center p-0"
                      >
                        <div className="d-flex align-items-center overflow-hidden changeWidth mx-auto">
                          <img
                            className="iconHeight mx-2"
                            src={lightbulb}
                            alt="lightbulb"
                            loading="lazy"
                          />
                          <img
                            className="iconHeight mx-2"
                            src={lightbulb_fill}
                            alt="lightbulb"
                            loading="lazy"
                          />
                        </div>
                        <div className="smallFont textColor">Idea</div>
                      </NavLink>
                    </li>
                    <li className="nav-item iconChange me-3 pt-2">
                      <NavLink
                        to="/upload"
                        className="nav-link text-center p-0"
                      >
                        <div className="d-flex align-items-center overflow-hidden changeWidth mx-auto">
                          <img
                            className="iconHeight mx-2"
                            src={about}
                            alt="briefcase"
                            loading="lazy"
                          />
                          <img
                            className="iconHeight mx-2"
                            src={about_fill}
                            alt="briefcase"
                            loading="lazy"
                          />
                        </div>
                        <div className="smallFont textColor">About</div>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <></>
            )}
            {state.user ? (
              <>
                <button
                  onClick={() => {
                    navigate("/userdetails");
                  }}
                  className="signupBtn btn btn-sm m-sm-2 m-1 text-white a rounded-5 px-3 d-none d-lg-inline-block"
                >
                  <img
                    className="me-2 mb-1"
                    src={megaphone}
                    alt="userDetail"
                    loading="lazy"
                  />
                  UserDetail
                </button>
                <button
                  onClick={() => {
                    navigate("/logout");
                  }}
                  className="loginBtn btn btn-sm m-sm-2 m-1 bg-primary text-white rounded-5 px-sm-3 px-2"
                >
                  LogOut
                  <img
                    className="d-none d-lg-inline-block"
                    src={box_arrow_in_right}
                    alt="box-arrow"
                    loading="lazy"
                  />
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => {
                    navigate("/signup");
                  }}
                  id="signupBtn"
                  className="signupBtn btn btn-sm m-sm-2 m-1 text-white a rounded-5 px-3 d-none d-lg-inline-block"
                >
                  Sign up
                </button>
                <button
                  onClick={() => {
                    navigate("/login");
                  }}
                  id="loginBtn"
                  className="loginBtn btn btn-sm m-sm-2 m-1 bg-primary text-white rounded-5 px-sm-3 px-2"
                >
                  Log in
                </button>
              </>
            )}
            {state.user ? (
              <>
                <div className="btn-group dropstart">
                  <button
                    type="button"
                    className="btn"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      className="ms-2"
                      src={gridbox}
                      alt="grid-3x3"
                      loading="lazy"
                    />
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a
                        className="dropdown-item"
                        onClick={() => {
                          navigate("/");
                        }}
                      >
                        <img
                          className="iconHeight mb-1"
                          src={home}
                          alt="home"
                          loading="lazy"
                        />
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        onClick={() => {
                          navigate("/course");
                        }}
                      >
                        <img
                          className="iconHeight mb-1"
                          src={course}
                          alt="course"
                          loading="lazy"
                        />
                        Course
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <img
                          className="iconHeight mb-1"
                          src={book}
                          alt="book"
                          loading="lazy"
                        />
                        Subject
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <img
                          className="iconHeight mb-1"
                          src={Add_material}
                          alt="Add_material"
                          loading="lazy"
                        />
                        Add Material
                      </a>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

