![닥터차 로고](https://doctor-cha.com/assets/img/%E1%84%85%E1%85%A9%E1%84%80%E1%85%A9%E1%84%8B%E1%85%A1%E1%87%81%E1%84%80%E1%85%B3%E1%86%AF%E1%84%8C%E1%85%A1%E1%84%83%E1%85%B1.png)

# React Native UI

A React Native UI components for React Native app services of doctor-cha.

## Updates

- `v1.0.0` : 2021.06.21

---

## Development Guideline

This guideline assumes that you can run react-native project properly(includes simulator).

You need 3 tabs of terminal.

On the first tab,

```bash
git clone https://github.com/Autopedia/react-native-ui.git
cd react-native-ui
yarn install
yarn storybook
```

This will open storybook UI on your default browser.

On the second tab,

```bash
yarn start
```

This will start metro server.

On the third tab,

```bash
yarn ios #IOS
yarn android #Android
```

This will build the project and show storybook UI on your simulator.

---

## Test Guideline

To run whole test,

```bash
yarn test
```

To run specific test,

```bash
yarn test path/to/test/file
```

To update snapshot,

```bash
yarn test -u
```

---

## Rules

- NO DIRECT COMMIT : You MUST NOT commit directly to master/develop branch. It is forbidden by rules, but keep in mind.
- TEST AFTER IMPLEMENTATION : You need to run test everytime you implemented something. Your code should pass whole test unless you need to update the test code.

**If you updated any test code, you should describe which, and why you updated the test code at Pull Request.**
