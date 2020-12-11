import React, { useState } from 'react'
import { FlatList, View, Text, TouchableOpacity, TouchableHighlight, ImageBackground, StyleSheet } from 'react-native'
import data from '../../data.json'
import RNFS from 'react-native-fs';

function Home(props) {
    const category = data
    const [currentIndex, setCurrentIndex] = useState(null)

    const [mainCategory, setMainCategory] = useState([{ name: 'videoCategory', key: 1 }, { name: 'level1', key: 2 }])
    const videoCategory = category.videoCategory
    const [borderColor, setBroderColor] = useState('lightblue')
    const [focused, setFocused] = useState(true)
    const [size, setSize] = useState()
    const borderColoronFocus = 'yellow'
    const image = { uri: category.background };


    onPressHandler = (name) => {
        if (name === 'videoCategory') {
            props.navigation.navigate('VideoCategory')
        } else if (name === "level1") {
            props.navigation.navigate('level1')
        }
    }
    _download=()=>{
        const timestamp = (new Date()).getTime();//Get current time wrong
             const random = String(((Math.random() * 1000000) | 0)) // Six random numbers
        let dirs = Platform.OS === 'ios' ? RNFS.LibraryDirectoryPath : RNFS.ExternalDirectoryPath ; 
             //External file, absolute path of shared directory (Android only)
        const downloadDest = `${dirs}/${timestamp+random}.mp4`;
             //download link 
        const formUrl = 'https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_480_1_5MG.mp4';
        const options = {
          fromUrl: formUrl,
          toFile: downloadDest,
          background: true,
          begin: (res) => {
                    //  ToastAndroid.show('Start Download', ToastAndroid.SHORT)
            console.log('begin', res);
            console.log('contentLength:', res.contentLength / 1024 / 1024, 'M');
          },
                 progress: (res) => {//Download progress
            let pro = res.bytesWritten / res.contentLength;
            console.log('pro==',pro)
          }
        }
        try {
          const ret = RNFS.downloadFile(options);
          ret.promise.then(res => {
            console.log('success', res);
            console.log('file://' + downloadDest)
             //If you download a video or picture, you can save it to an album for easy viewing
            const promise = CameraRoll.saveToCameraRoll(downloadDest)
            promise.then(result => {
                         //alert('Save successfully! The address is as follows:\n' + result);
                         //The download was successful, please check in the album
              console.log('down res',result);
            }).catch(function(error) {
              console.error('error2', error);
                         // alert('Save failed!\n' + error);
            });
          }).catch(err => {
              console.log('err', err);
          });
        }catch (e) {
                //  ToastAndroid.show('Download failed', ToastAndroid.SHORT)
          console.log(error);
        }
      }
    onFocusHandler = (index) =>{
        setCurrentIndex(index)
    }

    const renderItem = ({ item, index }) => {
        return (
            
            <TouchableOpacity onFocus={() => onFocusHandler(index)} onPress={() => onPressHandler(item.name)} style={{ height:currentIndex === index ? '90%' : '85%',width:currentIndex === index ? 340 : 300, elevation:currentIndex === index ? 20 : 1,
            backgroundColor: currentIndex === index ? '#B048B5' : '#EBF4FA', justifyContent: 'center',
            alignItems: 'center', marginHorizontal: 5, borderRadius: 0,transform:[{translateY:currentIndex === index ? 10 : 0}],
            borderWidth: 2, borderColor: currentIndex === index ? '#7D1B7E' : '#EBF4FA' }}>
                <>
                    <Text style={{  marginHorizontal: 50, marginVertical: 100, fontWeight: 'bold' ,fontSize:currentIndex === index ? 35 : 28,fontWeight:'bold',color:currentIndex === index ? 'white' : 'black' }}>{item.name}</Text>
                </>
            </TouchableOpacity >
            
            )
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }} >
            <ImageBackground source={image} style={styles.image}>
                <View style={{ flexDirection: 'column' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <FlatList
                            horizontal={true}
                            data={mainCategory}
                            renderItem={renderItem}
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
        width: '100%',
        alignItems: 'center',
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
export default Home