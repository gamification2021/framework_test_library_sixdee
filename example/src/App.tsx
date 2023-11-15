import * as React from 'react';

import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { loadGame } from 'framework_test_library_sixdee';

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => { loadGame() }}>
        <Text>
          Click here
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
