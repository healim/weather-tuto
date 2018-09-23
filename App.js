import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.content}>Hello world!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7095CD',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    fontSize: 40,
    color: '#fff'
  }
})
