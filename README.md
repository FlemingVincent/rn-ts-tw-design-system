# React Native, Typescript, and Tailwind CSS Design System ✨

This is an example project, showcasing how a design system can be developed using React Native, Typescript, and Tailwind CSS.

## Motivation:

For the most part, this repository is a personal guide for creating a design system for a mobile application using React Native, TypeScript, and Tailwind CSS.

Additionally, this repository serves as a playground and canvas for me as I learned how to design components using Figma and transform them into strongly typed components in React Native.

Disclaimer:
This is not supposed to be a template or boilerplate. It is an opinionated guide that shows how to do some things in a certain way. You are not forced to do everything exactly as it is shown here, and if you decide or discover a better way to do so, do what works best for you and stay consistent.

## Quick Start

```
git clone https://github.com/FlemingVincent/rn-ts-tw-design-system.git

cd rn-ts-design-system

yarn install

yarn start
```

## Components/Features:

### Components

- Button - a strongly typed button component, allowing users to select a variant and a label, while also extending the default `TouchableOpacityProps`.

```tsx
import React, { FC } from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import tw from "@/lib/tailwind";

type ButtonVariant = "default" | "outline";

interface ButtonProps extends TouchableOpacityProps {
	intent?: ButtonVariant;
	label?: string;
	containerStyle?: TouchableOpacityProps["style"];
}

const Button: FC<ButtonProps> = ({
	intent = "default",
	label = "Button",
	containerStyle,
	...props
}) => {
	return (
		<TouchableOpacity
			style={[
				tw`flex w-full h-[50px] items-center justify-center rounded-[8px]`,
				intent === "default" && tw`bg-themeBlack dark:bg-themeWhite`,
				intent === "outline" &&
					tw`border-[1px] border-themeBlack dark:border-themeWhite`,
				containerStyle,
			]}
			{...props}
		>
			<Text
				style={[
					tw`text-body font-semibold`,
					intent === "outline"
						? tw`text-themeBlack dark:text-themeWhite`
						: tw``,
				]}
			>
				{label}
			</Text>
		</TouchableOpacity>
	);
};

export default Button;
```

- TextField - a strongly typed, custom TextInput component allowing users to select a variant and to display an icon or not. Additonally, this component extends the default `TextInputProps`.

```tsx
import React, { FC } from "react";
import { TextInput, TextInputProps, View, ViewProps } from "react-native";

import tw from "@/lib/tailwind";

type TextFieldVariant = "default" | "success" | "error";

interface TextFieldProps extends TextInputProps {
	intent?: TextFieldVariant;
	icon?: React.ReactNode;
	containerStyle?: ViewProps["style"];
}

const TextField: FC<TextFieldProps> = ({
	intent = "default",
	icon,
	containerStyle,
	...props
}) => {
	return (
		<View
			style={[
				tw`flex flex-row w-full h-[50px] items-center justify-between px-4 border-b`,
				intent === "default"
					? tw`border-b-themeBlack dark:border-b-themeWhite`
					: tw``,
				intent === "success" ? tw`border-b-themeGreen` : tw``,
				intent === "error" ? tw`border-b-darkRed` : tw``,
				containerStyle,
			]}
		>
			<TextInput
				style={[
					tw`flex flex-1 h-[50px] text-body text-themeAccent`,
					icon ? tw`pr-2` : tw``,
				]}
				placeholderTextColor={tw.color("themeAccent")}
				autoCapitalize="none"
				autoCorrect={false}
				{...props}
			/>
			{icon}
		</View>
	);
};

export default TextField;
```

### Features

- Custom Tailwind Configuration ([tailwind.config.js](https://github.com/FlemingVincent/rn-ts-tw-design-system/blob/main/tailwind.config.js)) - Which showcases how to properly create a custom theme using colors and different typographic styles.

- Light/Dark mode support ([App.tsx](https://github.com/FlemingVincent/rn-ts-tw-design-system/blob/main/App.tsx))

```tsx
useDeviceContext(tw, { withDeviceColorScheme: false });
const [colorScheme, toggleColorScheme, setColorScheme] = useAppColorScheme(tw);
```

- Absolute Imports ([tsconfig.json](https://github.com/FlemingVincent/rn-ts-tw-design-system/blob/main/tsconfig.json) & [babel.config.js](https://github.com/FlemingVincent/rn-ts-tw-design-system/blob/main/babel.config.js))

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
