import React, { useState, useRef, useEffect } from "react";
import "../css/Home.css"; // We'll create this next
import { Link } from "react-router-dom";



import house1 from '../assets/images/house1.jpeg';
import house2 from '../assets/images/072-Villa-Augusta-2.jpg';
import house3 from '../assets/images/house3.jpeg';


import thum1 from '../assets/images/thum1.jpg';
import thum2 from '../assets/images/thum2.jpg';
import thum3 from '../assets/images/thum3.jpg';
import thum4 from '../assets/images/thum4.jpg';
import thum5 from '../assets/images/thum5.jpg';
import thum6 from '../assets/images/thum6.jpeg';
import thum7 from '../assets/images/thum7.jpg';

import render3D from '../assets/images/3dhouse.png';







function Home() {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const videoSliderRef = useRef(null);

  // Sample property listings data
  const featuredProperties = [
    {
        id: 1,
        title: "Luxury Villa with Ocean View",
        price: "$2,450,000",
        beds: 5,
        baths: 4,
        sqft: 4200,
        image: house1
    },
    {
      id: 2,
      title: "Modern Downtown Penthouse",
      price: "$1,850,000",
      beds: 3,
      baths: 3.5,
      sqft: 2800,
      image: house2
    },
    {
      id: 3,
      title: "Countryside Estate",
      price: "$3,200,000",
      beds: 6,
      baths: 5,
      sqft: 5500,
      image: house3
    }
  ];

  // Sample video data
  const propertyVideos = [
    {
      id: 1,
      title: "Beachfront Property Tour",
      thumbnail: thum1
    },
    {
      id: 2,
      title: "Luxury Home Walkthrough",
      thumbnail: thum2
    },
    {
      id: 3,
      title: "Penthouse Virtual Tour",
      thumbnail: thum3
    },
    {
      id: 4,
      title: "Estate Grounds Overview",
      thumbnail: thum4
    },
    {
      id: 5,
      title: "Modern Architecture Showcase",
      thumbnail: thum5
    }
  ];

  // Handle video slider navigation
  const scrollVideos = (direction) => {
    if (videoSliderRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      videoSliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      
      // Update active index (approximate)
      if (direction === 'left' && activeVideoIndex > 0) {
        setActiveVideoIndex(activeVideoIndex - 1);
      } else if (direction === 'right' && activeVideoIndex < propertyVideos.length - 1) {
        setActiveVideoIndex(activeVideoIndex + 1);
      }
    }
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section
            className="hero-section"
            style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${thum4})`,
        
            }}
        >
        <div className="hero-content">
          <h1>Find Your Dream Luxury Home</h1>
          <p>Discover exclusive properties in prime locations</p>
          <Link to="/properties" className="cta-button">Get Started</Link>
        </div>
      </section>

      {/* About Section with 3D House */}
      <section className="about-section">
        <div className="about-image">
          <div className="house-3d-container">
            {/* This would be replaced with an actual 3D model or image */}
            <img 
              src={render3D} 
              alt="Luxury Home 3D Rendering" 
              className="house-image"
            />
          </div>
        </div>
        <div className="about-content">
          <h2>Luxury Living Redefined</h2>
          <p>
            At LUXESTATE, we understand that a home is more than just a place to live—it's where memories are made and dreams come to life. Our curated selection of premium properties represents the pinnacle of architectural excellence and sophisticated design.
          </p>
          <p>
            With over 15 years of experience in the luxury real estate market, our team of dedicated professionals is committed to providing personalized service that exceeds expectations. Whether you're searching for a beachfront villa, a penthouse with panoramic city views, or a secluded countryside estate, we have the expertise to help you find your perfect home.
          </p>
          <Link to="/about" className="text-link">Learn more about our approach <span className="arrow">→</span></Link>
        </div>
      </section>

      {/* Video Slider Section */}
      <section className="video-section">
        <div className="section-header">
          <h2>Virtual Property Tours</h2>
          <p>Experience our exclusive listings from the comfort of your home</p>
        </div>
        
        <div className="video-slider-container">
          <button 
            className="slider-arrow left-arrow" 
            onClick={() => scrollVideos('left')}
            aria-label="Previous videos"
          >
            &#8592;
          </button>
          
          <div className="video-slider" ref={videoSliderRef}>
            {propertyVideos.map((video, index) => (
              <div 
                key={video.id} 
                className={`video-card ${index === activeVideoIndex ? 'active' : ''}`}
              >
                <div className="video-thumbnail">
                  <img src={video.thumbnail || "/placeholder.svg"} alt={video.title} />
                  <div className="play-button">▶</div>
                </div>
                <h3>{video.title}</h3>
              </div>
            ))}
          </div>
          
          <button 
            className="slider-arrow right-arrow" 
            onClick={() => scrollVideos('right')}
            aria-label="Next videos"
          >
            &#8594;
          </button>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="properties-section">
        <div className="section-header">
          <h2>Featured Properties</h2>
          <p>Explore our handpicked selection of premium real estate</p>
        </div>
        
        <div className="properties-grid">
          {featuredProperties.map(property => (
            <div key={property.id} className="property-card">
              <div className="property-image">
                <img src={property.image || "/placeholder.svg"} alt={property.title} />
                <div className="property-price">{property.price}</div>
              </div>
              <div className="property-details">
                <h3>{property.title}</h3>
                <div className="property-specs">
                  <span>{property.beds} Beds</span>
                  <span>{property.baths} Baths</span>
                  <span>{property.sqft.toLocaleString()} Sq Ft</span>
                </div>
                <Link to={`/properties/${property.id}`} className="view-property-link">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="view-all-container">
          <Link to="/properties" className="view-all-link">
            View All Properties <span className="arrow">→</span>
          </Link>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Find Your Dream Home?</h2>
          <p>Let our experts guide you through the process</p>
          <div className="cta-buttons">
            <Link to="/contact" className="cta-button">Contact Us</Link>
            <Link to="/properties" className="cta-button secondary">Browse Properties</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
