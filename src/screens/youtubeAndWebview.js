import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
 
export default function YoutubeAndWebView (props) {
    return (
        <View style={{flex:1,flexDirection:'row'}}>
            {/* <View style={{flexDirection:'row'}}> */}
                <WebView source={{ uri: props.navigation.state.params.webview }} />      
                <WebView source={{ uri: props.navigation.state.params.url}} />      
            {/* </View> */}
        </View>
    ) 
}
