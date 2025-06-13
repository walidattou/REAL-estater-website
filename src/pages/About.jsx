"use client"

import { Link } from "react-router-dom"
import "../css/About.css"; 




import thum1 from '../assets/images/thum1.jpg';
import thum2 from '../assets/images/thum2.jpg';
import thum3 from '../assets/images/thum3.jpg';
import thum4 from '../assets/images/thum4.jpg';
import thum5 from '../assets/images/thum5.jpg';





// Import icons (replace with your preferred icon library)
const CheckIcon = () => <span className="icon">✓</span>
const QuoteIcon = () => <span className="icon">"</span>

function About() {
  // Company statistics
  const stats = [
    { value: "15+", label: "Years of Experience" },
    { value: "$2B+", label: "in Property Sales" },
    { value: "500+", label: "Luxury Properties Sold" },
    { value: "98%", label: "Client Satisfaction" },
  ]

  // Team members
  const teamMembers = [
    {
      name: "Jonathan Reynolds",
      role: "Founder & CEO",
      image: "/placeholder.svg?height=400&width=400",
      bio: "With over 20 years in luxury real estate, Jonathan founded LUXESTATE with a vision to redefine the high-end property experience.",
    },
    {
      name: "Alexandra Chen",
      role: "Chief Operating Officer",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Alexandra brings her extensive background in property development and operations to ensure seamless experiences for our clients.",
    },
    {
      name: "Marcus Williams",
      role: "Head of Acquisitions",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Marcus has an unparalleled eye for identifying exceptional properties and negotiating the best possible terms for our clients.",
    },
    {
      name: "Sophia Rodriguez",
      role: "Client Relations Director",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Sophia ensures that every client receives personalized attention and service that exceeds their expectations.",
    },
  ]

  // Testimonials
  const testimonials = [
    {
      quote:
        "LUXESTATE found us our dream home when no other agency could. Their attention to detail and understanding of our needs was exceptional.",
      author: "James & Emma Thompson",
      location: "Beverly Hills",
    },
    {
      quote:
        "Selling our family estate was an emotional process, but the team at LUXESTATE handled everything with professionalism and care.",
      author: "Robert Chen",
      location: "Malibu",
    },
    {
      quote:
        "Their market knowledge and negotiation skills are unmatched. We secured our property below asking price in a competitive market.",
      author: "Sarah Johnson",
      location: "Hollywood Hills",
    },
  ]

  return (
    <div className="about-page">
      {/* Hero Section */}
  
      <section
                        className="about-hero"
                        style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${thum3})`,
                    
              }}
              >
        <div className="hero-content">
          <h1>About LUXESTATE</h1>
          <p>Redefining luxury real estate since 2008</p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="story-section">
        <div className="about-container">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
                Founded in 2008, LUXESTATE was born from a passion for exceptional properties and a desire to create a
                more personalized approach to luxury real estate. What began as a boutique agency with a handful of
                exclusive listings has grown into one of the most respected names in high-end property.
              </p>
              <p>
                Our journey has been defined by our unwavering commitment to quality, discretion, and personalized
                service. We understand that luxury real estate is not just about properties—it's about lifestyles,
                aspirations, and legacies.
              </p>
              <p>
                Today, LUXESTATE represents some of the most extraordinary properties across Beverly Hills, Malibu, Bel
                Air, and beyond. Our select team of experts brings decades of combined experience and a genuine passion
                for connecting exceptional people with exceptional homes.
              </p>
            </div>
            <div className="story-image">
              <img src={thum2} alt="LUXESTATE Office" />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="stats-section">
        <div className="about-container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="mission-section">
        <div className="about-container">
          <div className="mission-content">
            <div className="mission-image">
              <img src={thum3} alt="Luxury Property" />
            </div>
            <div className="mission-text">
              <h2>Our Mission & Values</h2>
              <p>
                At LUXESTATE, our mission is to provide an unparalleled real estate experience through expertise,
                integrity, and personalized service. We believe that finding or selling a luxury property should be as
                exceptional as the properties themselves.
              </p>

              <h3>Our Core Values</h3>
              <ul className="values-list">
                <li>
                  <CheckIcon /> <strong>Excellence</strong> - We maintain the highest standards in everything we do
                </li>
                <li>
                  <CheckIcon /> <strong>Integrity</strong> - We operate with complete transparency and honesty
                </li>
                <li>
                  <CheckIcon /> <strong>Discretion</strong> - We respect our clients' privacy and confidentiality
                </li>
                <li>
                  <CheckIcon /> <strong>Innovation</strong> - We continuously evolve our approach and embrace new
                  technologies
                </li>
                <li>
                  <CheckIcon /> <strong>Relationships</strong> - We build lasting connections based on trust and results
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="about-container">
          <h2>What Our Clients Say</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="quote-icon">
                  <QuoteIcon />
                </div>
                <p className="testimonial-quote">{testimonial.quote}</p>
                <div className="testimonial-author">
                  <p className="author-name">{testimonial.author}</p>
                  <p className="author-location">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="about-container">
          <div className="cta-content">
            <h2>Ready to Experience the LUXESTATE Difference?</h2>
            <p>Whether you're buying or selling a luxury property, our team is here to help</p>
            <div className="cta-buttons">
              <Link to="/properties" className="cta-button">
                View Our Properties
              </Link>
              <Link to="/contact" className="cta-button secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
