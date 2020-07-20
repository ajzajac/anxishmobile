import React from 'react';
import {
  SafeAreaView, 
  StyleSheet,
   ScrollView,
    View,
     Text} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <>
      <SafeAreaView style={styles.pageBackground}>
          <View >
            <Text style={styles.titleText}>anx-ish</Text>
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
  }
});

export default App;
