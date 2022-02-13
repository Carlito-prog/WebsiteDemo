


const initialStateFol = {
    follows: 300
}


const followersReducer = (state = initialStateFol, action) => {
    switch (action.ftype) {
        case  "increment" :
            return {
                follows: state.follows + 1
            }
            default:
                return state
    }
}
export default followersReducer