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
				intent === "default" &&
					tw`border-b-themeBlack dark:border-b-themeWhite`,
				intent === "success" && tw`border-b-themeGreen`,
				intent === "error" && tw`border-b-darkRed`,
				containerStyle,
			]}
		>
			<TextInput
				style={[
					tw`flex flex-1 h-[50px] text-body text-themeAccent`,
					icon ? tw`pr-2` : tw`pr-0`,
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
