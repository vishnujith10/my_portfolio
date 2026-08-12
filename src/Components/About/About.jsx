import React from 'react';
import './About.css';
import '../shared/Background.css';
import ProfileImg from '../../assets/profiile-.jpg';

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about_container">
        <section id='about' className='about-container'>
          <div className="about-header">
            <h1 className="about-title">About Me</h1>
            <div className="about-subtitle">React Native & Full-Stack Developer</div>
          </div>
          
          <div className="about-content">
            <div className="profile-card">
              <img src={ProfileImg} alt="Vishnujith's profile" className="profile-image" />
            </div>
            
            <div className="about-details">
              <div className="about-bio">
                <p>Hi there! I am <span className="highlight">Vishnu</span>, a React Native and full-stack developer who builds products end-to-end — from database schema to shipped UI. I recently built <span className="highlight">Kalry</span>, an AI-integrated fitness app, and <span className="highlight">BeGreen</span>, a live D2C e-commerce platform for a microgreens business.</p>
                <p>As a postgraduate in Computer Applications, I stay closely aligned with modern tooling — React Native, Next.js, Supabase, and AI integration are at the core of how I build today.</p>
              </div>
              
              <div className="skills-container">
                <h2 className="skills-title">Technical Skills</h2>
                <div className="skills-grid">
                  <div className="skill-card">
                    <div className="skill-name">React Native</div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  <div className="skill-card">
                    <div className="skill-name">Next.js / TypeScript</div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: '80%'}}></div>
                    </div>
                  </div>
                  <div className="skill-card">
                    <div className="skill-name">Supabase</div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: '75%'}}></div>
                    </div>
                  </div>
                  <div className="skill-card">
                    <div className="skill-name">REST APIs</div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: '75%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="about-achievements" style={{width: '100%', marginTop: '40px'}}>
            <div className="about-achievement">
              <h1>2</h1>
              <p>Live Products Shipped</p>
            </div>
            <hr />
            <div className="about-achievement">
              <h1>5+</h1>
              <p>Projects Completed</p>
            </div>
            <hr />
            <div className="about-achievement">
              <h1>2026</h1>
              <p>MCA Graduate</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;