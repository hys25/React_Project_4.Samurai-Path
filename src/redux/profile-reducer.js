import {usersAPI, profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts : [
        {id: 1, message : 'It is my firt post?', likesCount: 12},
        {id: 2, message : 'Are you hungry?', likesCount: 13},
        {id: 3, message : 'I learn React', likesCount: 19},
        {id: 4, message : 'Sasha', likesCount: 0},
        {id: 5, message : 'Valera', likesCount: 1}
    ],
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case SET_STATUS: { 
            return {
                ...state,
                status: action.status
            };
        }
        case SET_USER_PROFILE: { 
            return {
                ...state,
                profile: action.profile
            };
        }
        default: 
            return state;
    }
};

export const addPostActionCreator = (newPostText) => {
    return {
        type: ADD_POST,
        newPostText
    };
};
export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE, profile
    };
};
export const setStatus = (status) => {
    return {
        type: SET_STATUS, status
    };
};
export const getUserProfile = (userId) => (dispatch) => { 
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data)) ;
    });
};// thunk
export const getStatus = (userId) => (dispatch) => { 
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data)) ;
    });
};// thunk
export const updateStatus = (status) => (dispatch) => { 
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0){
                dispatch(setStatus(response.data));
            }
    });
};// thunk


export default profileReducer;