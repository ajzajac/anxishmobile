import React, { Component } from 'react'
import { Text, View, SafeAreaView, StyleSheet } from 'react-native'
import Home from '../components/Home'

export default class MainContainer extends Component {
    render() {
        return (
            <SafeAreaView>
                <View>
                 <Home/>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    pageBackground: {
      backgroundColor: 'peachpuff',
      flex: 1,
    },
    titleText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 70,
      textAlign: 'center',
      marginTop: 300,
    }
  });