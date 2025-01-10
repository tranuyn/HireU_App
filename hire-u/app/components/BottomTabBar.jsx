import React, { useCallback, useState, useEffect } from "react";
import {
  Alert,
  Animated,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
} from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

// Import các icon
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

// Import các màn hình
import Home from "../screens/HomeScreen/Home";
import Interview from "../screens/InterviewScreen/Interview";
import Job from "../screens/JobScreen/Job";
import SocialNetwork from "../screens/SocialNetworkScreen/SocialNetwork";
import Webinar from "../screens/WebinarScreen/Webinar";

import InterviewDetailScreen from "../screens/InterviewScreen/InterviewDetailScreen/InterviewDetailScreen";
const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#4B93CD",
          height: 60,
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "#E7E7E7",
        tabBarIcon: ({ focused, color, size }) => {
          switch (route.name) {
            case "HomeScreen":
              return <AntDesign name="home" size={25} color={color} />;
            case "InterviewScreen":
              return <Ionicons name="storefront" size={25} color={color} />;
            case "JobScreen":
              return <MaterialIcons name="post-add" size={25} color={color} />;
            case "WebinarScreen":
              return (
                <Ionicons name="chatbubble-ellipses" size={25} color={color} />
              );
            case "SocialNetworkScreen":
              return <Ionicons name="person" size={25} color={color} />;
            default:
              return null;
          }
        },
        tabBarLabel: ({ focused, color }) => {
          let label = "";
          switch (route.name) {
            case "HomeScreen":
              label = "Trang chủ";
              break;
            case "InterviewScreen":
              label = "Phỏng vấn";
              break;
            case "JobScreen":
              label = "Việc làm";
              break;
            case "WebinarScreen":
              label = "Webinar";
              break;
            case "SocialNetworkScreen":
              label = "Mạng xã hội";
              break;
          }
          return focused ? (
            <Text style={{ color, fontSize: 12, marginBottom: 5 }}>
              {label}
            </Text>
          ) : null;
        },
      })}
    >
      <Tab.Screen name="HomeScreen" component={Home} />
      <Tab.Screen name="InterviewScreen" component={Interview} />
      <Tab.Screen name="JobScreen" component={Job} />
      <Tab.Screen name="WebinarScreen" component={Webinar} />
      <Tab.Screen name="SocialNetworkScreen" component={SocialNetwork} />
    </Tab.Navigator>
  );
}

export default function MainContainer() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="BottomBar" component={BottomTabs} />
        <Stack.Screen
          name="InterviewDetailScreen"
          component={InterviewDetailScreen}
        />
      </Stack.Navigator>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "regular",
  },
});
