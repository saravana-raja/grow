import { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './App.css'

function Header() {
  return (
    <header className="header" >
      <div className="header-content">
        <h1>The Gem Grove</h1>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#residents">Residents</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

function ImageCarousel() {
  const images = [
    "/grow.webp",
    "/gembanner2.webp",
    "/republic2.webp",
    "/mc2.webp",
    "/omr3602.webp",
    "/ucmas2.webp",

  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="carousel-slide">
            <img src={image} alt={`Apartment View ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

function MobileImageCarousel() {
  const images = [
    "/growmobilemobile.webp",
    "/gembanner2.webp",
    "/republic1.webp",
    "/mc1.webp",
    "/omr3601.webp",
    "/kids1.webp",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
  };

  return (
    <div className="mobile-carousel-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="carousel-slide">
            <img src={image} alt={`Apartment View ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

function UpcomingEvents() {
  return (
    <div className="section events-section gradient-bg">
      <h2>📅 Upcoming Events</h2>
      <ul>
        <li>
          <h3>🎯 Carrom Tournament</h3>
          <p>📆 Date: March 2, 2025</p>
          <p>⏰ Time: 2 PM TO 5 PM</p>
        </li>
        <li>
          <h3>♟️ Chess Tournament</h3>
          <p>📆 Date: March 2, 2025</p>
          <p>⏰ Time: 5 PM TO 8 PM</p>
        </li>

      </ul>
    </div>
  )
}

function OfficeBearers() {
  return (
    <div className="section office-section gradient-bg">
      <h2>👥 Office Bearers</h2>
      <div className="member">
        <h3>👑 President</h3>
        <p>Mr. Nandakumar</p>
        <p className="member-details">Term - 2024 - 2026</p>
      </div>
      <div className="member">
        <h3>📝 Secretary</h3>
        <p>Mr. Naveen Araveti</p>
        <p className="member-details">Continuing Term</p>
      </div>
      <div className="member">
        <h3>💰 Treasurer</h3>
        <p>Mr. Muralidharan</p>
        <p className="member-details">Continuing Term</p>
      </div>
      <div className="member">
        <h3>👔 Vice President</h3>
        <p>Mr. Surajit Pathak</p>
        <p className="member-details">Continuing Term</p>
      </div>
      <div className="member">
        <h3>🤝 Joint Secretary</h3>
        <p>Ms. Manju Patel</p>
        <p className="member-details">Continuing Term</p>
      </div>
      <div className="member">
        <h3>📊 Joint Treasurer</h3>
        <p>Mr. Sreeram Krishnan</p>
        <p className="member-details">Continuing Term</p>
      </div>
      <div className="member">
        <h3>🛠️ MC Members</h3>
        <div className="committee-grid">
          <p>Dinesh Kumar – BB11</p>
          <p>Aravind Kumar – TG57</p>
          <p>Sabari Vijay – LJ28</p>
          <p>Karthick – LJ25</p>
          <p>Blooshee – BB44</p>
          <p>Thangadurai – SB103</p>
          <p>Vijay Chandra – GL125</p>
          <p>Srinivasan Palani – GL145</p>
          <p>Selvakumar S – TG15</p>
          <p>Rajesh Kumar – SB52</p>
        </div>
      </div>
      <div className="member">
        <h3>📋 Internal Audit Committee</h3>
        <p>Sundaresan – SB66</p>
        <p>Kuppuraj – BB31</p>
      </div>
      <div className="member">
        <h3>📢 P R O</h3>
        <p>Mr. Kumar – GL14</p>
      </div>
    </div>
  );
}


function ContactInfo() {
  return (
    <div className="section contact-section gradient-bg">
      <h2>☎️ Emergency Contacts</h2>
      <div className="contact-group">
        <h3>🚨 Emergency Services</h3>
        <p>📞 +91 7397389783</p>
      </div>
      <div className="contact-group">
        <h3>🔧 Maintenance</h3>
        <p>📞 +91 7397389783</p>
      </div>


    </div>
  )
}

import { FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer bg-gray-900 text-gray-300">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#rules">Community Rules</a></li>
            <li><a href="#newsletter">Updates</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3><FaMapMarkerAlt /> Location</h3>
          <p>The Gem Grove</p>
          <p>Rajiv Gandhi Salai,</p>
          <p>Padur, Tamil Nadu - 603103</p>
        </div>
        <div className="footer-section">
          <h3>Connect With Us</h3>
          <div className="social-links">
            <a href="#facebook" className="social-link">
              <FaFacebook size={20} /> Facebook
            </a>
            <a href="#instagram" className="social-link">
              <FaInstagram size={20} /> Instagram
            </a>
          </div>

        </div>

      </div>
      <div className="footer-bottom">
        <p>© 2025 The Gem Grove. All rights reserved.</p>
      </div>
    </footer>
  )
}



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