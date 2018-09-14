import React from 'react'
import { View, Text } from 'react-native'
import { categoryList } from '../../actions/MarketPlace'
import { connect } from 'react-redux'
class Splash extends React.Component{
	render(){
		return(
			<View>
				<Text>Hello</Text>
			</View>
		)
	}
}
export default connect(state => ({}, mapDispatch))(Splash);

const mapDispatch = (dispatch) => {
   const allActionProps = Object.assign({}, dispatch);
   return allActionProps;
}