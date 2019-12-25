import React, { Fragment } from 'react';
import {
    StyleSheet,
    View,TouchableOpacity,ImageBackground,
    Text,ScrollView,Image
} from 'react-native';
import { Picker } from "native-base";
import * as Countries from 'all-countries-and-cities-json'

import CustomInput from '../Component/Input'
import CustomButton from '../Component/Button'
import {Heading  , SubHeading} from '../Component/Heading'
import {Icon , Input , CheckBox} from 'react-native-elements'
import {themeColo, themeColor} from '../Constant/index'
 class SignUp extends React.Component {
  constructor(props){
    super(props)
    this.state  = {
      selected : '',
      city : ''
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
onCityChange(value) {
  this.setState({
    city: value
  });
}
    render() {
      console.log(Object.values(Countries)[4]  , 'Countries')
      const {navigation} = this.props
      let {remember} = this.state
        return (
              <ImageBackground source  = {require("../assets/cloudBg.png")} 
              style = {{flex : 1 }} resizeMode = {"contain"} >
                <ScrollView>
            <View style = {{marginTop  :'15%' , marginBottom: 12,}}>
              <Heading text = {"Lets get started!"} />
              <SubHeading text = {"TOT a Complete world for your loveness"} />
              </View>
              <CustomInput placeholder= {'Name'} type = {"font-awesome"}  icon = {"user"} />
              <CustomInput placeholder= {'Email'} type = {"font-awesome"}  icon = {"envelope"} keyboardType = {'email-address'} />
              <CustomInput placeholder= {'Password'} secureTextEntry = {true} type = {"font-awesome"}  icon = {"lock"} />
              <CustomInput placeholder= {'Confirm Password'} secureTextEntry = {true} type = {"font-awesome"}  icon = {"lock"} />
              <View style = {styles.pickerView}>
              <Icon type = {'font-awesome'} name = {'globe'}  
               color = {"#325cdd"}
               containerStyle = {{marginHorizontal : 12}} size = {20} />
              <Picker
              placeholderIconColor = {"#0635C9"}
              mode="dropdown"
              style={{ width: '70%' , fontSize : 10 , color  : '#325cdd' , marginLeft  : -10 }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Select Country" value="" />
              {
                Object.keys(Countries).map((key , index)=> <Picker.Item label={key} value={index} /> )
              }
            </Picker>
                </View>
                <View style = {styles.pickerView}>
              <Icon type = {'font-awesome'} name = {'globe'}  
       color = {"#325cdd"}
       containerStyle = {{marginHorizontal : 12}} size = {20} />
                    <Picker
              enabled = {this.state.selected !== '' ?  true : false}
              placeholderIconColor = {"#0635C9"}
              mode="dropdown"
              style={{ width: '70%' , fontSize : 10 , color  : '#325cdd' , marginLeft  : -10 }}
              selectedValue={this.state.city}
              onValueChange={this.onCityChange.bind(this)}
            >
              <Picker.Item label="Select City" value="" />
              
              {
                Object.values(Countries)[this.state.selected !== '' ? this.state.selected : 0 ].map((key , index)=> <Picker.Item label={key} value={index} /> )
              }
            </Picker>
                </View>            
            <View style = {{marginTop : 20}}>
              <CustomButton title = {'Create'} onPress = {()=> navigation.navigate("IntroBuy")} />
              </View>
                </ScrollView>
              <TouchableOpacity style = {{ height : 30 ,}} onPress = {()=> this.props.navigation.navigate('CreateAccount')}>
                <Text style = {{alignSelf : 'center'}}>Already have an account ? 
                <Text style ={{ 
                color : themeColor}}>  Login here</Text></Text>
                </TouchableOpacity>
                </ImageBackground>
        );
      }   
    }   
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
      pickerView : {borderColor : '#325cdd' , borderWidth : 1.5, alignItems : "center",
      backgroundColor : '#F5F6FA' , borderRadius : 19,  flexDirection : "row" ,
      marginTop : 6 , height : 45 , width : '75%' , alignSelf : 'center' },
      inputContainer : {borderColor : '#323643' , backgroundColor : '#454B61' , borderRadius : 7 , 
      paddingLeft : 12 , marginVertical : 6 },
      buttonStyle : {width : 140 , height : 45 ,  borderRadius : 25,
        backgroundColor : '#325cdd' , borderColor : "#fff" , borderWidth : 0.5 ,marginHorizontal : 6},
        bottomLink : {fontSize : 14 ,fontWeight : "bold",  color : "#ccc"},
        line : {flex : 1, height : 0.5, borderWidth : 0.3 , borderColor : "#ccc"}
    })
    export default SignUp
 