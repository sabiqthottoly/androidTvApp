import React,{useState} from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import data from '../../data.json'

function Home(props) {

    const level1 = data.level1
    const [currentIndex,setCurrentIndex] = useState(null)
    const videoID = "hvmZqB_5tkk"
    const webViewLink = 'https://reactnative.dev/'

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

    return (
        <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }} >
            <View style={{flexDirection:'column'}}>
                {level1.map((item,index) => {
                    return (
                        <View >
                            {/* <TouchableOpacity onPress={currentIndex === index ? ()=>setCurrentIndex(null) :()=> setCurrentIndex(index)  } style={{ margin: 10, backgroundColor: 'lightblue', padding: 10, borderRadius: 10 }}>
                                <Text style={{ margin:5,marginHorizontal:30,fontSize:20,fontWeight:'bold' }}>{item.name}</Text>
                            </TouchableOpacity>
                            <View>
                                {(currentIndex=== index) && item.level2.map((x,index) => {
                                    return (
                                        <TouchableOpacity onPress={() => onPressHandler(x.type)} style={{ marginHorizontal:10, justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightpink', margin: 1, borderRadius: 3 }}>
                                                <Text>{x.type}</Text>
                                        </TouchableOpacity>
                                    )
                                })} */}
                                
                            {/* </View> */}
                            <View>
                                <View style={{flexDirection:'row'}}>
                                 {console.log(item)}
                                    <Text style={{fontWeight:'bold',fontSize:20}}>level 1:</Text>
                                    <Text style={{fontWeight:'bold',fontSize:20}}>{item.name}</Text>
                                </View>
                                <View style={{flexDirection:'row'}}>
                                    {item.level2.map((obj,i)=>{
                                        return(
                                            <TouchableOpacity  onPress={() => onPressHandler(obj.type,obj.url,obj.webview)} style={{margin:20,backgroundColor:'lightblue',marginHorizontal:5,borderRadius:10}}>
                                                {console.log("obj",obj.webview)}
                                                <Text style={{margin:10,marginHorizontal:30,fontSize:18}}>{obj.name}</Text>
                                                <Text style={{margin:10,marginHorizontal:30,fontSize:18}}>{obj.jo}</Text>
                                            </TouchableOpacity >
                                        )
                                    })}
                                </View>
                            </View>

                        </View>
                    )
                })}
            </View>
        </View>

    )

}

export default Home