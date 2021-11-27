import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { Link } from 'react-router-dom'
export default function Navbar(props) {


    return (
        <>
            <nav class={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">{props.title}</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0" >
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            {/* <li class="nav-item">
                                <Link class="nav-link" to="/About">About</Link>
                            </li> */}
                        </ul>
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggle}/>
                            <label class="form-check-label" style={{color:props.mode==='dark'?'white':'black'}} for="flexSwitchCheckDefault">{props.mode=='dark'?"Enable Light mode":"Enable dark mode"}</label>
                        </div>

                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}
Navbar.propTypes = {
    title: PropTypes.string
}