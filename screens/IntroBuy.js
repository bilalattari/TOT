import React, { Fragment } from 'react';
import {
    StyleSheet,View , Text,
    ImageBackground,Image,TouchableOpacity
} from 'react-native';
import Intro from '../Container/IntroScreen'
 class IntroBuy extends React.Component {
  constructor(props){
    super(props)
  }
  static navigationOptions = {
    header: null,
};
    render() {
        return (
            <Intro 
            image = {0} 
            heading  ={'Buy or Sell'}  
            title = {"Profile picture"}
            description = {"Upload profile picture"}
            subHeading = {"Your Pre-loved or New Stuff on the map"} 
            btnTitle = {"Continue"}
            onButtonPress = {()=> this.props.navigation.navigate('SmsCode')}>
            
            <TouchableOpacity style = {{height : 100 , width : 100 , borderRadius : 125 ,backgroundColor : '#F5F6FA',
                 borderColor : '#0635C9' , borderWidth : 1 , alignSelf : "center" , justifyContent : "center" , alignItems : "center"}}>
                     <Image source = {require("../assets/camera.png")} style = {{resizeMode : "contain" , height : 50}} />
                </TouchableOpacity>
            </Intro>
        );
      }   
    }   
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
    })
    export default IntroBuy
 