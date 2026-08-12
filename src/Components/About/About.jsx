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
            <div className="about-subtitle">Web Developer & CS Student</div>
          </div>
          
          <div className="about-content">
            <div className="profile-card">
              <img src={ProfileImg} alt="Sebin's profile" className="profile-image" />
            </div>
            
            <div className="about-details">
              <div className="about-bio">
                <p>Hi there! I am <span className="highlight">Vishnu</span>, a developer that specializes in creating visually appealing websites and not just functional ones. I craft user interfaces with tools such as JavaScript and Bootstrap among many others.</p>
                <p>As a Software Development undergraduate, I incorporate expansion into my skills to ensure I remain aligned with changing technology for better project outcomes..</p>
              </div>
              
              <div className="skills-container">
                <h2 className="skills-title">Technical Skills</h2>
                <div className="skills-grid">
                  <div className="skill-card">
                    <div className="skill-name">HTML & CSS</div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: '75%'}}></div>
                    </div>
                  </div>
                  <div className="skill-card">
                    <div className="skill-name">React</div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: '70%'}}></div>
                    </div>
                  </div>
                  <div className="skill-card">
                    <div className="skill-name">JavaScript</div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: '40%'}}></div>
                    </div>
                  </div>
                  <div className="skill-card">
                    <div className="skill-name">Tailwind</div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: '50%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements section moved below skills and made full width */}
          <div className="about-achievements" style={{width: '100%', marginTop: '40px'}}>
            <div className="about-achievement">
              <h1>6</h1>
              <p>MONTHS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
              <h1>5+</h1>
              <p>Projects Completed</p>
            </div>
            <hr />
            <div className="about-achievement">
              <h1>8+</h1>
              <p>GPA IN EACH SEM</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;       