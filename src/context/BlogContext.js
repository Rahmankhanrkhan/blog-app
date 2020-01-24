import React, { useReducer } from 'react';
import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'delete_blogpost':
            return state.filter((blogPosts) => blogPosts.id !== action.payload);//id : Math.floor( Math.random()*99999 )
        case 'add_blogpost':
            return [...state, {
                id: new Date().getTime(),
                title: action.payload.title,
                content: action.payload.content
            }
            ];
        default:
            return state;
    }
}

const addBlogPost = (dispatch) => {
    return (title, content, callback) => {
        dispatch({ type: 'add_blogpost', payload: { title, content } });
        callback();
    }
};

const deleteBlogPost = (dispatch) => {
    return (id) => {
        dispatch({ type: 'delete_blogpost', payload: id })
    }
};


export const { Context, Provider } = createDataContext(
    blogReducer,
    { addBlogPost, deleteBlogPost },
    [{ title: 'title', content: 'Content', id: 1 }]
);
