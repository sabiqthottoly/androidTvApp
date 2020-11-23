import React,{useState} from 'react'
import { View, Text, TouchableOpacity,TouchableHighlight } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import data from '../../data.json'

function Home(props) {

    const level1 = data.level1
    const [currentIndex,setCurrentIndex] = useState(null)
    const videoID = "hvmZqB_5tkk"
    const webViewLink = 'https://reactnative.dev/'
    const [borderColor,setBroderColor] = useState('lightblue')
    const [focused,setFocused] = useState(true)
    const borderColoronFocus = 'yellow'

    onPressHandler = (type,url,webview) => {
        if(type === 'live'){
            props.navigation.navigate('Youtube',{url})
        }else if (type === "webview"){
            console.log("webview",webview)
            props.navigation.navigate('WebView',{webview})
        }else if(type === "youtubeAndWebview"){
            props.navigation.navigate('YoutubeAndWebView',{url,webview})
        }
    }
    const renderItem=({item,index})=>{
        return(
            <TouchableOpacity onFocus={()=>setCurrentIndex(index)} onPress={() => onPressHandler(item.type,item.url,item.webview)} style={{margin:20,backgroundColor:'lightblue',marginHorizontal:5,borderRadius:10,borderWidth:2,borderColor:currentIndex === index ? 'red' : 'lightblue'}}>
                <>
                {/* {console.log("item",item.webview)} */}
                <Text style={{margin:30,marginHorizontal:60,fontSize:25}}>{item.name}</Text>
                <Text style={{margin:30,marginHorizontal:60,fontSize:25}}>{item.jo}</Text>
                </>
            </TouchableOpacity >)
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }} >
            {/* {console.log("level1.level2",level1)} */}
            <View style={{flexDirection:'column'}}>
                {/* {level1.map((obj,index) => {
                    return (
                        <View >
                            <View>
                                <View style={{flexDirection:'row'}}>
                                 {console.log(obj)}
                                    <Text style={{fontWeight:'bold',fontSize:20}}>level 1:</Text>
                                    <Text style={{fontWeight:'bold',fontSize:20}}>{obj.name}</Text>
                                </View> */}
                                <Text style={{fontWeight:'bold',fontSize:20}}>{level1[0].name}</Text>
                                <View style={{flexDirection:'row'}}>
                                        <FlatList 
                                            horizontal={true}
                                            data={level1[0].level2}
                                            renderItem={renderItem}
                                        />
                                </View>
                                
                            {/* </View> */}

                        {/* </View> */}
                    {/* ) */}
                {/* })} */}
            </View>
        </View>

    )

}

export default Home