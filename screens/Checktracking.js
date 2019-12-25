import React, { Fragment } from 'react';
import {
    StyleSheet,View , Text,
    ImageBackground,Image,TouchableOpacity
} from 'react-native';
import Intro from '../Container/IntroScreen'
 class CheckTracking extends React.Component {
  constructor(props){
    super(props)
    this.state  = {
      selected : "",
    }
  }
  static navigationOptions = {
    header: null,
};
    render() {
        return (
            <Intro 
            image = {3} 
            // heading  ={'Track your child'}  
            // title = {"Verification"}
            // bottomLink = {true}
            description = {"Press Continue to start using app or press Tracking to avail tracking services"}
            subHeading = {"Welcome to TOT the complete world of awsomeness for your offsprings sell purchare preloved and new stuff and you can also offer your services live on map location and much more"}
            // onButtonPress = {()=> this.props.navigation.navigate('SmsCode')}
            // btnTitle = {"Continue"}
            >
            
            </Intro>
        );
      }   
    }   
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
      inputView : {borderColor : '#0635C9' , borderWidth : 1,
      paddingLeft : 12,
      backgroundColor : '#F5F6FA' , borderRadius : 12 ,  flexDirection : 'row',
      marginVertical : 1 , height : 45 , width : '100%' , alignSelf : 'center' }
    })
    export default CheckTracking
 