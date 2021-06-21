![닥터차 로고](https://doctor-cha.com/assets/img/%E1%84%85%E1%85%A9%E1%84%80%E1%85%A9%E1%84%8B%E1%85%A1%E1%87%81%E1%84%80%E1%85%B3%E1%86%AF%E1%84%8C%E1%85%A1%E1%84%83%E1%85%B1.png)

# React Native UI

닥터차 앱을 위한 React Native UI 컴포넌트 라이브러리 입니다.

## 업데이트

- `v1.0.0` : 2021.06.21

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
