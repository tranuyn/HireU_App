import React from "react";
import { View, Image, TouchableOpacity, Text, StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

const InterviewCard = ({ interview, professional }) => {
  const navigation = useNavigation();
  const navigateToDetail = () => {
    navigation.navigate("InterviewDetailScreen", {
      interview: interview,
      professional: professional,
    });
  };
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={navigateToDetail}>
      <Image source={professional.imageUrl[0]} style={styles.avatar} />
      <View style={styles.textContainer}>
        <View style={styles.textLeft}>
          <Text style={styles.title}>{interview.title}</Text>
          <Text style={styles.subtitle}>
            {professional.name} {interview.company}
          </Text>
          <View style={styles.languageContainer}>
            {interview.language.map((item) => (
              <View key={item} style={styles.languageItem}>
                <Text style={styles.languageText}>{item}</Text>
              </View>
            ))}
          </View>
          <View style={styles.rowLayoutContainer}>
            <View style={styles.rowLayout}>
              <AntDesign name="calendar" size={16} color="#4B93CD" />
              <Text style={styles.date}>{interview.date}</Text>
            </View>
            <View style={styles.rowLayout}>
              <AntDesign name="clockcircleo" size={16} color="#4B93CD" />
              <Text style={styles.date}>{interview.time} phút</Text>
            </View>
          </View>
        </View>
        <View style={styles.textRight}>
          <Text style={styles.remainingText}>
            Số lượng còn lại: {interview.conlai}
          </Text>
          <TouchableOpacity style={styles.registerButton}>
            <Text style={styles.registerText}>Đăng ký</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: "white",
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: "#5f5d5d",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    flexDirection: "row",
    marginLeft: 10,
  },
  textLeft: {
    flex: 2,
    justifyContent: "space-between",
  },
  textRight: {
    width: 100,
    alignItems: "flex-end",
    justifyContent: "space-between",
    marginLeft: 5,
  },
  title: {
    fontSize: 14,
    fontFamily: "bold",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 13,
    fontFamily: "regular",
    color: "#6D6C6C",
    marginBottom: 5,
  },
  remainingText: {
    fontSize: 13,
    color: "#4B93CD",
    fontFamily: "medium",
  },
  registerButton: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 15,
    borderWidth: 1, // Đặt độ dày của đường viền
    borderColor: "#4B93CD", // Màu sắc của đường viền
  },
  registerText: {
    color: "#4B93CD",
    fontSize: 14,
    fontFamily: "semiBold",
  },
  languageContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 5,
  },
  languageItem: {
    backgroundColor: "#D3EEFF",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 10,
    marginRight: 6,
    marginBottom: 5,
  },
  languageText: {
    fontSize: 13,
    fontFamily: "regular",
    color: "#4B93CD",
  },
  rowLayoutContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    marginTop: 10,
  },
  rowLayout: {
    flexDirection: "row",
    alignItems: "center",
  },
  date: {
    fontSize: 12,
    fontFamily: "regular",
    color: "#6D6C6C",
    marginLeft: 5,
  },
});

export default InterviewCard;
