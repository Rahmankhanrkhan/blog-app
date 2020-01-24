import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({ navigation }) => {
    const { state } = useContext(Context);

    const blogPost = state.find(
        blogPost => blogPost.id === navigation.getParam('id') 
    );


    return (
        <View>
            <Text>edit</Text>
            <BlogPostForm 
            initialValues = {{ title : blogPost.title, content : blogPost.content }}
            onSubmit = { ( title, content ) => {
                console.log( 'title and content:::', title, content  )
            } }

            />
        </View>
    )
}

export default EditScreen;
