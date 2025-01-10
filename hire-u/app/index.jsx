import React, { useState } from "react";
import MainContainer from "./components/BottomTabBar";
import AppLoading from 'expo-app-loading';
import useFonts from "./useFonts";

const index = () => {
  const [IsReady, SetIsReady] = useState(false);
  const LoadFonts = async () => {
    await useFonts();
  };
  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => SetIsReady(true)}
        onError={() => {}}
      />
    );
  }
  return <MainContainer />;
};

export default index;
