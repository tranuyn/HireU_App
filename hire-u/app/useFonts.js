import * as Font from "expo-font";

export default useFonts = async () =>
  await Font.loadAsync({
    semiBold: require("../assets/fonts/Asap-SemiBold.ttf"),
    semiBoldItalic: require("../assets/fonts/Asap-SemiBoldItalic.ttf"),
    medium: require("../assets/fonts/Asap-Medium.ttf"),
    mediumItalic: require("../assets/fonts/Asap-MediumItalic.ttf"),
    light: require("../assets/fonts/Asap-Light.ttf"),
    lightItalic: require("../assets/fonts/Asap-LightItalic.ttf"),
    regular: require("../assets/fonts/Asap-Regular.ttf"),
    italic: require("../assets/fonts/Asap-Italic.ttf"),
    bold: require("../assets/fonts/Asap-Bold.ttf"),
  });
