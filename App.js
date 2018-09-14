import React from 'react';
import Route from './src/Route';
import { View, Text } from 'react-native'
import { Provider } from 'react-redux';
import store from './src/store';
import Expo from 'expo'
export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      loading: false
    }
  }
  async componentDidMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({ loading: true })
  }
  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          {this.state.loading &&<Route />}
        </View>
      </Provider>
    );
  }
}

