import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Font } from 'expo';

export default class App extends React.Component {
  state = {
    fontLoaded: false
  }

  async componentDidMount() {
    await Font.loadAsync({
      'NanumBarunGothic' : require('./assets/fonts/NanumBarunGothic.ttf'),
      'NanumBarunGothicBold': require('./assets/fonts/NanumBarunGothicBold.ttf'),
      'NanumBarunGothicLight': require('./assets/fonts/NanumBarunGothicLight.ttf'),
      'NanumBarunGothicUltraLight': require('./assets/fonts/NanumBarunGothicUltraLight.ttf')
    })
    this.setState({ fontLoaded: true })
  }
  render() {
    return (
      <View style={styles.container}>
        {
          this.state.fontLoaded ? (
            <Text style={styles.content}>
              Hello, world!
            </Text>
          ) : null
        }
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
    fontFamily: 'NanumBarunGothicBold',
    fontSize: 40,
    color: '#fff',
  }
})
