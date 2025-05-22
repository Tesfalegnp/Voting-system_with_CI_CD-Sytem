import React from 'react';
import { Link } from 'react-router-dom';
import './welcome.css';

function Welcome() {
  return (
    <div className="welcome-container">
      {/* Hero Section */}
      <section className="hero">
        <h1>Your Vote Matters</h1>
        <p>Participate in secure, transparent digital voting from anywhere in the world. Make your voice heard in our democratic process.</p>
        <Link to="/vote" className="vote-cta">Cast Your Vote Now</Link>
      </section>

      {/* About Section */}
      <section className="section about">
        <div className="container">
          <h2 className="section-title">About Our Platform</h2>
          <div className="about-content">
            <div className="about-image">
              <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Voting Process" />
            </div>
            <div className="about-text">
              <h3>Secure Digital Voting</h3>
              <p>Our platform uses blockchain technology to ensure every vote is counted securely and anonymously. We've revolutionized the voting process to make it more accessible than ever before.</p>
              <p>With military-grade encryption and transparent audit trails, you can trust that your vote matters and will be counted accurately.</p>
              <div className="d-flex gap-3 justify-content-start mt-4">
                <Link to="/how-it-works" className="btn btn-outline-primary">How It Works</Link>
                <Link to="/faq" className="btn btn-outline-secondary">FAQ</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section features">
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Secure Voting</h3>
              <p>End-to-end encrypted voting process that ensures your ballot remains anonymous and tamper-proof.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Mobile Friendly</h3>
              <p>Vote from any device, anywhere in the world with our responsive platform.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Real-time Results</h3>
              <p>Watch live results as they come in, with full transparency in the counting process.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section contact">
        <div className="container">
          <h2 className="section-title">Contact Us</h2>
          <div className="contact-form">
            <form>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Your Name" />
              </div>
              <div className="form-group">
                <input type="email" className="form-control" placeholder="Your Email" />
              </div>
              <div className="form-group">
                <textarea className="form-control" rows="5" placeholder="Your Message"></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="section subscribe">
        <div className="container">
          <div className="subscribe-box">
            <h2 className="section-title">Stay Updated</h2>
            <p>Subscribe to our newsletter for election updates, voting reminders, and democratic news.</p>
            <div className="subscribe-input">
              <input type="email" placeholder="Your email address" />
              <button type="submit">Subscribe</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      
    </div>
  );
}

export default Welcome;