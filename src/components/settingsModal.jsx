import React, { useState } from 'react';
import Sidebar from './sidebar';
import SettingsContent from './settingsContent';
import '../styles/settingsModal.css';


function SettingsModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState('Account');

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <>
      <button className="settings-button" onClick={toggleModal}>
        <span role="img" aria-label="Settings">⚙️</span> Settings
      </button>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Settings</h2>
              <button className="close-button" onClick={toggleModal}>×</button>
            </div>
            <div className="modal-body">
              <Sidebar onSectionChange={setSelectedSection} />
              <SettingsContent section={selectedSection} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SettingsModal;
