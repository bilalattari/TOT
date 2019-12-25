import React, { Component } from 'react'
import {Text} from 'react-native'
export const  Heading = props => 
<Text style = {{fontWeight : props.normal ? 'normal' : "bold" , 
textAlign :props.align ? props.align  : "center" , fontSize : props.font ? props.font :  22 ,
color : "#3A3B46"  }}>{props.text}</Text>

export const  SubHeading = props => 
<Text style = {{ textAlign : props.align ? props.align  : "center" , 
fontSize : props.fontSize ? props.fontSize :   15 ,
color : props.color ? props.color :  null  , 
fontWeight : props.bold ? 'bold' : 'normal', 
paddingHorizontal : props.paddingLeft ? props.paddingLeft :  '4%'}}>
    {props.text}</Text>

export const  Title = props => 
<Text style = {{textAlign : "center" ,
fontSize : 18 ,
color : "#3A3B46" }}>{props.title}</Text>

