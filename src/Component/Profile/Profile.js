import React from 'react'
import PHeader from './PHeader'
import ProfileCard from './ProfileCard'
import "../Styles/Profile.css"
import Pcontent from './Pcontent'
import { Provider } from 'react-redux'
import { store } from '../Store/store'
import { useContext } from "react";
import MyContext from "../context";

const Profile = () => {

    const context = useContext(MyContext)
    let {acct} = context

    return (
        <div className='page-wrp'>
            <h1> Profile </h1>   
        <Provider store={store} >
            <PHeader username=""/>
            <div className="card-wrp">
                <ProfileCard username={acct.userName}/>
            </div>
            <div className='pcont-wrp'>
                <Pcontent/>
            </div>
        </Provider>
        </div>
    )
}

export default Profile
