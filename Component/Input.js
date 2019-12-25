import React, { Component } from 'react'
import { Input  ,Icon} from 'react-native-elements'
import {themeColor} from '../Constant/index'

export default CustomInput = ( props ) => 
  <Input
    containerStyle={ [ { width: '100%' ,alignSelf : 'center' , 
  }  ,props.containerStyle ]}
    inputContainerStyle={[ {borderColor : '#325cdd' ,  borderWidth : 1.5,borderBottomWidth : 1.5,
     backgroundColor : '#F5F6FA' , borderRadius : 19, 
     marginTop : 6 , height : props.height ? props.height :   42 , 
     width : props.width ? props.width :   '79%'  , alignSelf : 'center' }
      ,props.inputContainerStyle]}
    inputStyle={{ fontSize: 16 , color : "#325cdd" , paddingLeft : 12  }}
    keyboardType = {props.keyboardType  ? props.keyboardType : 'default'  }
    placeholder={props.placeholder}
    placeholderTextColor = {'#1E49CF'}
    value = {props.value}
    multiline = {props.multiline}
    secureTextEntry = {props.secureTextEntry}
    errorStyle={{ color: 'red' }}
    leftIcon={
      props.icon ? 
      <Icon
        name={props.icon}
        size={20  }
        type = {props.type}
        color='#325cdd'
      /> : null
    }
    leftIconContainerStyle = {{padding : 0}}
    {...props}
  />

