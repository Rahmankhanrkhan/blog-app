import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({ navigation }) => {
    const id = navigation.getParam('id');
    const { state, editBlogPost } = useContext(Context);
    const blogPost = state.find(
        blogPost => blogPost.id === id
    );

    return (
        <View>
            <Text>edit</Text>
            <BlogPostForm
                initialValues={{ title: blogPost.title, content: blogPost.content }}
                onSubmit={(title, content) => {
                    editBlogPost(id, title, content, () => navigation.pop())
                }}

            />
        </View>
    )
}

export default EditScreen;
