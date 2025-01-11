import React, { useState } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
  Modal,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";
import Checkbox from "expo-checkbox";

const InterviewCard = ({ interview, professional }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const [selectedTime, setSelectedTime] = useState();
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const navigateToDetail = () => {
    navigation.navigate("InterviewDetailScreen", {
      interview: interview,
      professional: professional,
    });
  };
  const handleTermsPress = () => {
    setModalVisible(false);
    navigation.navigate("RegistrationRules");
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
          <TouchableOpacity
            style={styles.registerButton}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.registerText}>Đăng ký</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)} // Đóng modal khi nhấn nút quay lại
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              Bạn có chắc muốn đăng ký phỏng vấn?
            </Text>
            <Text style={styles.registerText}>
              Chọn ca phỏng vấn bạn muốn đăng ký
            </Text>
            <Picker
              numberOfLines={1}
              fontSize={13}
              fontFamily="medium"
              selectedValue={selectedTime}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedTime(itemValue)
              }
            >
              <Picker.Item label="9:00" value="9:00" />
              <Picker.Item label="9:30" value="9:30" />
              <Picker.Item label="10:30" value="10:30" />
              <Picker.Item label="13:00" value="13:00" />
              <Picker.Item label="14:30" value="14:30" />
              <Picker.Item label="16:30" value="16:30" />
            </Picker>

            <TouchableOpacity
              style={[
                styles.registerButton,
                {
                  flexDirection: "column",
                  borderColor: "#9F9999",
                  marginBottom: 10,
                },
              ]}
            >
              <Text style={[styles.registerText, { color: "#9F9999" }]}>
                Tải CV tại đây
              </Text>
              <Text style={[styles.registerText, { color: "#9F9999" }]}>
                (không bắt buộc)
              </Text>
            </TouchableOpacity>

            <View style={styles.checkboxContainer}>
              <Checkbox
                disabled={false}
                color="#4B93CD"
                value={toggleCheckBox}
                onValueChange={(newValue) => setToggleCheckBox(newValue)}
              />
              <Text style={[styles.text, { marginLeft: 15 }]}>
                Tôi đồng ý với{" "}
                <Text
                  style={[styles.text, { color: "#4B93CD" }]}
                  onPress={handleTermsPress}
                >
                  điều khoản và quy định tham gia phỏng vấn
                </Text>{" "}
                của HireU
              </Text>
            </View>
            <View style={[styles.namngang, { justifyContent: "flex-end" }]}>
              <TouchableOpacity
                style={styles.huy}
                onPress={() => setModalVisible(false)}
              >
                <Text style={[styles.registerText, { color: "#FF898B" }]}>
                  Hủy
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.dki}
                onPress={() => {
                  alert("Đăng ký phỏng vấn thành công");
                  setModalVisible(false);
                }}
              >
                <Text style={styles.registerText}>Đăng ký</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
    borderWidth: 1,
    borderColor: "#4B93CD",
    alignItems: "center",
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
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Nền mờ
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 15,
    fontFamily: "bold",
    color: "#00B743",
    marginBottom: 10,
    borderBottomColor: "#000",
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  registerText: {
    color: "#4B93CD",
    fontSize: 14,
    fontFamily: "semiBold",
    marginRight: 5,
  },
  registerButton: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 15,
    borderWidth: 1, // Đặt độ dày của đường viền
    borderColor: "#4B93CD",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 30, // Màu sắc của đường viền
  },
  namngang: {
    flexDirection: "row",
    alignItems: "center",
  },
  huy: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 15,
    borderWidth: 1, // Đặt độ dày của đường viền
    borderColor: "#FF898B",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginRight: 20,
  },
  dki: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 15,
    borderWidth: 1, // Đặt độ dày của đường viền
    borderColor: "#4B93CD",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  text: {
    fontSize: 13,
    fontFamily: "regular",
    color: "#2E2D2D",
  },
});

export default InterviewCard;
