import React, { Fragment } from 'react';
import {
    StyleSheet,ScrollView,View,TouchableOpacity,
    ImageBackground,Image , Text
} from 'react-native';
import {Heading , SubHeading , Title} from '../Component/Heading'
import CustomButton from '../Component/Button'
const IntroImage = [
    require('../assets/buySell.png'),
    require('../assets/search.png'),
    require('../assets/trackChild.png'),
    require('../assets/track.png'),
    require('../assets/map.png'),
    require('../assets/naviagation.png'),
]
 class Intro extends React.Component {
  constructor(props){
    super(props)
  }
  static navigationOptions = {
    header: null,
};
    render() {
        return (
              <ImageBackground source  = {require("../assets/infoBg.png")} 
              style = {{flex : 1 }} resizeMode = {"stretch"} >
                  <ScrollView>
                      <View style = {{padding : 16 , width : "87%" , backgroundColor : "#fff" , 
                      borderRadius : 12 , alignSelf : "center" , marginTop : "10%" , alignItems : "center"}}>
                        {
                            this.props.heading ?
                            <Heading font = {this.props.font ? this.props.font : null} text = {this.props.heading} /> 
                            : null
                        }  
                        {
                          this.props.subHeading ? 
                          <SubHeading text = {this.props.subHeading} />
                          : null
                        }
                          {
                              this.props.title ? 
                          <View style = {{marginVertical : 17}}>
                          <Title title = {this.props.title} />
                          </View> 
                          : null
                          }
                             {this.props.children}
                             {
                               this.props.description ? 
                          <View style = {{marginVertical : 15}}>
                          <SubHeading color = {'#1E49CF'} text = {this.props.description} />
                          </View> : null
                             }
                          {
                              this.props.btnTitle  ? 
                              <CustomButton  onPress = {()=>this.props.onButtonPress()} title = {this.props.btnTitle} containerStyle = {{marginTop: 15,}} />
                              : null
                          }
                          {
                              this.props.bottomLink ? 
                          <Text  style = {{color : '#1E49CF' , fontWeight : "bold" , marginTop : 15 }}>{this.props.bottomLink}</Text>
                              : 
                              null 
                          }
                          </View>
                      </ScrollView>
                  <Image source  = {IntroImage[this.props.image]} 
                  style = {{position : "absolute" , bottom : 0 , 
                  height : this.props.full ? '100%' : 200 , width : this.props.full ? "100%" : '82%'  , 
                  resizeMode : "stretch" , zIndex : -1200 , alignSelf : "center"}} />
                </ImageBackground>
        );
      }   
    }   
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
    })
    export default Intro
 