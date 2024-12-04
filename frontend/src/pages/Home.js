import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <section className="hero">
        <h1>Welcome to Vogue Virtue</h1>
        <p>Discover personalized fashion recommendations tailored just for you.</p>
        <button>Get Started</button>
      </section>
      <section className="featured-outfits">
        <h2>Recommended Outfits for You</h2>
        <div className="outfit-list">
          {/* Add cards for outfits */}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
