import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

export default function Home() {
  return (
    <View>
        <Text style={styles.questionText}>
          Are you about to have an anxiety attack?
        </Text>
          <View style={styles.buttonContainer}>
          <TouchableHighlight underlayColor='Black'><View style={styles.button}><Text style={styles.buttonText}>Yes</Text></View></TouchableHighlight>
          <TouchableHighlight><View style={styles.button}><Text style={styles.buttonText}>No</Text></View></TouchableHighlight>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  questionText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'center',
    marginTop: 250,
    marginBottom: 30,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    width: 250,
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: 'white',
  },
  buttonText: {
    textAlign: 'center',
    padding: 15,
  },
});
