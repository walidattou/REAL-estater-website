"use client"

import { useState } from "react"
import "../css/Properties.css";
import thum4 from '../assets/images/thum4.jpg';
// Import icons (replace with your preferred icon library)
const PhoneIcon = () => <span className="icon">📞</span>
const EmailIcon = () => <span className="icon">✉️</span>
const LocationIcon = () => <span className="icon">📍</span>
const ClockIcon = () => <span className="icon">🕒</span>
const FacebookIcon = () => <span className="social-icon">f</span>
const InstagramIcon = () => <span className="social-icon">i</span>
const LinkedInIcon = () => <span className="social-icon">l</span>
const TwitterIcon = () => <span className="social-icon">t</span>

function Contact() {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    propertyInterest: "buying",
    budget: "",
  })

  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState(false)

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(false)
    setSubmitSuccess(false)

    // Simulate form submission with timeout
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        propertyInterest: "buying",
        budget: "",
      })
    }, 1500)
  }

  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Principal Broker",
      phone: "(123) 456-7890",
      email: "sarah@luxestate.com",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Luxury Property Specialist",
      phone: "(123) 456-7891",
      email: "michael@luxestate.com",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Client Relations Manager",
      phone: "(123) 456-7892",
      email: "emily@luxestate.com",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <div className="contact-page">
      {/* Hero Section */}
  
      <section
                  className="contact-hero"
                  style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${thum4})`,
              
                  }}
      >
        <div className="hero-content">
          <h1>Contact Us</h1>
          <p>We're here to help you find your perfect luxury property</p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="contact-info-section">
        <div className="contact-container">
          <div className="contact-cards">
            <div className="contact-card">
              <div className="card-icon">
                <PhoneIcon />
              </div>
              <h3>Call Us</h3>
              <p>Speak directly with our team</p>
              <a href="tel:+1234567890" className="contact-link">
                (123) 456-7890
              </a>
            </div>

            <div className="contact-card">
              <div className="card-icon">
                <EmailIcon />
              </div>
              <h3>Email Us</h3>
              <p>Get in touch via email</p>
              <a href="mailto:info@luxestate.com" className="contact-link">
                info@luxestate.com
              </a>
            </div>

            <div className="contact-card">
              <div className="card-icon">
                <LocationIcon />
              </div>
              <h3>Visit Us</h3>
              <p>Come to our office</p>
              <address className="contact-address">123 Luxury Lane, Beverly Hills, CA 90210</address>
            </div>

            <div className="contact-card">
              <div className="card-icon">
                <ClockIcon />
              </div>
              <h3>Office Hours</h3>
              <p>When we're available</p>
              <div className="hours">
                <p>Monday - Friday: 9AM - 6PM</p>
                <p>Saturday: 10AM - 4PM</p>
                <p>Sunday: By Appointment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section with Form and Map */}
      <section className="main-contact-section">
        <div className="contact-container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-container">
              <h2>Send Us a Message</h2>
              <p className="form-intro">
                Whether you're looking to buy, sell, or just have questions about luxury real estate, we're here to help.
                Fill out the form below and one of our experts will get back to you shortly.
              </p>

              {submitSuccess && (
                <div className="success-message">
                  <p>Thank you for contacting us! We'll be in touch soon.</p>
                </div>
              )}

              {submitError && (
                <div className="error-message">
                  <p>There was an error submitting your message. Please try again.</p>
                </div>
              )}

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name*</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address*</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Your email"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject*</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Subject of your message"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="propertyInterest">I'm interested in</label>
                    <select
                      id="propertyInterest"
                      name="propertyInterest"
                      value={formData.propertyInterest}
                      onChange={handleChange}
                    >
                      <option value="buying">Buying a property</option>
                      <option value="selling">Selling a property</option>
                      <option value="renting">Renting a property</option>
                      <option value="investing">Real estate investment</option>
                      <option value="other">Other inquiry</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="budget">Budget Range</label>
                    <select id="budget" name="budget" value={formData.budget} onChange={handleChange}>
                      <option value="">Select a range</option>
                      <option value="under-1m">Under $1 million</option>
                      <option value="1m-3m">$1 million - $3 million</option>
                      <option value="3m-5m">$3 million - $5 million</option>
                      <option value="5m-10m">$5 million - $10 million</option>
                      <option value="over-10m">Over $10 million</option>
                    </select>
                  </div>
                </div>

                <div className="form-group full-width">
                  <label htmlFor="message">Message*</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your real estate needs"
                    rows="5"
                  ></textarea>
                </div>

                <button type="submit" className="submit-button" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            {/* Map and Office Info */}
            <div className="map-container">
              <div className="map-placeholder">
                <h3>Our Location</h3>
                <p>Map would be integrated here</p>
              </div>

              <div className="office-info">
                <h3>LUXESTATE Headquarters</h3>
                <address>
                  <p>123 Luxury Lane</p>
                  <p>Beverly Hills, CA 90210</p>
                </address>
                <p className="directions-link">
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                    Get Directions
                  </a>
                </p>

                <div className="social-links">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <FacebookIcon />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <InstagramIcon />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <LinkedInIcon />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <TwitterIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="contact-container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>What areas do you serve?</h3>
              <p>
                We specialize in luxury properties throughout Beverly Hills, Malibu, Bel Air, Hollywood Hills, and other
                premium locations in Southern California.
              </p>
            </div>
            <div className="faq-item">
              <h3>How quickly can I expect a response?</h3>
              <p>
                Our team typically responds to all inquiries within 24 hours during business days. For urgent matters,
                please call our office directly.
              </p>
            </div>
            <div className="faq-item">
              <h3>Do you offer virtual property tours?</h3>
              <p>
                Yes, we provide high-quality virtual tours for all our listings. We can also arrange personalized virtual
                showings upon request.
              </p>
            </div>
            <div className="faq-item">
              <h3>What makes LUXESTATE different?</h3>
              <p>
                Our exclusive network, personalized approach, and deep market knowledge allow us to offer unparalleled
                service in the luxury real estate market.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
