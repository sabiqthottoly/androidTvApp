
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Youtube from './youtubePlayer'
import Home from './Home'



const AppNavigator = createStackNavigator({
    Youtube:{screen:Youtube},
    Home:{screen:Home},
},{headerMode:"none",
    initialRouteName:'Home'
})

  
  export default createAppContainer(AppNavigator);