import React from "react";
import "../style/Home.css";
import Product from "../components/Product";
import cola from "../components/img/cola.jpg";
import ipad from "../components/img/ipad.png";
import animalfarm from "../components/img/animalfarm.png";
import xbox from "../components/img/xbox.png";
import Headers from "../components/Header";


export default function Home() {

    const imagess = ["https://picsum.photos/200", "https://picsum.photos/200/300"];

    return (
        <>

            <Headers />

            {/* <h1>Home page</h1> */}
            <div className="home">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" className="home__image" alt="banner" />
            </div>

            <div className="home__row">
                <Product id="idproduct1" title="ThisIsTheProducTitle" price={50} rating={5} image={cola} />

                <Product id="idproduct2" title="ThisProducTitle" price={40} rating={5} image={imagess[0]} />
            </div>

            <div className="home__row">
                <Product id="idproduct3" title="IsTheProducTitle" price={40} rating={5} image={ipad} />
                <Product id="idproduct4" title="ThisProducTitle" price={30} rating={5} image={imagess[1]} />
                <Product id="idproduct5" title="ThisTitle" price={20} rating={5} image={animalfarm} />
            </div>

            <div className="home__row">
                <Product id="idproduct6" title="TheProducTitle" price={40} rating={5} image={xbox} />
                <Product id="idproduct7" title="ThisTitle" price={30} rating={5} image={animalfarm} />
                <Product id="idproduct8" title="ThisProducTitle" price={20} rating={5} image={imagess[0]} />
            </div>
        </>

    )
}