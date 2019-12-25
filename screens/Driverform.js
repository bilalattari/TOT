import React, { Fragment } from 'react';
import {
    StyleSheet,View , Text,
    ImageBackground,Image,TouchableOpacity
} from 'react-native';
import {Heading , SubHeading} from '../Component/Heading'
import Custominput from '../Component/Input'
import Intro from '../Container/IntroScreen'
import {Icon , Input , CheckBox} from 'react-native-elements'
import { Picker , DatePicker } from "native-base";

 class DriverInfo extends React.Component {
  constructor(props){
    super(props)
    this.state  = {
        selected : '',
        city : ''
      }
      this.setDate = this.setDate.bind(this);

  }
  static navigationOptions = {
    header: null,
};
setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }
onValueChange(value) {
    this.setState({
      selected: value
    });
  }
    render() {
        return (
            <Intro 
            image = {5} 
            full = {true}
            heading  ={'You are now connected with'}  
            font = {18}
            onButtonPress = {()=> this.props.navigation.navigate('CodeConfirmation')}
            bottomLink = {'Back'}
            btnTitle = {"Continue"}>
            <View style = {styles.infoContainer}>
                  <Image source = {require('../assets/avatar.png')} 
                  style = {{height : 75, width : 75 , resizeMode : 'contain' , borderRadius : 125 }} />
                  <View style = {{flex : 1 , padding : 3 , paddingLeft : 3}}>
                    <SubHeading paddingLeft = {'0%'} align = {'left'} 
                    fontSize = {14} text = {'Driver Name: Ahmed Mohsin'} />
                    <SubHeading paddingLeft = {'0%'} align = {'left'} 
                    fontSize = {14} text = {'Vehicle No: AYD:200'} />
                    <SubHeading paddingLeft = {'0%'} align = {'left'} 
                    fontSize = {14} text = {'Type:  Mazda Van'} />
                    <SubHeading paddingLeft = {'0%'} align = {'left'} 
                    fontSize = {14} text = {'Driver ID: 26421'} />
                    </View>
                  </View>
                <Heading normal = {true}  font = {18} text = {'Enter your Child Details'} />
                <Custominput placeholder = {'Child Name'} width = {"95%"} />
                <View style = {styles.pickerView}>
              <Picker
              placeholderIconColor = {"#0635C9"}
              mode="dropdown"
              style={{ width: '70%' , fontSize : 10 , color  : '#325cdd' , }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="School/Institute" value="" />
            </Picker>
                </View>
                <Custominput placeholder = {'Class'} width = {"95%"} />
                <Custominput keyboardType = {'number-pad'} placeholder = {'Emergency Contact Number'} width = {"95%"} />
                <View style = {styles.pickerView}>
                <DatePicker
            defaultDate={new Date(2018, 4, 4)}
            minimumDate={new Date(2018, 1, 1)}
            maximumDate={new Date(2018, 12, 31)}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="Select date"
            textStyle={{ color: "green" }}
            placeHolderTextStyle={{ color: "#325cdd" }}
            onDateChange={this.setDate}
            disabled={false}
            />
                </View>
                <View style = {{flexDirection : 'row' , width : '88%'}}>
                    <View style = {{flex : 1}}>
                    <View style = {[styles.pickerView , {width : '99%'}]}>
              <Picker
              placeholderIconColor = {"#0635C9"}
              mode="dropdown"
              style={{ width: '70%' , fontSize : 10 , color  : '#325cdd' , }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Sex" value="" />
            </Picker>
                </View>
                        </View>
                        <View style = {{flex : 1}}>
                             <View style = {[styles.pickerView , {width : '99%'}]}>
              <Picker
              placeholderIconColor = {"#0635C9"}
              mode="dropdown"
              style={{ width: '70%' , fontSize : 10 , color  : '#325cdd' , }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Alarm" value="" />
            </Picker>
                </View>
                        </View>
                    </View>
            </Intro>
        );
      }   
    }   
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
      pickerView : {borderColor : '#325cdd' , borderWidth : 1.5, alignItems : "center",
      backgroundColor : '#F5F6FA' , borderRadius : 19,  flexDirection : "row" ,
      marginTop : 6 , height : 42 , width : '88%' , alignSelf : 'center' },
      infoContainer : {flexDirection : 'row' , marginVertical : 12 , padding : 5, borderRadius : 12,
      alignItems : 'center' , backgroundColor : '#F5F6FA' , width : '100%' }
    })
    export default DriverInfo
 