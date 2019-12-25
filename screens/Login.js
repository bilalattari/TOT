import React, { Fragment } from 'react';
import {
    StyleSheet,
    View,TouchableOpacity,ImageBackground,
    Text,ScrollView,Image
} from 'react-native';
import CustomInput from '../Component/Input'
import CustomButton from '../Component/Button'
import {Icon , Input , CheckBox} from 'react-native-elements'
import {themeColo, themeColor} from '../Constant/index'
import {Title} from '../Component/Heading'
 class Login extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      remember : false
    } 
  }
  static navigationOptions = {
    header: null,
};
    render() {
      const {navigation} = this.props
      let {remember} = this.state
        return (
              <ImageBackground source  = {require("../assets/cloudBg.png")} 
              style = {{flex : 1 }} resizeMode = {"contain"} >
                <ScrollView>
                <Image source = {require('../assets/logo.png')} 
                style = {{height : 85 , resizeMode : 'contain' , alignSelf : 'center' , marginTop : '12%'}} />
            <View style = {{marginTop  :15}}>
              <Text style = {{fontWeight : "bold" , textAlign : "center" , fontSize : 22 ,
              color : "#525352" }}>Welcome Back</Text>
              <Text style = {{ textAlign : "center" , fontSize : 15  }}>TOT a Complete world for your loveness</Text>
              </View>
              <View style = {{marginTop  :'11%'}}>
              <CustomInput height = {50} placeholder= {'Name'} type = {"font-awesome"}  icon = {"user"} />
              <CustomInput height = {50} placeholder= {'Password'} secureTextEntry = {true} type = {"font-awesome"}  icon = {"lock"} />
             <View style = {{flexDirection : "row" , justifyContent : "space-between" , width : "73%" , 
             alignSelf : "center"   , marginBottom: 25, }}>
               <TouchableOpacity
               onPress = {()=> this.setState({remember : !remember})}
               style = {{flexDirection: "row" , height :30 , alignItems : "center" }}>
                 {
                   remember ? 
                   <Icon type = {"ionicon"} name = {'ios-checkbox-outline'} 
                   color = {themeColor} size = {20} />
                   :
                   <Icon type = {"ionicon"} name = {"md-square-outline"} 
                   color = {themeColor} size = {22} />
                 }
                 <Text style = {{marginLeft : 4 , color : themeColor}}>Remember Me </Text>
                 </TouchableOpacity>
                 <TouchableOpacity style = {{justifyContent : "center" , }} >
                 <Text style = {{marginLeft : 4 , color : themeColor, marginBottom : 2 }}>Forgot Password?</Text>
                 </TouchableOpacity>
                 </View>
              </View>
                  <CustomButton title = {'Log in'} />
                </ScrollView>
              <TouchableOpacity style = {{ height : 30 ,}} onPress = {()=> this.props.navigation.navigate('CreateAccount')}>
                <Text style = {{alignSelf : 'center' , }}>Don't have an account ?
                 <Text style ={{ color : themeColor ,}}>  Sign Up</Text></Text>
                </TouchableOpacity>
                </ImageBackground>
        );
      }   
    }   
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
      inputContainer : {borderColor : '#323643' , backgroundColor : '#454B61' , borderRadius : 7 , 
      paddingLeft : 12 , marginVertical : 6 },
      buttonStyle : {width : 140 , height : 45 ,  borderRadius : 25,
        backgroundColor : '#323643' , borderColor : "#fff" , borderWidth : 0.5 ,marginHorizontal : 6},
        bottomLink : {fontSize : 14 ,fontWeight : "bold",  color : "#ccc"},
        line : {flex : 1, height : 0.5, borderWidth : 0.3 , borderColor : "#ccc"}
    })
    export default Login
 