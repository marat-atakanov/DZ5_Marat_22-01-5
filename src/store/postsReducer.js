import axios from "axios";


const ADD_POSTS = "ADD_POSTS"

const initialState = {
    postsList: []
}

export const postsReducer = (state = initialState, action) => {
    if (action.type === ADD_POSTS) {
        return {postsList: action.payload}
    }
    return state;
}

const addPosts = payload => ({type: ADD_POSTS, payload})
export const fetchPosts = () => {
    return dispatch => {
        axios.get('https://jsonplaceholder.typicode.com/posts/')
            .then(
                resp => dispatch(
                    addPosts(resp.data)
                ))
    }

}