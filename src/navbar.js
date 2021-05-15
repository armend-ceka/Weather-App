import React from 'react'
import './navbar.css'
import logo from './Images/cloudy.svg'
import search from './Images/loupe.svg'

function Navbar(props){
    return(
        <div className="navbar-out">
            <div className="navbar-in">
                <div className="logo">
                    <img alt="" src={logo} height="40"/>
                    Weather App &nbsp;<i>{props.city}</i>
                </div>
                <div className="search">
                    <img alt="" src={search} height="20" className="srch"/>
                    <input type="text" className="textbox" onChange={props.onCityChange}  placeholder="Search  Location"/>
                    <input type="button" className="btn_search" value="Search" onClick={props.onSearch}/>
                </div>
            </div>
        </div>
    );
}

export default Navbar;