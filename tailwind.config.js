/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [],
	theme: {
		extend: {
			colors: {
				// iOS light
				lightRed: "#ff3b30",
				lightOrange: "#ff9500",
				lightYellow: "#ffcc00",
				lightGreen: "#34c759",
				lightTeal: "#5ac8fa",
				lightBlue: "#007aff",
				lightIndigo: "#5856d6",
				lightPurple: "#af52de",
				lightPink: "#ff2d55",
				lightGray: "#8e8e93",
				lightGray2: "#aeaeb2",
				lightGray3: "#c7c7cc",
				lightGray4: "#d1d1d6",
				lightGray5: "#e5e5ea",
				lightGray6: "#f2f2f7",
				// iOS dark
				darkRed: "#ff453a",
				darkOrange: "#ff9f0a",
				darkYellow: "#ffd60a",
				darkGreen: "#30d158",
				darkTeal: "#64d2ff",
				darkBlue: "#0a84ff",
				darkIndigo: "#535ce6",
				darkPurple: "#bf5af2",
				darkPink: "#ff2d55",
				darkGray: "#8e8e93",
				darkGray2: "#636366",
				darkGray3: "#48484a",
				darkGray4: "#3a3a3c",
				darkGray5: "#2c2c2e",
				darkGray6: "#1c1c1e",
				// Theme
				themeBlack: "#0a0a0a",
				themeAccent: "#8e8e93",
				themeWhite: "#f2f2f7",
				themeGreen: "#2cd278",
			},
			fontSize: {
				caption2: [
					"11px",
					{
						lineHeight: "13px",
						letterSpacing: "0.07px",
					},
				],
				caption1: [
					"12px",
					{
						lineHeight: "16px",
					},
				],
				footnote: [
					"13px",
					{
						lineHeight: "18px",
						letterSpacing: "-0.08px",
					},
				],
				subheadline: [
					"15px",
					{
						lineHeight: "20px",
						letterSpacing: "-0.24px",
					},
				],
				callout: [
					"16px",
					{
						lineHeight: "21px",
						letterSpacing: "-0.32px",
					},
				],
				body: [
					"17px",
					{
						lineHeight: "22px",
						letterSpacing: "-0.41px",
					},
				],
				headline: [
					"17px",
					{
						lineHeight: "22px",
						letterSpacing: "-0.41px",
					},
				],
				title3: [
					"20px",
					{
						lineHeight: "25px",
						letterSpacing: "0.38px",
					},
				],
				title2: [
					"22px",
					{
						lineHeight: "28px",
						letterSpacing: "0.35px",
					},
				],
				title1: [
					"28px",
					{
						lineHeight: "34px",
						letterSpacing: "0.36px",
					},
				],
				largeTitle: [
					"34px",
					{
						lineHeight: "41px",
						letterSpacing: "0.37px",
					},
				],
			},
		},
	},
	plugins: [],
};
