import React,{useState} from 'react'
import { Image,FlatList,View, Modal,Text, TouchableOpacity,TouchableHighlight,ImageBackground ,StyleSheet} from 'react-native'
import data from '../../../data.json'
import {changeImageURL} from '../../actions/action'
import {connect} from 'react-redux'


function Settings(props) {

    const settingsMenu = [{option:'Change Theme',key:1},{option:'Change Wallpaper',key:2},{option:'Set Alarm',key:3},{option:'Home',key:4}]
    const category = data
    const [currentIndex, setCurrentIndex] = useState(null)
    const [mainCategory, setMainCategory] = useState([{ name: 'videoCategory' }, { name: 'level1' }])
    const [borderColor, setBroderColor] = useState('lightblue')
    const [focused, setFocused] = useState(true)
    const borderColoronFocus = 'yellow'
    const [WallpaperModal,setWallpaperModal] =  useState(false)
    // const image = { uri: category.background };
    const images = [{uri:require('../../assets/images/watch.png'),key:1},{uri:require('../../assets/images/secondBackground.jpg'),key:1},{uri:require('../../assets/images/mainBackground.png'),key:1}]


    onPressHandler = (key) => {
        if (key === 1) {
            setWallpaperModal(true)
        } else if (key === 2) {
            setWallpaperModal(true)
        }
    }


    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity onFocus={() => setCurrentIndex(index)} onPress={() => onPressHandler(item.key)} style={{  width:currentIndex === index ? 340 : 300, elevation:currentIndex === index ? 20 : 1,
            backgroundColor: currentIndex === index ? '#B048B5' : '#EBF4FA', justifyContent: 'center',
            alignItems: 'center',marginVertical:5, borderRadius: 0,transform:[{translateY:currentIndex === index ? 10 : 0}],
            borderWidth: 2, borderColor: currentIndex === index ? '#7D1B7E' : '#EBF4FA'  }}>
                <>
                    <Text style={{ textAlign:'center', marginVertical: 10, fontWeight: 'bold' ,fontSize:currentIndex === index ? 35 : 28,fontWeight:'bold',color:currentIndex === index ? 'white' : 'black' }}>{item.option}</Text>
                </>
            </TouchableOpacity >)
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'space-around', alignItems: 'center' }} >
           
            <Modal
                animationType='slide'
                transparent={true}
                visible={WallpaperModal}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                  }}
            >
                <View style={{flex:1,backgroundColor:'white',justifyContent:'center'}}>
                    {/* <Text>car</Text> */}
                    <View>
                    <TouchableOpacity onPress={()=>setWallpaperModal(false)}>
                        <Text style={{fontSize:25,color:'black'}}>X</Text>
                    {console.log(props.changeImageURL)}
                    </TouchableOpacity>
                    <FlatList
                        data={images}
                        contentContainerStyle={{justifyContent:'center'}}
                        renderItem={({item})=>{
                            return(
                                <TouchableOpacity onPress={()=>props.changeImageURL(item.uri)} style={{justifyContent:'center',alignItems:'center',marginVertical:5}}>
                                    <Image source={item.uri} style={{height:200,width:'80%'}}/>
                                </TouchableOpacity>
                            )
                        }}
                    />
                    </View>
                </View>
            
            </Modal>

            <Text style={{fontSize:35,fontWeight:'bold'}}>Settings</Text>
                <View style={{ flexDirection: 'column' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <FlatList
                            horizontal={false}
                            data={settingsMenu}
                            renderItem={renderItem}
                            keyExtractor={item => item.key}
                        />
                    </View>
                </View>
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

const mapDispatchToProps = (dispatch) => {
    return{
        changeImageURL:(key) => dispatch(changeImageURL(key))
    }}

const mapStateToProps = state =>({
    general: state.general,
})
export default connect(mapStateToProps,mapDispatchToProps)(Settings)