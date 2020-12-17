
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Youtube from './screens/youtubePlayer'
import Home from './screens/Home'
import WebView from './screens/webView'
import VideoCategory from './screens/VideoCategory'
import level1 from './screens/level1'
import ABCTopic from './screens/ABCTopic'
import XYZTopic from './screens/XYZTopic'
import YoutubeAndWebView from './screens/youtubeAndWebview'
import Settings from './screens/settings/settings'
import temp from '../temp'



const AppNavigator = createStackNavigator({
    Youtube:{screen: Youtube},
    VideoCategory:{screen: VideoCategory},
    Home:{screen: Home},
    ABCTopic:{screen: ABCTopic},
    XYZTopic:{screen: XYZTopic},
    level1:{screen: level1},
    Settings:{screen:   Settings},
    temp:{screen: temp},
    WebView:{screen: WebView},
    YoutubeAndWebView:{screen: YoutubeAndWebView}
},{headerMode:"none",
    initialRouteName:'Home'
})

  
  export default createAppContainer(AppNavigator);