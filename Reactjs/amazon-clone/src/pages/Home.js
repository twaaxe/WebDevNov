import React from "react";
import "../style/Home.css";
import Product from "../components/Product";
import Pexels from "../components/pexels.jpg";
import Amazon from "../components/Amazon.png";


export default function Home() {

    const imagess = "https://picsum.photos/200";

    return(
        <>
            {/* <h1>Home page</h1> */}
            <div className="home">
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" className="home__image" alt="banner"/>
            </div>

            <Product id="idproduct" title="ThisIsTheProducTitle" price={50} rating={5} image={imagess}  />
            
        </>

    )
}