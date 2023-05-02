import React from "react";
import { Link } from 'react-router-dom'
// import SearchIcon from '@mui/icons-material/Search';
import '../style/Header.css'
import AmazonLogo from "./img/Amazon.png"
import { useStateValue } from "../StateProvider";

export default function Headers() {

    const [{ basket }, dispatch] = useStateValue();
    console.log(basket)


    return (

        <>
            <nav className="header">

                <Link to="/checkout">
                    <img src={AmazonLogo} alt="Logo" className="header_logo" />
                </Link>

                <input className="header__searchInput" type="text" />
                {/* <SearchIcon className="header__searchIcon" /> THROW ERROR*/}


                {/* 3links */}
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span>Hello Axel</span>
                        <span>Sign in</span>
                    </div>
                </Link>
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span>Return</span>
                        <span>Order</span>
                    </div>
                </Link>


                <Link to="./" className="header__link">
                    <div className="header__option">
                        <span>Your</span>
                        <span>Prime</span>
                    </div>
                </Link>


                <Link to="./checkout" className="header__link">
                    <div className="header__optionBasket">
                        {/* <ShoppingBasketIcon /> */}
                        {/* n° of itm in basket */}
                        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </nav>

        </>
    )

}