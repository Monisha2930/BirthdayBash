import React, { useState, useEffect } from 'react';
import './about.css'; // Import your CSS file for styling

const About = () => {
  // State to manage card loading status
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading delay with setTimeout
  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    // Clean up the timer when component unmounts
    return () => clearTimeout(timerId);
  }, []); // Empty dependency array ensures the effect runs only once after initial render

  return (
    <div className="about-container">
      {/* Company Section */}
      <div className={`about-company ${isLoading ? 'loading' : ''}`}>
        <div className="img">
          <img src="https://raw.githubusercontent.com/pico-india/main-django/main/static/about-team.jpg" alt="Company Team" />
        </div>
        <div className="company-info">
          <span><b>BIRTHDAY BASH</b><span className="our"></span></span>
          <p>
             Welcome to Birthday Bash, your ultimate destination for creating memorable birthday celebrations!
  At Birthday Bash, we specialize in crafting unique and unforgettable birthday experiences tailored to your preferences. Whether you're planning a milestone birthday party, a surprise celebration, or a themed extravaganza, our team of dedicated professionals is here to make your vision a reality.
  With our attention to detail, creativity, and commitment to excellence, we strive to exceed your expectations and deliver a birthday celebration that you and your loved ones will cherish for years to come. From venue selection and decoration to entertainment and catering, we handle every aspect of the planning process, allowing you to relax and enjoy the festivities stress-free.
  Discover the magic of Birthday Bash and let us transform your special day into an unforgettable experience filled with joy, laughter, and cherished memories. Contact us today to start planning the birthday celebration of your dreams!
          </p>
        </div>
      </div>

     
      {/* <div className={`about-team ${isLoading ? 'loading' : ''}`}>
        <span>OUR TEAM</span>
        <div className="team-members">
          <div className="team-member">
            <img src="team_member_1.jpg" alt="Team Member 1" />
            <p>John Doe</p>
          </div>
          <div className="team-member">
            <img src="team_member_2.jpg" alt="Team Member 2" />
            <p>Jane Smith</p>
          </div>
          <div className="team-member">
            <img src="team_member_3.jpg" alt="Team Member 3" />
            <p>Michael Johnson</p>
          </div>
          
        </div>
      </div> */}

      {/* <div className="team-cards">
        <div className="team-card">
        </div>
        <div className="team-card">
        </div>
        <div className="team-card">
         
        </div>
      </div>

      <div className="contact-section">
        <h3>Contact Us</h3>
        <p>If you're ready to start planning the birthday party of your dreams, don't hesitate to get in touch with us! Our friendly team is here to assist you every step of the way. Reach out to us today to discuss your ideas and let us turn your birthday dreams into reality.</p>
        <p>Email: info@birthdaybash.com</p>
        <p>Phone: 123-456-7890</p>
      </div> */}
    </div>
  );
};
export default About;