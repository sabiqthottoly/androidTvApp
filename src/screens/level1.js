import React,{useState} from 'react'
import { FlatList,View, Text, TouchableOpacity,TouchableHighlight,ImageBackground ,StyleSheet} from 'react-native'
import data from '../../data.json'

function level1(props) {

    const category = data
    const [currentIndex, setCurrentIndex] = useState(null)
    const [mainCategory, setMainCategory] = useState([{ name: 'videoCategory' }, { name: 'level1' }])
    const [borderColor, setBroderColor] = useState('lightblue')
    const [focused, setFocused] = useState(true)
    const borderColoronFocus = 'yellow'
    const image = { uri: category.background };


    onPressHandler = (name) => {
        if (name === 'ABC Topic') {
            props.navigation.navigate('ABCTopic')
        } else if (name === "XYZ Topic") {
            props.navigation.navigate('XYZTopic')
        }
    }
    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity onFocus={() => setCurrentIndex(index)} onPress={() => onPressHandler(item.name)} style={{  height:currentIndex === index ? '90%' : '85%',width:currentIndex === index ? 340 : 300, elevation:currentIndex === index ? 20 : 1,
            backgroundColor: currentIndex === index ? '#B048B5' : '#EBF4FA', justifyContent: 'center',
            alignItems: 'center', marginHorizontal: 5, borderRadius: 0,transform:[{translateY:currentIndex === index ? 10 : 0}],
            borderWidth: 2, borderColor: currentIndex === index ? '#7D1B7E' : '#EBF4FA'  }}>
                <>
                    <Text style={{ marginHorizontal: 50, marginVertical: 100, fontWeight: 'bold' ,fontSize:currentIndex === index ? 35 : 28,fontWeight:'bold',color:currentIndex === index ? 'white' : 'black' }}>{item.name}</Text>
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
                            data={category.level1}
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
export default level1