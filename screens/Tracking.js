import React, { Fragment } from 'react';
import {
    StyleSheet,View , Text,
    ImageBackground,Image,TouchableOpacity
} from 'react-native';
import Custominput from '../Component/Input'
import Intro from '../Container/IntroScreen'
 class Tracking extends React.Component {
  constructor(props){
    super(props)
    this.state  = {
    }
  }
  static navigationOptions = {
    header: null,
};
    render() {
        return (
            <Intro 
            image = {4} 
            full = {true}
            heading  ={'Tracking'}  
            title = {"Enter Your Tot Driver Id"}
            description = {"If you know you the driver id enter it above and if you dont know that then contact your school van driver for the code you can even your private car driver and install the TOT driver app from the app store"}
            subHeading = {"School real time location tracking with pick and drop notifications"}
            onButtonPress = {()=> this.props.navigation.navigate('DriverInfo')}
            bottomLink = {'Home'}
            btnTitle = {"Continue"}>
             <Custominput type = {'font-awesome'}
             width  = {"95%"}
             icon = {'car'} placeholder = {'Driver ID'} />
            </Intro>
        );
      }   
    }   
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
    })
    export default Tracking
 