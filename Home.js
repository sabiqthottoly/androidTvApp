import React,{useState} from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import data from './data'

function Home(props) {

    const level1 = data.level1
    const [currentIndex,setCurrentIndex] = useState(null)

    onPressHandler = (type) => {
        if(type=='live'){
            props.navigation.navigate('Youtube')
        }
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }} >
            {/* {console.log("level1", level1)} */}
            <View style={{flexDirection:'row'}}>
                {level1.map((item,index) => {
                    return (
                        <View>
                            <TouchableOpacity onPress={currentIndex === index ? ()=>setCurrentIndex(null) :()=> setCurrentIndex(index)  } style={{ margin: 10, backgroundColor: 'lightblue', padding: 10, borderRadius: 10 }}>
                                <Text style={{ margin:5,marginHorizontal:30,fontSize:20,fontWeight:'bold' }}>{item.name}</Text>
                            </TouchableOpacity>
                            <View>
                                {(currentIndex=== index) ? item.level2.map((x,index) => {
                                    return (
                                        <View style={{ marginHorizontal:10, justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightpink', margin: 1, borderRadius: 3 }}>
                                            <TouchableOpacity onPress={() => onPressHandler(x.type)}>
                                                <Text>{x.type}</Text>
                                            </TouchableOpacity>
                                        </View>
                                    )
                                }) : null }
                                
                            </View>
                        </View>
                    )
                })}
            </View>
        </View>

    )

}

export default Home