import React,{useState} from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import data from '../../data.json'

function Home(props) {

    const level1 = data.level1
    const [currentIndex,setCurrentIndex] = useState(null)
    const videoID = "hvmZqB_5tkk"
    const webViewLink = 'https://reactnative.dev/'

    onPressHandler = (type) => {
        if(type=='live'){
            props.navigation.navigate('Youtube',{videoID})
        }else if (type == "webview"){
            props.navigation.navigate('WebView',{webViewLink})
        }
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }} >
            <View style={{flexDirection:'row'}}>
                {level1.map((item,index) => {
                    return (
                        <View >
                            <TouchableOpacity onPress={currentIndex === index ? ()=>setCurrentIndex(null) :()=> setCurrentIndex(index)  } style={{ margin: 10, backgroundColor: 'lightblue', padding: 10, borderRadius: 10 }}>
                                <Text style={{ margin:5,marginHorizontal:30,fontSize:20,fontWeight:'bold' }}>{item.name}</Text>
                            </TouchableOpacity>
                            <View>
                                {(currentIndex=== index) && item.level2.map((x,index) => {
                                    return (
                                        <TouchableOpacity onPress={() => onPressHandler(x.type)} style={{ marginHorizontal:10, justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightpink', margin: 1, borderRadius: 3 }}>
                                                <Text>{x.type}</Text>
                                        </TouchableOpacity>
                                    )
                                })}
                                
                            </View>
                        </View>
                    )
                })}
            </View>
        </View>

    )

}

export default Home