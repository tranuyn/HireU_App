import React from "react";
import { View, Image, TouchableOpacity, Text, StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

const Header = ({ name }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <View
        style={{
          width: 10,
          height: 40,
          backgroundColor: "#4B93CD",
          marginRight: 10,
          marginVertical: 10,
        }}
      />
      <Text style={{ fontSize: 13, fontFamily: "semiBold" }}>{name}</Text>
    </View>
  );
};
export default Header;
