import React from 'react'
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native'
import AppButton from '../components/AppButton'

export default function WelcomeScreen (props) {
  return (
    <ImageBackground 
    blurRadius={10}
      style={styles.background}
      source={require('../assests/background.jpg')}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../assests/logo-red.png')}
        />

        <Text style={styles.tagline}> Sell What you Don't Need </Text>
      </View>

      <View style={styles.buttonContainer}>
        <AppButton title='Login' onPress={()=> console.log('tapped')} color="red" />
          <AppButton title="register"  />
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  registerButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#4ecdc4',
  },
  logo: {
    width: 100,
    height: 100,
    position: 'absolute',
    top: 70,
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
  buttonContainer:{
      padding:20,
      width:"100%"
  },
  tagline:{
      fontSize:25,
      fontWeight:"600",
      paddingVertical:20
  }
})
