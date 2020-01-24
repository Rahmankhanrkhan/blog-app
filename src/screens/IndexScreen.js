import React, { useContext } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

const IndexScreen = ({ navigation }) => {
    const { state, deleteBlogPost } = useContext(Context);
    //console.log('Context :', Context);


    return (
        <View>
            <Text>IndexScreen</Text>
           
            <FlatList
                data={state}
                keyExtractor={(blogPosts) => blogPosts.title}
                renderItem={({ item }) => {
                    return (
                        <ScrollView showsVerticalScrollIndicator={false} >
                            <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}  >
                                <View style={styles.row} >
                                    <Text style={styles.title} > {item.title} -- {item.id} </Text>
                                    <TouchableOpacity onPress={() => deleteBlogPost(item.id)}  >
                                        <Feather name='trash-2' style={styles.icon} />
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                        </ScrollView>

                    )
                }}
            />
        </View>
    )
};

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: (
            <TouchableOpacity onPress={() => navigation.navigate('Create')} >
                <Feather name='plus' size={30} />
            </TouchableOpacity>

        )
    }
}

const styles = StyleSheet.create({
    row: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginHorizontal: 20,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: 'grey'

    },
    title: {
        fontSize: 20,
        marginVertical: 10,

    },
    icon: {
        fontSize: 25,
        alignSelf: 'center',

    }
})

export default IndexScreen
