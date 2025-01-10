import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  useWindowDimensions,
  Modal,
} from "react-native";
import Checkbox from "expo-checkbox";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { TabView, TabBar } from "react-native-tab-view";
import IconInCircle from "../../../components/IconInCircle";
import styles from "./style";
import Detail from "./DetailScreen";
import Professional from "./ProfessionalTab";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";

const InterviewDetailScreen = ({ route }) => {
  const { interview, professional } = route.params;
  const navigation = useNavigation();
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTime, setSelectedTime] = useState();
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  //   const selectFile = async () => {
  //     try {
  //       const res = await DocumentPicker.pick({
  //         allowMultiSelection: false, // Cho phép chọn nhiều file hay không
  //         type: [DocumentPicker.types.images, DocumentPicker.types.pdf], // Các loại file cho phép
  //       });
  //       setFile(res[0].name);
  //     } catch (err) {
  //       if (DocumentPicker.isCancel(err)) {
  //         Alert.alert("Người dùng đã hủy chọn file");
  //       } else {
  //         Alert.alert("Lỗi", err.message);
  //       }
  //     }
  //   };
  const handleTermsPress = () => {
    setModalVisible(false); 
    navigation.navigate('RegistrationRules');
  };
  const InterviewRoute = () => {
    return (
      <View style={styles.scene}>
        <Detail interview={interview} professional={professional} />
      </View>
    );
  };

  const ProfessionalRoute = () => {
    return (
      <View style={styles.scene}>
        <Text>Thông tin chuyên gia</Text>
        {/* Thêm nội dung tab chuyên gia */}
      </View>
    );
  };

  const [routes] = React.useState([
    { key: "interview", title: "Thông tin phỏng vấn" },
    { key: "professional", title: "Chuyên gia" },
  ]);

  const renderScene = ({ route }) => {
    switch (route.key) {
      case "interview":
        return <InterviewRoute />;
      case "professional":
        return <ProfessionalRoute />;
      default:
        return null;
    }
  };

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={styles.indicator}
      style={styles.tabBar}
      labelStyle={styles.label}
      activeColor="white"
      inactiveColor="#2E2D2D"
      pressColor="transparent"
      renderLabel={({ route, focused }) => (
        <View style={styles.labelContainer}>
          <Text
            style={[
              styles.label,
              {
                color: focused ? "white" : "#2E2D2D",
                fontWeight: focused ? "600" : "400",
              },
            ]}
          >
            {route.title}
          </Text>
        </View>
      )}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Ionicons name="arrow-back" size={20} color="#4B93CD" />
        <Text style={styles.titleHeader}>Chi tiết phỏng vấn</Text>
        <Ionicons name="arrow-back" size={20} color="#D3EEFF" />
      </View>

      <ScrollView style={styles.scrollContainer}>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{interview.title}</Text>

          <View style={styles.namngangLon}>
            <View style={styles.namngang}>
              <IconInCircle name={"calendar-month-outline"} />
              <Text style={styles.text}>{interview.date}</Text>
            </View>
            <Text style={styles.text}>
              Số lượng ban đầu: {interview.initial}
            </Text>
          </View>

          <View style={styles.namngangLon}>
            <View style={styles.namngang}>
              <IconInCircle name={"av-timer"} />
              <Text style={styles.text}>{interview.time} phút</Text>
            </View>
            <Text style={styles.text}>
              Số lượng đã đăng ký: {interview.registered}
            </Text>
          </View>

          <View style={styles.namngangLon}>
            <View style={styles.namngang}>
              <IconInCircle name={"clock-time-three-outline"} />
              <Text style={styles.text}>9:00 - 17:00</Text>
            </View>
            <Text style={styles.text}>
              Số lượng còn lại: {interview.conlai}
            </Text>
          </View>

          <TouchableOpacity
            style={styles.registerButton}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.registerText}>ĐĂNG KÝ NGAY</Text>
            <MaterialCommunityIcons
              name="cursor-default-click"
              size={20}
              color="#4B93CD"
            />
          </TouchableOpacity>
        </View>

        <View>
          <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            renderTabBar={renderTabBar}
          />
        </View>
        {index === 0 ? (
          <Detail interview={interview} professional={professional} />
        ) : (
          <Professional interview={interview} professional={professional} />
        )}
      </ScrollView>

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
                  style={[styles.text, { color: "#4B93CD" }]} onPress={handleTermsPress}
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
    </View>
  );
};

export default InterviewDetailScreen;
