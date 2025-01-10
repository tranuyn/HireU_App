import React from "react";
import { View, StyleSheet } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const IconInCircle = ({ name }) => {
  return (
    // Thêm return ở đây
    <View style={styles.iconContainer}>
      <MaterialCommunityIcons name={name} size={20} color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    backgroundColor: "#4B93CD",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    borderRadius: 30, // Thêm borderRadius để tạo hình tròn
    width: 30, // Chiều rộng
    height: 30, // Chiều cao
  },
});

export default IconInCircle;
