# weather-tuto
리액트 네이티브 수업 참여

## 노트
- custom font 사용 : [나눔바른고딕][1]
  - [expo custom font][2]
    - 앱에 폰트 불러올 때 `componentDidMount()` 사용
    - 예제에서 폰트 로드 되었는지 확인하는 방식 번거로움 : [custom font 사용하기][5] gist에 정리
  - `<View />`에는 font 관련한 Style Props 쓰지 않는다
    - `fontFamily,fontSize, ...` 에러는 안 나는데 warning 뜸
    - `<div style={{fontSize: ...} />` 처럼 container에 전체 적용될 폰트 설정하려고 했는데 이런 식으로 안 쓰는 듯
      - [ ] ?global style 어떻게 적용하는지
        - cf. styled-components에서 injectionGlobal 
          - https://www.styled-components.com/docs/api#createglobalstyle
          - > The injectGlobal API was removed and replaced by createGlobalStyle in styled-components v4.
- 이미지 넣기 `<Image />`
  - 사용한 이미지 : https://media.giphy.com/media/12XTNObsY1pWQU/giphy.gif
  - 이슈
    - [ ] `.gif` 사용 안 된다 (지원 안 하는 확장자?)
      - [ ] 리액트 문서를 읽자 [GIF and WebP support on Android][3]
    - [ ] 이미지 사이즈 설정 
      ```js
      // case1
      // => 웹에서 쓰던 것처럼 이미지 크기 기준으로 % 계산될 줄 알았는데
      // 스크린 사이즈 기준으로 % 계산된다
      <Image source={Images.partyJpeg} 
            style={{width: '10%', height: '10%', backgroundColor: '#fff'}} 
      />
      // case2
      // => 잘리는게 싫어서 찾아보니까 resizeMode props 설정 가능
      // 이건 가로가 긴 이미지여서 width, height 동일하게 설정하니까
      // 남는 여백에 backgroundColor 보여짐
      <Image source={Images.partyJpeg} 
        style={{width: 200, height: 200, resizeMode: 'contain', backgroundColor: '#fff'}} 
      />
      //case3
      // => resizeMode 설정 안 하면 그 크기 만큼만 잘려서 보여짐
      // 그래서 backgroundColor 안 먹음
      <Image source={Images.partyJpeg} 
        style={{width: 200, height: 200, backgroundColor: '#fff'}} 
      />
      ```
      ![image-size-simulator][4]
    - [ ] @2x, @3x... 등등 이미지 assets 어떻게 쓰는지도 + svg icon system
      - [ ] [Images][6] 


----
[1]: https://hangeul.naver.com/font
[2]: https://docs.expo.io/versions/v30.0.0/guides/using-custom-fonts.html#using-custom-fonts
[3]: https://facebook.github.io/react-native/docs/image#gif-and-webp-support-on-android
[4]: note/image-size.jpg
[5]: https://gist.github.com/healim/7174d6caed3a48028247f83ee1ff3c79
[6]: https://facebook.github.io/react-native/docs/images