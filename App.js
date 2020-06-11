import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './src/screens/Home';
import CovidInfoScreen from './src/screens/CovidInfoScreen';
import SafetyInfoScreen from './src/screens/SafetyInfoScreen';

const navigator = createStackNavigator(
  {
  Home: Home,
  Info1: CovidInfoScreen,
  Info2: SafetyInfoScreen
  }, 
  {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerTransparent: true,
    title: 'COVID-19',
      headerTintColor: 'black',
      headerStyle: {
        backgroundColor: '#fff',
        elevation: null,
        shadowOpacity: 0,
    },
      headerTitleStyle: {
        fontSize: 18,
      },
  }}
);

export default createAppContainer(navigator);