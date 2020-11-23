import React,{useState} from 'react'
import { View, Text, TouchableOpacity,TouchableHighlight } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

function Home(props) {

    const level1 = [{name:'sabiq',key:1},{name:'sabiq',key:2},{name:'thotoly',key:3},{name:'jasir',key:4}]
    const [currentIndex,setCurrentIndex] = useState(null)
    const videoID = "hvmZqB_5tkk"
    const webViewLink = 'https://reactnative.dev/'
    // const [currentIndex,setCurrentIndex] = useState('lightblue')
    const [focused,setFocused] = useState(true)
    const borderColoronFocus = 'yellow'

    onPressHandler = (name) => {
        if(name === 'sabiq'){
          return(
                <View>
                  <Text>dsa</Text>
                </View>
            )
        }else if (name === "jasir"){
            props.navigation.navigate('WebView',{webview})
        }else if(type === "youtubeAndWebview"){
            props.navigation.navigate('YoutubeAndWebView',{url,webview})
        }
    }
    const renderItem=({item,index})=>{
        return(
            <TouchableOpacity  onFocus={()=>setCurrentIndex(index)} onPress={() => onPressHandler(item.name)} style={{height:200,margin:20,backgroundColor:'lightblue',marginHorizontal:5,borderRadius:10,borderWidth:2,borderColor:currentIndex === index ? 'red':'yellow'}}>
                <Text style={{margin:10,marginHorizontal:30,fontSize:18}}>{item.name}</Text>
            </TouchableOpacity >)
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }} >
                <FlatList 
                    horizontal={true}
                    data={level1}
                    renderItem={renderItem}
                />
        </View>

    )

}

export default Home