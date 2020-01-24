import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { Context } from '../context/BlogContext'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
    const { state } = useContext(Context);

    const blogPost = state.find((blogs) => blogs.id === navigation.getParam('id'))
    const title = navigation.getParam('title') ? navigation.getParam('title') : 'No title';

    return (
        <View>
            <Text>showscreen</Text>
            <Text> {navigation.getParam('id')} </Text>
            <Text>{blogPost.title}</Text>
            <Text> {title} </Text>
        </View>
    )
};

ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: (
            <TouchableOpacity
                onPress={() => navigation.navigate('Edit', {
                    id: navigation.getParam('id')
                })} >
                <FontAwesome name='pencil' size={30} />
            </TouchableOpacity>
        )
    }
}

export default ShowScreen
