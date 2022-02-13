

const initialStatePost = [{
    post: "",
    id: new Date().getTime(),
    timestamp: new Date().getTime(),
    
}]

const postReducer = (state = initialStatePost, action) => {
    switch (action.type) {
        case "add":
            
            return (
               [ ...state, {
                   post: state.post.concat(action.post),
                   id: new Date().getTime(),
                    timestamp: new Date().getTime(),
               }])
    
        default:
           return [...state]
    }
}
 export default postReducer