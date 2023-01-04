// React, React Native, Expo imports
import React from "react";
import {
	Text,
	View,
	SafeAreaView,
	ScrollView,
	TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";

// Tailwind CSS imports
import tw from "@/lib/tailwind";
import { useDeviceContext, useAppColorScheme } from "twrnc";

// Components
import Button from "@/components/Button/Button";
import TextField from "@/components/TextField/TextField";

// Icons, SVGs, etc.
import EyeSVG from "@/assets/eye.svg";
import EyeSlashSVG from "@/assets/eye-slash.svg";

export default function App() {
	useDeviceContext(tw, { withDeviceColorScheme: false });
	const [colorScheme, toggleColorScheme, setColorScheme] =
		useAppColorScheme(tw);

	// Toggle Visibility of Password
	const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
	const handlePasswordVisibility = () => {
		setIsPasswordVisible(!isPasswordVisible);
	};

	return (
		<View style={tw`flex flex-1 bg-themeWhite dark:bg-themeBlack`}>
			<StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
			<SafeAreaView style={tw`flex flex-1 mx-4`}>
				<ScrollView>
					<Text
						style={tw`text-largeTitle text-themeBlack dark:text-themeWhite font-bold pt-6`}
					>
						React Native, Typescript, and Tailwind CSS Design System ✨
					</Text>
					<Text style={tw`text-body text-themeAccent pt-4 pb-6`}>
						This is an example project, showcasing how a design system can be
						developed using React Native, Typescript, and Tailwind CSS.
					</Text>
					<Button
						intent="outline"
						label="Toggle Dark Mode"
						onPress={toggleColorScheme}
					/>
					<TextField
						placeholder="Password"
						secureTextEntry={!isPasswordVisible}
						icon={
							<TouchableOpacity onPress={handlePasswordVisibility}>
								{isPasswordVisible ? <EyeSVG /> : <EyeSlashSVG />}
							</TouchableOpacity>
						}
					/>
				</ScrollView>
			</SafeAreaView>
		</View>
	);
}
