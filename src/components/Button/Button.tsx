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
					intent === "outline" && tw`text-themeBlack dark:text-themeWhite`,
				]}
			>
				{label}
			</Text>
		</TouchableOpacity>
	);
};

export default Button;
