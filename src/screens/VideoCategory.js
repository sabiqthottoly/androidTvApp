import React, { useState } from 'react'
import { FlatList, View, Text, TouchableOpacity, TouchableHighlight, ImageBackground, StyleSheet } from 'react-native'
import data from '../../data.json'

function VideoCategory(props) {

    const category = data
    const [currentIndex, setCurrentIndex] = useState(null)
    const [mainCategory, setMainCategory] = useState([{ name: 'videoCategory' }, { name: 'level1' }])
    const [borderColor, setBroderColor] = useState('lightblue')
    const [focused, setFocused] = useState(true)
    const borderColoronFocus = 'yellow'
    const image = { uri: category.background };


    // onPressHandler = (name) => {
    //     if (name === 'videoCategory') {
    //         props.navigation.navigate('Youtube', { url })
    //     } else if (name === "webview") {
    //         props.navigation.navigate('WebView', { webview })
    //     }
    // }
    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity onFocus={() => setCurrentIndex(index)} onPress={() => onPressHandler(item.name)} style={{ margin: 20, backgroundColor: '#d0ecfd', marginHorizontal: 5, borderRadius: 5, borderWidth: 2, borderColor: currentIndex === index ? 'red' : 'lightblue' }}>
                <>
                    <Text style={{ margin: 30, marginHorizontal: 60, marginVertical: 100, fontSize: 30 }}>{item.name}</Text>
                </>
            </TouchableOpacity >)
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }} >
            <ImageBackground source={image} style={styles.image}>
                <View style={{ flexDirection: 'column' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <FlatList
                            horizontal={true}
                            data={category.videoCategory}
                            renderItem={renderItem}
                            keyExtractor={item => item.jo}
                        />
                    </View>
                </View>
            </ImageBackground>
        </View>

    )

}

const styles = StyleSheet.create({
    image: {
        alignItems: 'center',
        width: '100%',
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
});
export default VideoCategory