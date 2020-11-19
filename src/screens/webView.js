import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
 
export default function MyWebComponent (props) {
    return (
        <View style={{flex:1}}>
            <WebView source={{ uri: props.navigation.state.params.webViewLink }} />      
        </View>
    ) 
}
