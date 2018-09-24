import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

import Forecast from '../components/Forecast'
import OpenWeatherMap from '../utils/open_weather_map'

class WeatherProject extends Component {
  constructor(props) {
    super(props)
    this.state = {
      zip: "",
      forecast: null
    }
  }

  _handleTextChange = event => {
    let zip = event.nativeEvent.text
    OpenWeatherMap.fetchForecast(zip)
      .then(forecast => {
        console.log(forecast)
        this.setState({forecast: forecast})
      })
    this.setState({
      zip: zip
    })
  }

  render() {
    let content = null
    if (this.state.forecast !== null) {
      content = (
        <Forecast 
          main={this.state.forecast.main}
          description={this.state.forecast.description}
          temp={this.state.forecast.temp}
        />
      )
    }
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          You input {this.state.zip}
        </Text>
        <Text>
          Content : 
        </Text>
        {
          content? content : <Text>null</Text>
        }
        <TextInput
          style={styles.input}
          onSubmitEditing={this._handleTextChange}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  input: {
    fontSize: 20,
    borderWidth: 2,
    padding: 2,
    height: 40,
    width: 100,
    textAlign: "center"
  }
})

export default WeatherProject