# React Native, Typescript, and Tailwind CSS Design System ✨

[![MIT License](https://img.shields.io/github/license/FlemingVincent/rn-ts-tw-design-system)](https://https://github.com/FlemingVincent/rn-ts-tw-design-system/blob/main/LICENSE)

This is an example project, showcasing how a design system can be developed using React Native, Typescript, and Tailwind CSS.

## Motivation:


For the most part, this repository is a personal guide for creating a design system for a mobile application using React Native, TypeScript, and Tailwind CSS.

Additionally, this repository serves as a playground and canvas for me as I learned how to design components using Figma and transform them into strongly typed components in React Native.

Disclaimer:
This is not supposed to be a template or boilerplate. It is an opinionated guide that shows how to do some things in a certain way. You are not forced to do everything exactly as it is shown here, and if you decide or discover a better way to do so, do what works best for you and stay consistent.

## Quick Start:


```
git clone https://github.com/FlemingVincent/rn-ts-tw-design-system.git

cd rn-ts-design-system

yarn install

yarn start
```

## Components/Features:


### Components


**Button**

A strongly typed button component, allowing users to select a variant and a label, while also extending the default `TouchableOpacityProps`.

[See example Button component](https://github.com/FlemingVincent/rn-ts-tw-design-system/blob/main/src/components/Button/Button.tsx)


**TextField** 

A strongly typed, custom TextInput component allowing users to select a variant and to display an icon or not. Additonally, this component extends the default `TextInputProps`.

[See example TextField component](https://github.com/FlemingVincent/rn-ts-tw-design-system/blob/main/src/components/TextField/TextField.tsx)


### Features


**Custom Tailwind Configuration**

This file showcases how to properly create a custom theme using colors and different typographic styles.

[See Tailwind configuration file](https://github.com/FlemingVincent/rn-ts-tw-design-system/blob/main/tailwind.config.js)


**Light/Dark mode support**

[See example of implementation](https://github.com/FlemingVincent/rn-ts-tw-design-system/blob/main/App.tsx)


**Absolute Imports**

Absolute imports should always be configured and used because it makes it easier to move files around and avoid messy import paths such as ```../../../Component```. Wherever you move the file, all the imports will remain intact. Here is how to configure it:


TypeScript (```tsconfig.json```)
```json
{
  "extends": "expo/tsconfig.base",
    "compilerOptions": {
      "strict": true,
      "baseUrl": ".",
      "paths": {
      "@/*": ["./src/*"]
      }
    }
}
```


Babel (```babel.config.js```)
```js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
	  {
	    alias: {
	      "@": "./src",
	    },
	  },
      ],
    ],
  };
};
```

## Libraries:

- Expo (https://docs.expo.dev/) - Expo is an open-source framework for apps that run natively on Android, iOS, and the web. Expo brings together the best of mobile and the web and enables many important features for building and scaling an app like live updates, instantly sharing your app, and web support.

- Tailwind React Native Classnames (https://github.com/jaredh159/tailwind-react-native-classnames) - A simple, expressive API for TailwindCSS + React Native, written in TypeScript

- React Native SVG, Transformer (https://github.com/kristerkari/react-native-svg-transformer) - Import SVG files in your React Native project the same way that you would in a Web application.
