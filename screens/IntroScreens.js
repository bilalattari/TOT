import React, { Fragment } from 'react';
import {
    StyleSheet,View , Text,ScrollView,
    ImageBackground,Image,TouchableOpacity
} from 'react-native';
import {Heading , SubHeading} from '../Component/Heading'
import CustomButton from '../Component/Button'
import Tags from '../Component/Tags'
 class IntroScreens extends React.Component {
  constructor(props){
    super(props)
    this.state  = {
      selected : "",
      events : '',
      services : '',
      products : ''
    }
  }
  static navigationOptions = {
    header: null,
};
    render() {
        let tags = ['Abcdssadasd' , 'Abcds' , 'Abcdsda' , 'Abcds' ,'Abcds' ,
        'Abcds' ,'Abcdsas' ,  'Abcds' ,'Ab']
        return (
            <ScrollView style = {styles.container}>
                {/* <View style = {{ paddingVertical : 25}}>
                <Heading align = {'left'} text = {"Welcome to TOT"} />
                <SubHeading paddingLeft = {'0%'} align = {'left'} 
                text = {"User experience make things convinent and easy for you and other users, help us in making it customised for you! few steps and your will be onboard."} />
                </View>
                <SubHeading paddingLeft = {'0%'} align = {'left'}
                bold = {true} color = {"#3A3B46"}
                text = {"Click the type of your user activity"} />
                <View style = {styles.itemContainer}>
                     <Image style = {styles.image} source = {require('../assets/intro1.png')} />
                     <View style = {styles.textView}>
                     <Heading font = {20} align = {'left'} text = {"HERE TO SEEK"} />
                     <SubHeading paddingLeft = {'0%'} align = {'left'} 
                      text = {"SERVICES OR PRODUCT OFFERED BY OTHERS."} />
                         </View>
                </View>
                <View style = {[styles.itemContainer , {backgroundColor : '#F7EDF1'}]}>
                     <View style = {styles.textView}>
                     <Heading font = {20} align = {'left'} text = {"HERE TO OFFER "} />
                     <SubHeading paddingLeft = {'0%'} align = {'left'} 
                      text = {"SERVICES OR PRODUCT TO THE COMUNITY."} />
                         </View>
                     <Image style = {styles.image} source = {require('../assets/intro2.png')} />
                </View>
                <View style = {[styles.itemContainer , {backgroundColor : '#F2F2E3'}]}>
                     <Image style = {styles.image} 
                     source = {require('../assets/intro3.png')} />
                     <View style = {styles.textView}>
                     <Heading font = {20} align = {'left'} text = {"SEEK & OFFER"} />
                     <SubHeading paddingLeft = {'0%'} align = {'left'} 
                      text = {"SERVICES OR PRODUCT OFFERED BY OTHERS."} />
                         </View>
                </View> */}

                 {/* screen tracking */}
                 {/* <View style = {{ paddingVertical : 18}}>
                <Heading font = {20} align = {'left'} text = {"What services events & products"} />
                <SubHeading paddingLeft = {'0%'} align = {'left'} 
                text = {"What services events and products your intrests for your kids or for yourself will be in within your vesinity."} />
                </View>
                <SubHeading paddingLeft = {'0%'} align = {'left'}
                bold = {true} color = {"#3A3B46"}
                text = {"Click from each particular fields"} />
                <View style = {styles.tagContainer}>
                    <Heading normal = {true} align = {'left'} text = {'Events'} font = {20} />
                <View style = {[styles.tagView]}>
                {  tags.map((data , index)=>   
                <Tags onPress = {()=> this.setState({events : `${index}`})} 
                key = {index} selected = {this.state.events === `${index}` ? true : undefined} item = {data} />)}
                </View>
                </View>
                <View style = {styles.tagContainer}>
                    <Heading normal = {true} align = {'left'} text = {'Products'} font = {20} />
                <View style = {[styles.tagView]}>
                {  tags.map((data , index)=>   
                <Tags onPress = {()=> this.setState({products : `${index}`})} 
                key = {index} selected = {this.state.products === `${index}` ? true : undefined} item = {data} />)}
                </View>
                </View>
                <View style = {styles.tagContainer}>
                    <Heading normal = {true} align = {'left'} text = {'Services'} font = {20} />
                <View style = {[styles.tagView]}>
                {tags.map((data , index)=> 
                <Tags onPress = {()=> this.setState({services : `${index}`})} 
                key = {index} selected = {this.state.services === `${index}` ? true : undefined} item = {data} />)}
                </View>
                </View> */}


                <View style = {{flexDirection : 'row' , marginVertical : 12 , alignItems : 'center' }}>
                  <Image source = {require('../assets/avatar.png')} 
                  style = {{height : 75, width : 75 , resizeMode : 'contain' , borderRadius : 125 }} />
                  <View style = {{flex : 1 , padding : 4 , paddingLeft : 6}}>
                    <Heading align = {'left'} text = {'Thank you Salman'} font = {20} />
                    <SubHeading paddingLeft = {'0%'} align = {'left'} 
                    fontSize = {17} text = {'For helping us in making the future experience easy for you!'} />
                    </View>
                  </View>
                  <SubHeading paddingLeft = {'0%'}  
                    fontSize = {17} 
                    text = {'We the team TOT giving our best to provide the better secure healthy plateform for the future generations you may continue using application by pressing continue or few more step for tracking feature.'} />

                    <View style = {{flexDirection : "row" , justifyContent : 'space-around' , marginTop : 12}}>
                      <View>
                      <Image source = {require('../assets/Continue.png')} 
                      style = {{resizeMode : 'stretch' , height : 300 , width : 150 , backgroundColor : 'red'}}  />
                      <CustomButton title = {'Tracking'}
                      onPress = {()=> this.props.navigation.navigate('Tracking')} 
                      containerStyle = {{position : 'absolute' , bottom : 14 }}
                      buttonStyle = {{height : 40}} />
                      </View>
                      <View>
                      <Image source = {require('../assets/Continue.png')} 
                      style = {{resizeMode : 'stretch' , height : 300 , width : 150 , backgroundColor : 'red'}}  />
                      <CustomButton title = {'Continue'} 
                      containerStyle = {{position : 'absolute' , bottom : 14 }}
                      buttonStyle = {{height : 40}} />
                      </View>
                      </View>
                </ScrollView>
        );
      }   
    }   
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        paddingHorizontal : 19 ,
      },
      tagContainer : {backgroundColor : 'rgba(232, 235, 244, 0.3)' ,
      minHeight : 100, padding : 5, marginVertical : 4},
      tagView : {  borderRadius : 0 , elevation : 0 , flexDirection : 'row' , flexWrap : 'wrap'},
      textView : {flex : 1 , padding : 6 , justifyContent : 'center'},
      image : {width : '45%' , height : '100%' , resizeMode : 'stretch'},
      itemContainer : {height : 112 , borderRadius : 25, backgroundColor : "#E8EBF4" , 
      overflow : 'hidden',
      borderRadius : 12 , elevation : 1 , marginVertical : 5 , flexDirection : "row"}
    })
    export default IntroScreens
 