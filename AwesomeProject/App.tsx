import React from 'react';
import {NativeModules, StyleSheet, Button, View} from 'react-native';
import CalendarModule from './Modules/CalendarModule';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
});


const App = () => {

  const onPress = (): void => {
    console.log('We will invoke the native module here!');
    CalendarModule.createCalendarEvent('testName', 'testLocation');
  };

  return (
    <View style={styles.container}>
      <Button
        title="Click to invoke your native module!"
        color="#841584"
        onPress={onPress}
      />
    </View>
  );
};

export default App;
