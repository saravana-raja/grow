import { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Header from './Header.jsx'
import ImageCarousel from './ImageCarousel.jsx'
import MobileImageCarousel from './MobileImageCarousel.jsx'
import UpcomingEvents from './UpcomingEvents.jsx'
import OfficeBearers from './OfficeBearers.jsx'
import ContactInfo from './ContactInfo.jsx'
import Footer from './Footer.jsx'
import './App.css'

function App() {
    return (
        <div className="app">
            <Header />
            <div className="desktop-carousel">
                <ImageCarousel />
            </div>
            <div className="mobile-carousel">
                <MobileImageCarousel />
            </div>
            <main className="main-content">
                <UpcomingEvents />
                <OfficeBearers />
                <ContactInfo />
            </main>
            <Footer />
        </div>
    )
}

export default App
