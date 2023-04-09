import React from 'react'
import Faq from '../components/Home/Faq/Faq'
import Feature from '../components/Home/Feature/Feature'
import Footer from '../components/Home/Footer'
import GetInTouch from '../components/Home/GetInTouch'
import Navbar from '../components/Home/Header/Navbar'
import Hero from '../components/Home/Hero'
import Pricing from '../components/Home/Pricing/Pricing'
import Reason from '../components/Home/Reason'
import Review from "../components/Home/Review/Review";

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Feature />
            <Pricing />
            <Review/>
            <Faq />
            <Reason />
            <GetInTouch />
            <Footer />
        </>
    )
}

export default Home