

const initialStateLik = {
    likes: 300
}

const likesReducer = (state = initialStateLik, action) => {
    switch (action.ltype) {
        case "increment":
            
            return 
    
        default:
            return state
    }
}
export default likesReducer