import React, { useState } from 'react';
import '../styles/sidebar.css';

function Sidebar({ onSectionChange }) {
  const sections = [
    { name: 'Account', icon: '👤' },
    { name: 'Notifications', icon: '🔔' },
    { name: 'Accessibility', icon: '♿' },
    { name: 'Themes', icon: '🎨' },
    { name: 'Audio & Video', icon: '🎥' },
    { name: 'Messages & media', icon: '💬' },
    { name: 'Language & Region', icon: '🌐' },
    { name: 'Privacy & Safety', icon: '🔒' },
    { name: 'Advanced', icon: '⚙️' },
  ];

  const [activeSection, setActiveSection] = useState('Account');

  const handleSectionClick = (section) => {
    setActiveSection(section);
    onSectionChange(section);
  };

  return (
    <div className="sidebar">
      <ul>
        {sections.map((section) => (
          <li
            key={section.name}
            onClick={() => handleSectionClick(section.name)}
            className={activeSection === section.name ? 'active' : ''}
          >
            <span className="icon">{section.icon}</span> {section.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;