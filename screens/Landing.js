import React, { Fragment } from 'react';
import {
    StyleSheet,
    View,ImageBackground,
    Text,ScrollView,
    Image
} from 'react-native';
import {withNavigation} from 'react-navigation'
import CustomButton from '../Component/Button'
import {themeColor, pinkColor} from '../Constant/index'
import { Icon } from 'react-native-elements';
 class LandingScreen extends React.Component {
  constructor(props){
    super(props)
  }
  static navigationOptions = {
    header: null
  }
  componentDidMount =()=> {
    setTimeout(()=> this.props.navigation.navigate('SignIn') , 3000)
  }

    render() {
      const {navigation} = this.props
        return (
          <ImageBackground source = {require("../assets/splashbackground.png")} resizeMode = {'stretch'}
            style={styles.container}>
              <Image source = {require('../assets/logo.png')} style = {{resizeMode : 'contain' , height : 120 , width : 100}} />
         </ImageBackground>

        );
      }   
    }   
    
    const styles = StyleSheet.create({
      container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
      },
    })
    export default withNavigation(LandingScreen)
