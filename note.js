// import React from 'react'
// import { Image, StyleSheet, Text, View } from 'react-native'
// import { AppLoading, Asset, Font } from 'expo';

// import NanumBarunGothic from './constant/Fonts'
// import Images from './constant/Images'

// import WeatherProject from './screen/WeatherProject'

// export default class App extends React.Component {
//   state = {
//     isLoadingComplete: false
//   }

//   render() {
//     if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
//       return (
//         <AppLoading
//           startAsync={this._loadResourcesAsync}
//           onError={this._handleLoadingError}
//           onFinish={this._handleFinishLoading}
//         />
//       )
//     } else {
//       return (
//         <View style={styles.container}>
//           <WeatherProject />
//           <Image source={Images.partyJpeg} 
//             style={{width: '10%', height: '10%', backgroundColor: '#fff'}} 
//           />
//           <Image source={Images.partyJpeg} 
//             style={{width: 200, height: 200, resizeMode: 'contain', backgroundColor: '#fff'}} 
//           />
//           <Image source={Images.partyJpeg} 
//             style={{width: 200, height: 200, backgroundColor: '#fff'}} 
//           />

//           <Text style={styles.content}>
//             Hello, world!{'\n'}
//             <Text style={styles.smallText}>
//             Hello, world!{'\n'}
//             </Text>
//             <Text>
//             Hello, world!
//             </Text>
//           </Text>
//         </View>
//       )
//     }
    
//   }

//   _loadResourcesAsync = async () => {
//     return Promise.all([
//       Asset.loadAsync([
//         Images.partyJpeg
//       ]),
//       Font.loadAsync({
//         'NanumBarunGothic': NanumBarunGothic.normal.file,
//         'NanumBarunGothicBold': NanumBarunGothic.bold.file,
//         'NanumBarunGothicLight': NanumBarunGothic.light.file,
//         'NanumBarunGothicUltraLight': NanumBarunGothic.ultraLight.file
//       })
//     ])
//   }

//   _handleLoadingError = error => {
//     console.warn(error)
//   }

//   _handleFinishLoading = () => {
//     this.setState({
//       isLoadingComplete: true
//     })
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#7095CD',
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   content: {
//     fontFamily: NanumBarunGothic.bold.weight,
//     fontSize: 40,
//     color: '#fff',
//   },
//   smallText: {
//     fontFamily: NanumBarunGothic.ultraLight.weight,
//     fontSize: 40,
//     color: '#fff',
//   }
// })
