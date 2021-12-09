import React from 'react'
import PHeader from './PHeader'
import ProfileCard from './ProfileCard'
import "../Styles/Profile.css"

const Profile = () => {
    return (
        <div>
            <h1> Profile </h1>     
            <PHeader username=""/>
            <ProfileCard/>
        </div>
    )
}

export default Profile
