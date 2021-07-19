<img src="https://image.doctor-cha.com/assets/SquareLogo-filled.png" width=120 />

# React Native UI ![CI](https://github.com/Autopedia/react-native-ui/actions/workflows/main.yml/badge.svg) [![codecov](https://codecov.io/gh/Autopedia/react-native-ui/branch/master/graph/badge.svg?token=982D9YJDJI)](https://codecov.io/gh/Autopedia/react-native-ui)

닥터차 앱을 위한 React Native UI 컴포넌트 라이브러리 입니다.

## 업데이트

- `v1.0.0` : 2021.06.21
- `v1.1.0` : 2021.06.25 닥터차 2.0용 UI 업데이트 (1차)
- `v1.2.0` : 2021.07.19 닥터차 2.0용 UI 패키징

---

## 사용 가이드라인

React Native UI를 사용할 프로젝트에서 설정하세요.

1. [구글 Fonts](https://fonts.google.com/specimen/Noto+Sans+KR)에서 NotoSansKR 폰트를 다운로드합니다. (우측 상단 Download family)
2. `src/assets/fonts`폴더에 다운로드한 폰트파일을 넣습니다.
3. `react-native.config.js`을 다음과 같이 설정합니다.

```javascript
module.exports = {
  assets: ['./src/assets/fonts/'],
};
```

4. `react-native link` 명령어를 실행합니다.

---

## 개발 가이드라인

이 가이드라인은 당신이 React Native 개발 환경을 정상적으로 구동시킬 수 있다고 가정합니다.

총 3개의 터미널 탭이 필요합니다.

첫번째 탭에 하단의 명령어를 실행하세요.

```bash
git clone https://github.com/Autopedia/react-native-ui.git
cd react-native-ui
yarn install
yarn storybook
```

성공적으로 실행되었다면, 브라우저에 storybook UI가 열립니다.

두번째 탭에 다음과 같이 명령어를 실행하세요.

```bash
yarn start
```

해당 명령어는 React Native metro 서버를 실행합니다.

마지막 탭에 다음과 같이 명령어를 실행하세요.

```bash
yarn ios #IOS
yarn android #Android
```

이 명령어는 프로젝트를 빌드하여 시뮬레이터에 storybook UI를 실행합니다.

---

## 테스트 가이드라인

모든 테스트 코드를 실행하려면,

```bash
yarn test
```

특정한 테스트 코드를 실행하려면,

```bash
yarn test path/to/test/file
```

테스트 스냅샷을 업데이트 하려면,

```bash
yarn test -u
```

---

## 규칙

- master/develop 브랜치에 직접 커밋 금지. 반드시 다른 브랜치에 작업하시고 PR을 만들어주세요.
- 반드시 개발 후에 테스트 해주세요. 테스트 코드를 업데이트하지 않는 한, 모든 테스트를 통과해야합니다.
- 만일 테스트 코드를 업데이트 했다면 어떤 테스트를 수정했는지, 왜 수정했는지를 PR에 기술해주세요.
