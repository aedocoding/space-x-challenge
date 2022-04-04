# SpaceX Challenge
## Table of Contents

- [SpaceX Challenge](#spacex-challenge)
  - [Table of Contents](#table-of-contents)
  - [About](#about)
  - [Limitations](#limitations)
  - [Setup](#setup)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Running on a simulator](#running-on-a-simulator)
    - [Running on your mobile device](#running-on-your-mobile-device)
  - [Tests](#tests)

## About
This project was created with [create-react-native-app](https://github.com/expo/create-react-native-app) with the typescript template.
No additional dependecies were added to complete the functionality of this project aside from `react-test-renderer` for the purpose of creating unit tests, and the app functions without it.

## Limitations
- This challenge was primarily developed using Expo Go on an iOS simulator for an iPhone 8, so testing it on other devices (e.g. Android device, larger screen devices) may yield some potential styling inconsistencies.
- Given the time limit of this challenge and requirements, all screens outlined in the mockup have been built but not all functionality has been added. The Create Launch screen for example, is missing the functionality to add an Image from device onto the screen as well as post a new launch to the API.
- Simple unit tests have been added and can be run as well but only cover rendering screens outlined in the app.
## Getting Started
This project was templated as a React Native TypeScript project using Expo. 
This Expo project is a managed workflow project.
Below, you'll find information about what you need to get set up, how to run the app on a mobile device, and other common tasks.

### Prerequisites

- [Node v14](https://nodejs.org)
- [NPM v6](https://docs.npmjs.com/cli/v7/commands/npm-link)
- [Expo CLI](https://docs.expo.io/versions/latest/workflow/expo-cli/)
- [Yarn](https://classic.yarnpkg.com/en/docs/install)
- 1 of the following:
  - [Xcode](https://developer.apple.com/xcode/)
  - [Android Studio](https://developer.android.com/studio#downloads)
  - [Expo Go](https://apps.apple.com/us/app/expo-go/id982107779) - Installed on a mobile device (iOS or Android) if you want to test the app on a physical device.

### Running on a simulator

- Clone [repository](https://bitbucket.org/unitymedical/alpha-medical-mobile/src/dev/) (dev) to your local machine
- CD into top level if not already in it and run `yarn install`
- Make sure you have XCode installed with an iPhone simulator set up on a Mac or Android Studio installed with an Android simulator set up.
- CD into top level if not already in it and run `expo start --ios` or `expo start --android`. The app will build itself locally onto your simulator along with any native code modules (e.g. Recurly-iOS).

### Running on a mobile device via Expo Go

- Clone [repository](https://bitbucket.org/unitymedical/alpha-medical-mobile/src/dev/) (dev) to your local machine
- CD into top level and run `yarn install`
- Run `expo start` and follow instructions to build the app on your mobile device (e.g. scan the QR code). Ensure you have Expo Go installed on your device. You may need to run `expo start --tunnel` if a connnection can't be opened via LAN.

## Tests
- The test suite can be ran by running `yarn test` from the top level of the repository
