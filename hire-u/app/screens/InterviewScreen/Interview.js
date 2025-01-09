import * as React from "react";
import { View, Text, useWindowDimensions, StyleSheet } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import Recommendation from "./RecommendationScreen/RecommendtionScreen";

// Component cho các tab
const RecommendationRoute = () => <Recommendation />;
const QuestionBankRoute = () => (
  <View style={styles.scene}>
    <Text>Ngân hàng câu hỏi</Text>
  </View>
);
const AlbumsRoute = () => (
  <View style={styles.scene}>
    <Text>Lịch phỏng vấn</Text>
  </View>
);

const renderScene = SceneMap({
  recommendation: RecommendationRoute,
  albums: AlbumsRoute,
  questionBank: QuestionBankRoute,
});

// Data cho routes
const routes = [
  { key: "recommendation", title: "Gợi ý cho bạn" },
  { key: "albums", title: "Lịch phỏng vấn" },
  { key: "questionBank", title: "Ngân hàng câu hỏi" },
];

const Interview = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);

  // Custom TabBar
  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={styles.indicator}
      style={styles.tabBar}
      labelStyle={styles.label}
      activeColor="#000" // Màu chữ khi active
      inactiveColor="#737373" // Màu chữ khi không active
      pressColor="transparent"
      renderLabel={({ route, focused }) => (
        <View style={styles.labelContainer}>
          <Text style={[styles.label, { fontWeight: focused ? "600" : "400" }]}>
            {route.title}
          </Text>
        </View>
      )}
    />
  );

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={renderTabBar}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scene: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
  },
  tabBar: {
    backgroundColor: "white",
    elevation: 0, // Remove shadow on Android
    shadowOpacity: 0, // Remove shadow on iOS
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
    height: "auto",
  },
  indicator: {
    backgroundColor: "#4B93CD",
    height: 3,
    borderRadius: 3,
    marginBottom: -1,
  },
  labelContainer: {
    flex: 1,
    alignItems: "center", // Căn giữa chữ theo chiều ngang
    justifyContent: "center",
    textAlign: "center",
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    textTransform: "none",
    textAlign: "center",
  },
});

export default Interview;
