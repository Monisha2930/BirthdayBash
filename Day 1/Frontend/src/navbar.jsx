import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope, faCamera, faCog, faBirthdayCake } from '@fortawesome/free-solid-svg-icons';
import "./navbar.css";
function TabBarMenu() {
  const [activeIndex, setActiveIndex] = useState(2); // Default active index to "Messages"

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <ul className="navigation">
      <li className={activeIndex === 0 ? 'active' : ''} onClick={() => handleItemClick(0)}>
        <a href="#">
          <span className="icon">
            <FontAwesomeIcon icon={faHome} />
          </span>
          <span className="text">Home</span>
        </a>
      </li>
      <li className={activeIndex === 1 ? 'active' : ''} onClick={() => handleItemClick(1)}>
        <a href="#">
          <span className="icon">
            <FontAwesomeIcon icon={faUser} />
          </span>
          <span className="text">Profile</span>
        </a>
      </li>
      <li className={activeIndex === 4 ? 'active' : ''} onClick={() => handleItemClick(4)}>
        <a href="#">
          <span className="icon">
            <FontAwesomeIcon icon={faBirthdayCake} />
          </span>
          <span className="text">Request</span>
        </a>
      </li>
      <li className={activeIndex === 2 ? 'active' : ''} onClick={() => handleItemClick(2)}>
        <a href="#">
          <span className="icon">
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
          <span className="text">Messages</span>
        </a>
      </li>
      <li className={activeIndex === 3 ? 'active' : ''} onClick={() => handleItemClick(3)}>
        <a href="#">
          <span className="icon">
            <FontAwesomeIcon icon={faCamera} />
          </span>
          <span className="text">Photos</span>
        </a>
      </li>
      
      <div className="indicator"></div>
    </ul>
  );
}

export default TabBarMenu;