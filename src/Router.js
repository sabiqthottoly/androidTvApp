
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Youtube from './screens/youtubePlayer'
import Home from './screens/Home'
import WebView from './screens/webView'
import YoutubeAndWebView from './screens/youtubeAndWebview'



const AppNavigator = createStackNavigator({
    Youtube:{screen: Youtube},
    Home:{screen: Home},
    WebView:{screen: WebView},
    YoutubeAndWebView:{screen: YoutubeAndWebView}
},{headerMode:"none",
    initialRouteName:'Home'
})

  
  export default createAppContainer(AppNavigator);