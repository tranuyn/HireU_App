import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { CheckBox } from "react-native-elements";
import DateTimePicker from "@react-native-community/datetimepicker";

const AddExperience = () => {
  const navigation = useNavigation();
  const [currentlyWorking, setCurrentlyWorking] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);
  const [startDateText, setStartDateText] = useState("");
  const [endDateText, setEndDateText] = useState("");
  const onStartDateChange = (event, selectedDate) => {
    setShowStartPicker(false);
    if (selectedDate) {
      setStartDate(selectedDate);
      const formattedDate = selectedDate.toLocaleDateString("vi-VN", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
      setStartDateText(formattedDate);
    }
  };

  const onEndDateChange = (event, selectedDate) => {
    setShowEndPicker(false);
    if (selectedDate) {
      setEndDate(selectedDate);
      const formattedDate = selectedDate.toLocaleDateString("vi-VN", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
      setEndDateText(formattedDate);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <MaterialIcons name="arrow-back" size={24} color="#007AFF" />
        </TouchableOpacity>
      </View>
      <Text style={styles.headerTitle}>Thêm kinh nghiệm</Text>

      <ScrollView style={styles.formContainer}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Nghề nghiệp</Text>
          <TextInput style={styles.input} placeholder="Nhập nghề nghiệp" />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Công ty</Text>
          <TextInput style={styles.input} placeholder="Nhập tên công ty" />
        </View>

        <View style={styles.dateContainer}>
          <View style={[styles.inputGroup, { flex: 1, marginRight: 10 }]}>
            <Text style={styles.label}>Ngày vào làm</Text>
            <TouchableOpacity onPress={() => setShowStartPicker(true)}>
              <TextInput
                style={styles.input}
                placeholder="DD/MM/YYYY"
                value={startDateText}
                editable={false}
              />
            </TouchableOpacity>
          </View>
          <View style={[styles.inputGroup, { flex: 1 }]}>
            <Text style={styles.label}>Ngày nghỉ việc</Text>
            <TouchableOpacity
              onPress={() => !currentlyWorking && setShowEndPicker(true)}
            >
              <TextInput
                style={styles.input}
                placeholder="DD/MM/YYYY"
                value={endDateText}
                editable={false}
              />
            </TouchableOpacity>
          </View>
        </View>

        {showStartPicker && (
          <DateTimePicker
            value={startDate}
            mode="date"
            display={Platform.OS === "ios" ? "spinner" : "default"}
            onChange={onStartDateChange}
          />
        )}

        {showEndPicker && (
          <DateTimePicker
            value={endDate}
            mode="date"
            display={Platform.OS === "ios" ? "spinner" : "default"}
            onChange={onEndDateChange}
            minimumDate={startDate}
          />
        )}

        <View style={styles.checkboxContainer}>
          <CheckBox
            checked={currentlyWorking}
            onPress={() => {
              setCurrentlyWorking(!currentlyWorking);
              if (!currentlyWorking) {
                setEndDateText("");
              }
            }}
            title="Bạn vẫn còn làm ở vị trí này"
            containerStyle={styles.checkbox}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Mô tả quá trình làm việc</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Viết mô tả quá trình làm việc"
            multiline
            numberOfLines={4}
            textAlignVertical="top"
          />
        </View>
        <View style={styles.saveButtonContainer}>
          <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.saveButtonText}>Lưu</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F4",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 20,
    fontFamily: "bold",

    color: "#4B93CD",
    textAlign: "center",
  },
  formContainer: {
    flex: 1,
    padding: 22,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: "#150B3D",
    fontFamily: "medium",
  },
  input: {
    borderWidth: 1,
    borderColor: "#4B93CD",
    borderRadius: 8,
    padding: 12,
    fontFamily: "medium",

    fontSize: 16,
    backgroundColor: "white",
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  checkboxContainer: {
    marginBottom: 20,
  },
  checkbox: {
    backgroundColor: "transparent",
    borderWidth: 0,
    padding: 0,
    margin: 0,
  },
  textArea: {
    height: 120,
    textAlignVertical: "top",
    fontFamily: "medium",
  },
  saveButtonContainer: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  saveButton: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
    width: 200,
    marginBottom: 40,
  },
  saveButtonText: {
    color: "#4B93CD",
    fontSize: 16,
    fontFamily: "medium",

    fontWeight: "600",
    borderColor: "#4B93CD",
  },
});

export default AddExperience;
