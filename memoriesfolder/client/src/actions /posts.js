import * as api from '../api';

// Action creators

export const getPosts = () => async (dispatch) =>{
    try { 
        const { data } = await api.fetchPosts();

        dispatch({ type: 'FETCH_ALL', oayload: data });
    }
    catch ( error ){
        console.log(error.message)
    }

}