import React from "react";
import "../style/Home.css";
import Product from "../components/Product";
import Pexels from "../components/img/pexels.jpg";
import Amazon from "../components/img/Amazon.png";
import ipad from "../components/img/ipad.png";
import animalfarm from "../components/img/animalfarm.png";
import xbox from "../components/img/xbox.png";


export default function Home() {

    const imagess = ["https://picsum.photos/200", "https://picsum.photos/200/300"];

    return (
        <>
            {/* <h1>Home page</h1> */}
            <div className="home">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" className="home__image" alt="banner" />
            </div>

            <div className="home__row">
                {/* <Product id="idproduct" title="ThisIsTheProducTitle" price={50} rating={5} image={require(imagess[1])} /> */}
                <Product id="idproduct" title="ThisIsTheProducTitle" price={50} rating={5} image={Pexels} />

                <Product id="idproduct" title="ThisProducTitle" price={40} rating={5} image={imagess[0]} />
            </div>

            <div className="home__row">
                <Product id="idproduct" title="IsTheProducTitle" price={40} rating={5} image={ipad} />
                <Product id="idproduct" title="ThisProducTitle" price={30} rating={5} image={imagess[1]} />
                <Product id="idproduct" title="ThisTitle" price={20} rating={5} image={animalfarm} />
            </div>

            <div className="home__row">
                <Product id="idproduct" title="TheProducTitle" price={40} rating={5} image={xbox} />
                <Product id="idproduct" title="ThisTitle" price={30} rating={5} image={animalfarm} />
                <Product id="idproduct" title="ThisProducTitle" price={20} rating={5} image={imagess[0]} />
            </div>
        </>

    )
}