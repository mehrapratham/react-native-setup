import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Splash from './containers/Splash';
import StartScreen from './containers/StartScreen';
export default class App extends Component {
  render() {
    return (
      <Router hideNavBar= "true">
        <Scene key="root" duration={0}>
          <Scene key="Splash" component={Splash} hideNavBar title="PageOne" initial={true} />
          <Scene key="StartScreen" component={StartScreen} hideNavBar title="PageTwo" />
        </Scene>
      </Router>
    )
  }
}