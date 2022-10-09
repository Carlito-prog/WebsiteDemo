import React from 'react'
import { store } from '../Store/store'
import { useSelector } from 'react-redux'



const ProfileCard = (props) => {

// dispatch of the state
const handleAdd = (e) => {
    store.dispatch({frtype: "increment"})

} 

//use for updated state in Comibined Reducers for updated state
const followers = useSelector(state => state.followers)
const likes = useSelector(state => state.likes)
const friends = useSelector(state => state.friends)



// useSelector((state) => {

//     return {
//        followers: state.followers,
//        friends: state.friends,
//        likes: state.likes
// }

// }
    
// )
 console.log(friends)
 console.log(followers)
 console.log(likes)


    return (
        <div className='profile-wrp'>
            <div className='img-wrp'>
                 <img src="" alt="" />
                <div className='add-wrp'>
                    <h3 onClick={handleAdd}> + </h3>
                </div>
            </div>
            <br/>
            <div className='profile-card-info'> 
                <h2> {props.username} </h2>
                <h3> Dummy message </h3>
             </div>
            <section className='stats-wrp'>
                <div className='followers-wrp'>
                    <h3> Followers </h3>
                    <h4> {followers.follows} </h4>
                </div>
                <br />
                <div className='likes-wrp'>
                    <h3> likes </h3>
                    <h4> {likes.likes} </h4>
                </div>
                <br />
                <div className='friends-wrp'>
                    <h3> Friends </h3>
                    <h4> {friends.friends} </h4>
                </div>

            </section>
        </div>
    )
}

export default ProfileCard
