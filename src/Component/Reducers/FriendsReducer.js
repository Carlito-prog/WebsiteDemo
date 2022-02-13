

const initialStateFri = {
    friends: 115
}

const friendsReducer = (state = initialStateFri, action) => {
    switch (action.frtype) {
        case "increment" :   
           return {
            friends: state.friends + 1
        }
    
        default:
            return state
    }
}
export default friendsReducer