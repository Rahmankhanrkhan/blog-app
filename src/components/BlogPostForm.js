import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

const BlogPostForm = ({ onSubmit, initialValues }) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);



    return (
        <View>
            <Text style={styles.label} >Enter title:</Text>
            <TextInput
                style={styles.input}
                value={title}
                onChangeText={(text) => setTitle(text)}
            />
            <Text style={styles.label} >Enter content:</Text>
            <TextInput
                style={styles.input}
                value={content}
                onChangeText={(text) => setContent(text)}
            />
            <Button
                title='Save'
                onPress = { () => onSubmit( title, content ) }
            />
        </View>
    )
};

BlogPostForm.defaultProps={
    initialValues:{
        title: '',
        content:''
    }
}

const styles = StyleSheet.create({
    label: {
        paddingLeft: 10,
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 10,
    },
    input: {
        borderColor: 'black',
        borderWidth: 1,
        paddingLeft: 10,
        marginVertical: 10,
        marginHorizontal: 10
    }
})

export default BlogPostForm
