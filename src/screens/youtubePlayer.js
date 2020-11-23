import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import iframe from 'react-native-youtube-iframe'

 
export default function Youtube (props) {
    return (
        <View style={{flex:1,flexDirection:'row'}}>
                <WebView source={{ uri: props.navigation.state.params.url }} />      
        </View>
    ) 
}
