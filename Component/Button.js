import React, { Component } from 'react'
import { Button  , Icon } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient';
import {themeColor} from '../Constant/index'
export default CustomButton = props => 
<Button title={props.title}
icon={props.iconName ?
  <Icon
  style = {{padding : 6}}
  name={props.iconName}
  type = {'font-awesome'}
  size={25}
  containerStyle = {{paddingRight : 25}}
  color="white"
  /> : null
}
{...props}
titleStyle = {{fontWeight : '100' }}
containerStyle = {[{alignSelf : 'center' , width : '75%'  , } , props.containerStyle]}
buttonStyle = {[{backgroundColor : props.backgroundColor ? props.backgroundColor : themeColor , 
  height : props.height ? props.height : 46  , borderRadius : 19} ,props.buttonStyle ]}
/>
