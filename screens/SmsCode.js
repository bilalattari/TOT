import React, { Fragment } from 'react';
import {
    StyleSheet,View , Text,
    ImageBackground,Image,TouchableOpacity
} from 'react-native';
import Intro from '../Container/IntroScreen'
import PhoneInput from 'react-native-phone-input'
import { Picker } from "native-base";
import * as Countries from 'all-countries-and-cities-json'
 class SmsCode extends React.Component {
  constructor(props){
    super(props)
    this.state  = {
      selected : "",
      pickerData : '',
      phoneNumber : '+92'
    }
  }
  static navigationOptions = {
    header: null,
};
onValueChange(value) {
  this.setState({
    selected: value
  });
}
    render() {
        return (
            <Intro 
            image = {1} 
            heading  ={'Search or Offer'}  
            title = {"Verification"}
            description = {"Enter your active number for verification"}
            subHeading = {"Skills, Services or Experience with live location"}
            onButtonPress = {()=> this.props.navigation.navigate('CodeConfirmation')}
            btnTitle = {"Send"}>
                    <PhoneInput
                        style={styles.inputView}
                        placeholder="Type here to translate!"
                        ref={(ref) => { this.phone = ref; }}
                        // onPressFlag={this.onPressFlag}
                        onChangePhoneNumber={value => this.setState({ phoneNumber: value })}
                        value={this.state.phoneNumber}
                    />
            </Intro>
        );
      }   
    }   
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
      inputView : {borderColor : '#325cdd' , borderWidth : 1.5, paddingLeft : 12,
      backgroundColor : '#F5F6FA' , borderRadius : 19 ,  flexDirection : 'row',
      marginVertical : 1 , height : 45 , width : '100%' , alignSelf : 'center' }
    })
    export default SmsCode
 