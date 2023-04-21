import React from "react";
import '../style/Header.css'
import { Link } from 'react-router-dom'

/*
import SearchIcon from '@material-ui/icons/Search';
 PROVOQUE BUG WITH MATERIAL UI
 */
// import SearchIcon from '@mui/icons-material/Search';


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
                {/* <SearchIcon className="header_searchIcon" /> */}


                {/* 3links */}
                {/* basket icon with number */}

            </nav>

        </>
    )

}