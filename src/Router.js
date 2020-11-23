
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Youtube from './screens/youtubePlayer'
import Home from './screens/Home'
import WebView from './screens/webView'
import YoutubeAndWebView from './screens/youtubeAndWebview'
import temp from '../temp'



const AppNavigator = createStackNavigator({
    Youtube:{screen: Youtube},
    Home:{screen: Home},
    temp:{screen: temp},
    WebView:{screen: WebView},
    YoutubeAndWebView:{screen: YoutubeAndWebView}
},{headerMode:"none",
    initialRouteName:'Home'
})

  
  export default createAppContainer(AppNavigator);