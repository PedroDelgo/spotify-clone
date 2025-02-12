import React from 'react'
import logoSpotify from '../assets/ico-spotify.png'
import './header.css'

const Header = () => {
  return (
    <div className='header'>

        <div className="headerLeft">
            <img id='logospotify' src= {logoSpotify} alt="Spotify Logo"/>
        </div>

        <div className="headerRight">
            <a className='headerLink' href="">
                <h1>Spotify</h1>
            </a>
        </div>

    </div>
  )
}
export default Header