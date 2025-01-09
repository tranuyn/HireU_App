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

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

// function HomeStack() {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       <Stack.Screen
//         name="HomeScreen"
//         component={Home}
//         options={{ headerShown: false }}
//       />
//     </Stack.Navigator>
//   );
// }

// const InterviewStack = () => {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="InterviewScreen" component={Interview} />
//     </Stack.Navigator>
//   );
// };

// const JobStack = () => {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="JobScreen" component={Job} />
//     </Stack.Navigator>
//   );
// };

// function WebinarStack() {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="WebinarScreen" component={Webinar} />
//     </Stack.Navigator>
//   );
// }

// function SocialNetworkStack() {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       <Stack.Screen
//         name="SocialNetworkScreen"
//         component={SocialNetwork}
//       />
//     </Stack.Navigator>
//   );
// }

// const _renderIcon = (routeName, selectedTab) => {
//   let icon = "";

//   switch (routeName) {
//     case "HomeScreen": // Home
//       return (
//         <AntDesign
//           name="home"
//           size={25}
//           color={routeName === selectedTab ? "white" : "#E7E7E7"}
//         />
//       );
//     case "InterviewScreen": // Store
//       return (
//         <Ionicons
//           name="storefront"
//           size={25}
//           color={routeName === selectedTab ? "white" : "#E7E7E7"}
//         />
//       );
//     case "JobScreen": // Post
//       return (
//         <MaterialIcons
//           name="post-add"
//           size={25}
//           color={routeName === selectedTab ? "white" : "#E7E7E7"}
//         />
//       );
//     case "title4": // Chat
//       return (
//         <Ionicons
//           name="chatbubble-ellipses"
//           size={25}
//           color={routeName === selectedTab ? "white" : "#E7E7E7"}
//         />
//       );
//     case "title5": // Profile
//       return (
//         <Ionicons
//           name="person"
//           size={25}
//           color={routeName === selectedTab ? "white" : "#E7E7E7"}
//         />
//       );
//     default:
//       return null; // Trả về null nếu không khớp với bất kỳ route nào
//   }
// };

// const getTabLabel = (routeName) => {
//   switch (routeName) {
//     case "HomeScreen":
//       return "Trang chủ";
//     case "InterviewScreen":
//       return "Phỏng vấn";
//     case "JobScreen":
//       return "Việc làm";
//     case "title4":
//       return "Webinar";
//     case "title5":
//       return "Mạng xã hội";
//     default:
//       return "";
//   }
// };

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
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="BottomBar" component={BottomTabs} />
      </Stack.Navigator>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  shawdow: {
    shadowColor: "#DDDDDD",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  button: {
    flex: 1,
    justifyContent: "center",
  },
  btnCircleUp: {
    width: 70,
    height: 70,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    bottom: 40,
    shadowColor: "#4B93CD",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: "gray",
  },
  tabbarItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 30,
    height: 30,
  },
});
