import React,{useState} from 'react'
import { FlatList,View, Text, TouchableOpacity,TouchableHighlight,ImageBackground ,StyleSheet} from 'react-native'
import data from '../../data.json'

function XYZTopic(props) {

    const category = data
    const [currentIndex,setCurrentIndex] = useState(null)
    const [mainCategory,setMainCategory] = useState([{name: 'videoCategory'},{name: 'level1'}])
    const webViewLink = 'https://reactnative.dev/'
    const [borderColor,setBroderColor] = useState('lightblue')
    const [focused,setFocused] = useState(true)
    const borderColoronFocus = 'yellow'
    const image = { uri: category.background };

    
    onPressHandler = (type,webview,url) => {
        if(type === 'live'){
            props.navigation.navigate('Youtube',{url})
        }else if (type === "webview"){
            props.navigation.navigate('WebView',{webview})
        }else if (type === "youtubeAdWebview"){
            props.navigation.navigate('YoutubeAndWebView',{url,webview})
        }
    }
    const renderItem=({item,index})=>{
        return(
            <TouchableOpacity onFocus={()=>setCurrentIndex(index)} onPress={() => onPressHandler(item.type,item.webview,item.url)} style={{height:currentIndex === index ? '90%' : '85%',width:currentIndex === index ? 340 : 300, elevation:currentIndex === index ? 20 : 1,
            backgroundColor: currentIndex === index ? '#B048B5' : '#EBF4FA', justifyContent: 'center',
            alignItems: 'center', marginHorizontal: 5, borderRadius: 0,transform:[{translateY:currentIndex === index ? 10 : 0}],
            borderWidth: 2, borderColor: currentIndex === index ? '#7D1B7E' : '#EBF4FA'}}>
                <>
                <Text style={{marginHorizontal: 50, marginVertical: 100, fontWeight: 'bold' ,fontSize:currentIndex === index ? 35 : 28,fontWeight:'bold',color:currentIndex === index ? 'white' : 'black'}}>{item.name}</Text>
                </>
            </TouchableOpacity >)
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }} >
            {/* {console.log("level1.level2",level1)} */}
            <ImageBackground source={image} style={styles.image}>
            <View style={{flexDirection:'column'}}>
                                <View style={{flexDirection:'row'}}>
                                    <FlatList 
                                        horizontal={true}
                                        data={category.level1[0].level2}
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
    container: {
      flex: 1,
      flexDirection: "column"
    },
    image: {
      flex: 1,
      width:'100%',
      alignItems:'center',
      resizeMode: "cover",
      justifyContent: "center"
    },
    text: {
      color: "white",
      fontSize: 42,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000000a0"
    }
  });
export default XYZTopic