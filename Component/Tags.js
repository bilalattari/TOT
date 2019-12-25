import React, { Component } from 'react'
import { Text,TouchableOpacity} from 'react-native';
export default Tags = props => 
<TouchableOpacity {...props} style = {{padding : 8 , backgroundColor : props.selected  ? '#1AE5BE': '#D3DBDD'  
, height : 30, 
justifyContent : 'center' , alignItems : 'center' , borderRadius : 5 , margin : 3}}>
    <Text style = {{color : props.selected  ?'#1743CC' : null}}>{props.item}</Text>
   </TouchableOpacity>
