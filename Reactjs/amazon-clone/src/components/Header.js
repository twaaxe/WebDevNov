import React from "react";
import '../style/Header.css'
import { Link } from 'react-router-dom'

import SearchIcon from '@mui/icons-material/Search';
export default function Headers() {

    return (
        <>
            <nav className="header">

                {/* logo on the left */}
                <Link to="checkout">
                    <img className="header_logo" src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png" />
                </Link>

                {/* search box */}
                <input className="header__searchInput" type="text" />
              {/*  <SearchIcon className="header__searchIcon" /> 
                 using it provoque an error*/}


                {/* 3links */}
                {/* basket icon with number */}
                <div className="header__Nav">
                    
                    <Link  className="header__link">
                        <div className="header__option">
                            <span>Hello Axel</span>
                            <span>Sing in</span>
                        </div>
                    </Link>
                    {/* 1:23:13 hours o video */}

                    <Link>
                    <span>Sign in</span>
                    </Link>

                    <Link>
                    <span>Hello Axel</span>
                    </Link>
                
                </div>

            </nav>

        </>
    )

}