import {combineReducers} from "redux"
import followersReducer from "./FollowReduc"
import friends from "./FriendsReducer"
import likes from "./LikesReduc"
import post from "./PostReducer"

 const reducers = combineReducers ({
    followers: followersReducer,
    friends: friends,
    likes: likes,
    post: post,
})


export default reducers





