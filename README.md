# scorecard
This repository is intented to be used for a demo

## Content
- [Features](#features)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [TODOS](#todos)


## Features
- Get JSON data from a fake APIs
- Display a "Challenge Win Notification" according to the JSON
- Localized in English and French
- Build on ES6/ES7
- npm to manage dependencies

## Installation
1. Download or clone the project
2. Run `npm install`
3. Run `react-native run-ios`

## Project Structure
This app is based on React-Native. The project app folder is organized as follow:
```
- /
|- android (Android project)
|- ios (iOS project)
|- node_modules (contains all npm modules used in the app: react, react-native, etc.)
|- src 
    |- apis (all managers handle API calls)
    |- assets
        |- img (contains all images used in the app)
        |- styles (contains base styles and colors used in the whole app like texts)
    |- components (This folder contains all reusable components, like Button or Text)
    |- helpers (utils using for stats, formatting, etc.)
    |- i18n (contains localized strings)
    |- models (all models representing the data)
    |- pages (contains all pages that the router use, each pages is built upon components)
```

## Dependencies
Dependencies are managed by NPM. These will be installed on `npm install`a the root of the project folder.

## TODOS
- [ ] Improve UI Texts
- [ ] Use Flux/Redux to handle state
- [ ] APIs calls and Models would come from a shared JavaScript SDK. That one would be then used by the Mobile Apps, by external APIs, the Web App, etc. 
- [ ] Use TypeScript
- [ ] App Icon
- [ ] Launch Screen
- [ ] Enhance Orientation Support
- [ ] UI and Unit Tests
- [ ] Add CI
- [ ] Add Code Quality badge

---

>**Copyright &copy; 2016 KBLNY.**

*Please provide attribution, it is greatly appreciated.*
