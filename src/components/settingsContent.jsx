import React from 'react';
import '../styles/settingsContent.css';
import ProfileSection from './ProfileSection';
import PasswordChange from './PasswordChangeForm ';
function SettingsContent({ section }) {
  
  const renderContent = () => {
    if (section === 'Account') {
      return (
        <>
           
          <ProfileSection />
        

          <PasswordChange />


          <div className="setting-item">
            <span>Two-Factor Authentication</span>
            <button className="setup-button">Set Up</button>
          </div>
          
          <div className="setting-item">
            <span>Language</span>
            <button className="set-button">Set</button>
          </div>
          <div className="setting-item">
            <span>Time Zone</span>
            <button className="set-button">Set</button>
          </div>
          <div className="sign-out-section">
            <h3>Sign out from all the Devices Logged In</h3>
            <p>Lost your device? Left yourself logged in on a public computer? Need a way to sign out everywhere except your current browser? This is for you</p>
            <button className="sign-out-button">Sign out all other sessions</button>
          </div>

          <div className="settings-box">
            <h3>Deactivate account</h3>
            <p>If you no longer need your account on the Your Company workspace, you can deactivate your account. Any other Slack Workspaces you belong to will not be affected.</p>
            <button className="deactivate-button">Deactivate your account</button>
          </div>
        </>
      );
    }
    return <p>Select a section to view settings</p>;
  };

  return (
    <div className="settings-content">
       {renderContent()}
    </div>
  );
}

export default SettingsContent;