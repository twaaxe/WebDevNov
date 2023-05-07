import React from 'react'
import { Container } from 'react-bootstrap'

import './styleProject/challenge.css'


import desktopImage from '../../challenge-main/images/image-intro-desktop.jpg'

export default function Challenge() {

    const myHtml = `<body >

    <nav>
        <ul>
            <li> <a href="">How we work</a></li>
            <li> <a href="">Blog</a></li>
            <li> <a href="">Account</a></li>
            <li id="viewplan"> <a href="">View plans</a></li>
        </ul>
    </nav>
    <br />

    <section class="purpleBckGnd container-fluid section1">
        <div class="row align-items-center">
            <div class="col-sm">
                <h1>Humanizing your insurance.</h1>
                <p>
                    Get your life insurance coverage easier and faster. We blend our expertise
                    and technology to help you find the plan that’s right for you. Ensure you
                    and your loved ones are protected.
                </p>
                <br />
                <a class="button">View plans</a>
            </div>
            <div class="col-sm">
                <img src={desktopImage} alt="Humanizing" id="humanizing" />

            </div>
        </div>
    </section>

    <section class="whiteBckGndn container-fluid section2">
        <div class="row">
            <h1>We’re different</h1>
            <div class="col-sm">
                <img src={desktopImage} alt="lightning image" />
                <h2>Snappy Process</h2>
                <p>Our application process can be completed in minutes, not hours. Don’t get
                    stuck filling in tedious forms.</p>
            </div>

            <div class="col-sm">
              <img src="images/icon-affordable-prices.svg" alt="affordable price" />
                <h2>Affordable Prices</h2>
                <p>We don’t want you worrying about high monthly costs. Our prices may be low,
                    but we still offer the best coverage possible.</p>
            </div>

            <div class="col-sm">
              <img src="images/icon-people-first.svg" alt="people first" />
                <h2>People First</h2>
                <p>Our plans aren’t full of conditions and clauses to prevent payouts. We make
                    sure you’re covered when you need it.</p>
            </div>
        </div>


        <div class="row  purpleBckGnd">

            <div class="col-sm-6 " >
                <h1>Find out more about how we work</h1>
            </div>
            <div class="col-sm-2 ">
                <a class="button">How we work</a>
            </div>

        </div>


        <br />
        <div class="navNetwork">
            <ul>
              <!--  {/* <li><a href=""><img src="images/icon-instagram.svg" alt="" /></a></li>
                <li><a href=""><img src="images/icon-pinterest.svg" alt="" /></a></li>
                <li><a href=""><img src="images/icon-twitter.svg" alt="" /></a></li>
                <li><a href=""><img src="images/icon-facebook.svg" alt="" /></a></li> */} -->
            </ul>


        </div>

    </section>

    <footer class="container" id="footerInsure">
        <div class="row">
            <div class="col-sm">
                <ul>
                    <li><a href="">OUR COMPANY</a></li><br />
                    <li><a href=""> How we work</a></li>
                    <li><a href="">Why Insure?</a></li>
                    <li><a href="">View plans</a></li>
                    <li><a href="">Reviews</a></li>
                </ul>

            </div>

            <div class="col-sm">
                <ul>
                    <li> <a href="">FAQ</a></li> <br />
                    <li><a href=""> Terms of use</a></li>
                    <li><a href="">Privacy policy</a></li>
                    <li><a href=""> Cookies</a></li>
                </ul>

            </div>

            <div class="col-sm">
                <ul>
                    <li><a href="">Contact</a></li><br />
                    <li><a href=""> Sales</a></li>
                    <li><a href="">Support</a></li>
                    <li><a href="">Live chat</a></li>
                </ul>


            </div>

            <div class="col-sm">
                <ul>
                    <li><a href="">Others</a></li><br />
                    <li><a href=""> Careers</a></li>
                    <li><a href="">Press</a></li>
                    <li><a href="">Licenses</a></li>
                </ul>
            </div>
        </div>
    </footer>



    <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="#">Twagirayezu Axel</a>.<br />
        09 September 2022
    </div>


</body>`

    return (

        <>
            <Container>
                <div dangerouslySetInnerHTML={{ __html: myHtml }} />;
            </Container>
        </>

    )

}
