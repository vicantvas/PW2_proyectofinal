import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import {Button,Image, Text} from 'react-native-elements';
import image from '../assets/logo.png'


class MainScreen extends Component {
  
  constructor() {
    super();
    console.ignoredYellowBox = ['Setting a timer'];
  }
  componentDidMount() { 
  }
  render() {
    return (
        <View style={styles.container}>    
            <View style={{alignItems: 'center',justifyContent: 'center'}}>
              <Text h3>Biblioteca personal</Text>
            </View>    
            <Image
            source={image}
            style={styles.imagen}
                />
        <View style={styles.container}>  
            <Button
            style={styles.boton}
            large
            backgroundColor={'#222222'}
            rightIcon={{name: 'arrow-right',type: 'font-awesome',style: {marginRight: 1,fontSize: 28}}}
            title='Siguiente'
            onPress={() => {
                this.props.navigation.navigate('Board', {});
                    }} />
         </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingBottom: 22
  },
imagen: {
    padding: 10,
    width: 300,
    height: 300, 
    left: '7%',
    marginBottom: 40,
    marginTop: 20
  },
  boton: {
    position: 'absolute',  
    width: 100,  
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default MainScreen;