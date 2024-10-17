import React from 'react';
import profile from '../../screens/Styles/profile.module.css';
import { Link } from 'react-router-dom';

function ProfileSidebar() {
  return (
    <>
      <div className={profile.sidebar}>
          <ul className={profile.sidebarList}>
            <Link to="/profile" className={profile.link}>
              <li>Profile</li>
            </Link>
            <Link to="/profile/edit" className={profile.link}>
              <li>Edit Profile</li>
            </Link>
            <Link to="/profile/changepassword" className={profile.link}>
              <li>Change Password</li>
            </Link>
            <Link to="/profile/uploads" className={profile.link}>
              <li>My Uploads</li>
            </Link>
          </ul>
        </div>
    </>
  );
}

export default ProfileSidebar;
