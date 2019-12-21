import React, { useContext } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import BlogContext from '../context/BlogContext'

const IndexScreen = () => {
    const { blogPosts, addBlogPost } = useContext(BlogContext);


    return (
        <View>
            <Text>IndexScreen</Text>
            <Button
                title='Add'
                onPress={addBlogPost}
            />
            <FlatList
                data={blogPosts}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({ item }) => {
                    return <Text> {item.title} </Text>
                }}
            />
        </View>
    )
}

export default IndexScreen
