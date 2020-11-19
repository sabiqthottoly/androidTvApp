
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Youtube from './screens/youtubePlayer'
import Home from './screens/Home'
import WebView from './screens/webView'



const AppNavigator = createStackNavigator({
    Youtube:{screen:Youtube},
    Home:{screen:Home},
    WebView:{screen:WebView}
},{headerMode:"none",
    initialRouteName:'Home'
})

  
  export default createAppContainer(AppNavigator);