import React from 'react';
import './About.css';
import '../shared/Background.css';
import ProfileImg from '../../assets/profile-vishnu.png';

const skillsData = [
  {
    name: 'React Native',
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="12" rx="9" ry="3.8" />
        <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </svg>
    )
  },
  {
    name: 'Mern Stack',
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="3" />
        <path d="M9 9l3 3-3 3" />
        <line x1="14" y1="15" x2="16" y2="15" />
      </svg>
    )
  },
  {
    name: 'React JS',
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(30 12 12)" />
        <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(90 12 12)" />
        <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(150 12 12)" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </svg>
    )
  },
  {
    name: 'Next.js / TypeScript',
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="4" />
        <path d="M7 10h5M9.5 10v7" />
        <path d="M14 17c1 1 2.5 1 3-0.5s-0.5-2-2-2.5-3-1-3-2.5 1.5-2 3-2c1 0 2 0.5 2.5 1" />
      </svg>
    )
  },
  {
    name: 'Supabase',
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    )
  },
  {
    name: 'REST APIs',
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    )
  }
];

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
                <p>Hi there! I am <span className="highlight">Vishnujith N B</span>, a React Native and full-stack developer who builds products end-to-end — from database schema to shipped UI. I recently built <span className="highlight">Calora</span>, an AI-integrated Calorie tracking app, and <span className="highlight">BeGreen</span>, a live D2C e-commerce platform for a microgreens business.</p>
                <p>As a postgraduate in Computer Applications, I stay closely aligned with modern tooling React Native, Next.js, Supabase, and AI integration are at the core of how I build today.</p>
              </div>
              
              <div className="skills-container">
                <h2 className="skills-title">Skills</h2>
                <div className="skills-grid">
                  {skillsData.map((skill, index) => (
                    <div key={index} className="skill-card">
                      <div className="skill-icon">{skill.icon}</div>
                      <div className="skill-name">{skill.name}</div>
                    </div>
                  ))}
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
              <h1>2027</h1>
              <p>MCA Graduate</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;