import React from 'react'

// Import Material-UI components
import SearchIcon from '@material-ui/icons/Search'
import LanguageIcon from '@material-ui/icons/Language'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Menu from '@material-ui/icons/Menu'
import { Avatar } from '@material-ui/core'

import './Header.css'

function Header() {
    return (
        <header>
            <div className='header'>
                <div className="header_left">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_Bélo.svg/1024px-Airbnb_Logo_Bélo.svg.png" alt="logo" />
                </div>

                <div className="header_center">
                    <input type="text" name="" id="" />
                    <SearchIcon />
                </div>

                <div className="header_right">
                    <nav className="header_nav">
                        <div className="main_nav">
                            <div className="host_menu header_hover">
                                <p>Become a host</p>
                            </div>
                            <div className="language_currency header_hover">
                                <LanguageIcon />
                                <ExpandMoreIcon />
                            </div>
                        </div>
                        <div className="burger_menu">
                            <Menu />
                            <Avatar className="avatar_icon" />
                        </div>

                    </nav>

                </div>
            </div>
        </header>
    )
}

export default Header
