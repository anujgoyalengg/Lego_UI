import React from 'react'
import profile from '../../screens/Styles/profile.module.css'
import ProfileSidebar from '../../components/Compo/ProfileSidebar'

function EditProfile() {
  return (
    <>
      <div>
        <div className={profile.container}>
          <div className={profile.leftContainer}>
            <ProfileSidebar />
          </div>
          <div className={profile.rightContainer}>
            <div className={profile.profileInfo}>
                <div className={profile.userimage}>
                  <img className={profile.userimg} src="data:image/jpeg;base64,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" alt="" />
                </div>
                <h1 className={profile.heading} >User Profile</h1>
              <div>
              </div>
            </div>
            <div className={profile.userDetailsMain}>
              <div className={profile.userDetailsLeft}>
                <div className={profile.profileInformation}>
                  <h2><b>User Name: </b></h2> 
                </div>
                <div className={profile.profileInformation}>
                  <h2><b>Email: </b></h2> 
                </div>
                <div className={profile.profileInformation}>
                  <h2><b>Profile Image: </b></h2> 
                </div>
              </div>
              <div className={profile.userDetailsRight}>
                <div className={profile.profileInformation}>
                  <span><input className={profile.input} type="text" placeholder='Hanshul Kumawat'  name="" id="" /></span>
                </div>
                <div className={profile.profileInformation}>
                  <span><input className={profile.input} type="text" placeholder='hanshulkumawat22@gmail.com' name="" id="" /></span>
                </div>
                <div className={profile.profileInformation}>
                  <span><input type="file" name="" id="" /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditProfile
