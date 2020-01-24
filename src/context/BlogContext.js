import React, { useReducer } from 'react';
import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'get_blogpost':
            return action.payload;

        case 'delete_blogpost':
            return state.filter(
                (blogPosts) => blogPosts.id !== action.payload
            );

        case 'add_blogpost':
            return [...state, {
                id: new Date().getTime(),
                title: action.payload.title,
                content: action.payload.content
            }
            ];

        case 'edit_blogpost':
            return state.map(blogPost => {
                return blogPost.id === action.payload.id ?
                    action.payload : blogPost
            }
            );

        default:
            return state;
    }
};

const getBlogPost = dispatch => {
    return async () => {
        const reponse = await jsonServer.get('/blogposts');
        //console.log('response::::', reponse);

        dispatch(
            {
                type: 'get_blogpost',
                payload: reponse.data
            }
        );
    }
};

const addBlogPost = (dispatch) => {
    return async (title, content, callback) => {
        await jsonServer.post('/blogposts', { title, content })
        // dispatch(
        //     {
        //         type: 'add_blogpost',
        //         payload: { title, content }
        //     }
        // );
        if (callback) {
            callback();
        }
    }
};

const deleteBlogPost = (dispatch) => {
    return async (id) => {
        await jsonServer.delete(`/blogposts/${id}`);
        dispatch(
            {
                type: 'delete_blogpost',
                payload: id
            }
        );
    }
};

const editBlogPost = dispatch => {
    return async(id, title, content, callback) => {
        await jsonServer.put( `/blogposts/${id}`, { title, content } )
        // dispatch(
        //     {
        //         type: 'edit_blogpost',
        //         payload: { id, title, content }

        //     }
        // );
        callback();
    }
};


export const { Context, Provider } = createDataContext(
    blogReducer,
    { addBlogPost, deleteBlogPost, editBlogPost, getBlogPost },
    []
);
