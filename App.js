import React from 'react';
import {
  SafeAreaView, 
  StyleSheet,
    View} from 'react-native';
import MainContainer from './containers/MainContainer';


const App = () => {
  return (
    <>
      <SafeAreaView style={styles.pageBackground}>
          <View>
            <MainContainer />
          </View>
      </SafeAreaView>
    </>
  );
};

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
  },
});

export default App;
