import React, { Fragment } from 'react';
import {
    StyleSheet,View , Text,
    ImageBackground,Image,TouchableOpacity
} from 'react-native';
import Intro from '../Container/IntroScreen'
import PhoneInput from 'react-native-phone-input'
import CodeInput from 'react-native-confirmation-code-field';
 class CodeConfirmation extends React.Component {
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
handlerOnFulfill = code => {
    // if (isValidCode(code)) {
    //   console.log(code);
    // } else {
    //   this.clearCode();
    // }
};

// field =z createRef();

clearCode() {
  const { current } = this.field;

  if (current) {
    current.clear();
  }
}

pasteCode() {
  const { current } = this.field;

  if (current) {
    current.handlerOnTextChange(value);
  }
}
    render() {
        return (
            <Intro 
            image = {2} 
            heading  ={'Track your child'}  
            title = {"Verification"}
            bottomLink = {'Re send Code'}
            description = {"Enter the 4 digit verification code send to your number +92-3215479090"}
            subHeading = {"School real time location tracking With pick and drop notifications"}
            onButtonPress = {()=> this.props.navigation.navigate('IntroScreens')}
            btnTitle = {"Continue"}>
              <CodeInput ref={this.field}
                    activeColor='#1E49CF'
                    inactiveColor='#1E49CF'
                    codeLength={4}
                    autoFocus={false}
                    className	 = {"border-circle"}
                    containerStyle={{ marginTop: 30 }}
                    onFulfill={this.handlerOnFulfill} />
            </Intro>
        );
      }   
    }   
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
      inputView : {borderColor : '#325cdd' , borderWidth : 1.5,
      paddingLeft : 12,
      backgroundColor : '#F5F6FA' , borderRadius : 12 ,  flexDirection : 'row',
      marginVertical : 1 , height : 45 , width : '100%' , alignSelf : 'center' }
    })
    export default CodeConfirmation
 