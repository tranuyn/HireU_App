import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import các icon
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";

// Import các màn hình
import FindJobIcon from "../../assets/icons/FindJobIcon";
import InterviewIcon from "../../assets/icons/InterviewIcon";
import Home from "../screens/HomeScreen/Home";
import Interview from "../screens/InterviewScreen/Interview";
import Job from "../screens/JobScreen/Job";
import SocialNetwork from "../screens/SocialNetworkScreen/SocialNetwork";
import Webinar from "../screens/WebinarScreen/Webinar";
import FilterScreen from "../screens/InterviewScreen/FilterScreen";
import QuestionsScreen from "../screens/InterviewScreen/QuestionsScreen";
import JobDetails from "../screens/JobScreen/JobDetails";
import Profile from "../screens/HomeScreen/Profile";
import WebinarIcon from "../../assets/icons/WebinarIcon";

import AddExperience from "../screens/HomeScreen/AddExperience";
import JobsSaved from "../screens/JobScreen/JobSaved";
import RegistrationRules from "../screens/InterviewScreen/RegistrationRules";

import InterviewDetailScreen from "../screens/InterviewScreen/InterviewDetailScreen/InterviewDetailScreen";
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
function JobStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="JobList"
        component={Job}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="JobDetails"
        component={JobDetails}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="JobsSaved"
        component={JobsSaved}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#4B93CD",
          height: 65,
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "#E7E7E7",
        tabBarIcon: ({ focused, color, size }) => {
          switch (route.name) {
            case "HomeScreen":
              return <AntDesign name="home" size={25} color={color} />;
            case "InterviewScreen":
              return <InterviewIcon size={25} color={color} />;
            case "JobScreen":
              return <FindJobIcon size={25} color={color} />;
            case "WebinarScreen":
              return <WebinarIcon size={25} color={color} />;
            case "SocialNetworkScreen":
              return <Ionicons name="people-outline" size={25} color={color} />;
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
            <Text
              style={{
                color,
                fontSize: 13,
                marginBottom: 0,
                fontFamily: "medium",
                textAlign: "center",
              }}
            >
              {label}
            </Text>
          ) : null;
        },
      })}
    >
      <Tab.Screen name="HomeScreen" component={Home} />
      <Tab.Screen name="InterviewScreen" component={Interview} />
      <Tab.Screen name="JobScreen" component={JobStack} />
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
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Experience" component={AddExperience} />
        <Stack.Screen name="Filter" component={FilterScreen} />

        <Stack.Screen name="Questions" component={QuestionsScreen} />
        <Stack.Screen name="RegistrationRules" component={RegistrationRules} />
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
