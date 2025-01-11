import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  FlatList,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const FilterScreen = ({ navigation }) => {
  const [selectedJobField, setSelectedJobField] = useState("design");
  const [selectedPosition, setSelectedPosition] = useState("uiux");
  const [selectedLevel, setSelectedLevel] = useState("fresher");

  // Modal visibility states
  const [positionModalVisible, setPositionModalVisible] = useState(false);
  const [levelModalVisible, setLevelModalVisible] = useState(false);
  const [jobFieldModalVisible, setJobFieldModalVisible] = useState(false);

  // Data for dropdowns
  const positionOptions = [
    { label: "UI/UX Design", value: "uiux" },
    { label: "Frontend Developer", value: "frontend" },
    { label: "Backend Developer", value: "backend" },
  ];

  const levelOptions = [
    { label: "Fresher", value: "fresher" },
    { label: "Junior", value: "junior" },
    { label: "Senior", value: "senior" },
  ];

  const jobFieldOptions = [
    { label: "Thiết kế", value: "design" },
    { label: "Phần cứng", value: "hardware" },
    { label: "Phần mềm", value: "software" },
    { label: "Hệ thống thông tin", value: "informationsystem" },
    { label: "Dữ liệu", value: "data" },
    { label: "Mạng máy tính", value: "networking" },
  ];
  const handleViewQuestions = () => {
    navigation.navigate("Questions", {
      categoryTitle: jobFieldOptions.find(
        (opt) => opt.value === selectedJobField
      )?.label,
      positionTitle: positionOptions.find(
        (opt) => opt.value === selectedPosition
      )?.label,
      levelTitle: levelOptions.find((opt) => opt.value === selectedLevel)
        ?.label,
      totalQuestions: 300,
    });
  };
  const Dropdown = ({
    options,
    selectedValue,
    onSelect,
    visible,
    setVisible,
    placeholder,
  }) => (
    <>
      <TouchableOpacity
        style={styles.dropdownButton}
        onPress={() => setVisible(true)}
      >
        <Text style={styles.dropdownButtonText}>
          {options.find((opt) => opt.value === selectedValue)?.label ||
            placeholder}
        </Text>
        <MaterialIcons
          name={visible ? "keyboard-arrow-up" : "keyboard-arrow-down"}
          size={24}
          color="#666"
        />
      </TouchableOpacity>

      <Modal
        visible={visible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setVisible(false)}
        >
          <View style={styles.modalContent}>
            <FlatList
              data={options}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.modalItem}
                  onPress={() => {
                    onSelect(item.value);
                    setVisible(false);
                  }}
                >
                  <Text
                    style={[
                      styles.modalItemText,
                      selectedValue === item.value && styles.selectedItemText,
                    ]}
                  >
                    {item.label}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <MaterialIcons name="arrow-back" size={24} color="#666" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Bộ lọc</Text>
      </View>

      {/* Content */}
      <View style={styles.content}>
        {/* Ngành nghề section */}
        <View style={styles.section}>
          <Text style={styles.label}>Ngành nghề</Text>

          <Dropdown
            options={jobFieldOptions}
            selectedValue={selectedJobField}
            onSelect={setSelectedJobField}
            visible={jobFieldModalVisible}
            setVisible={setJobFieldModalVisible}
            placeholder="Select job field"
          />
        </View>

        {/* Vị trí section */}
        <View style={styles.section}>
          <Text style={styles.label}>Vị trí</Text>
          <Dropdown
            options={positionOptions}
            selectedValue={selectedPosition}
            onSelect={setSelectedPosition}
            visible={positionModalVisible}
            setVisible={setPositionModalVisible}
            placeholder="Select position"
          />
        </View>

        {/* Cấp bậc section */}
        <View style={styles.section}>
          <Text style={styles.label}>Cấp bậc</Text>
          <Dropdown
            options={levelOptions}
            selectedValue={selectedLevel}
            onSelect={setSelectedLevel}
            visible={levelModalVisible}
            setVisible={setLevelModalVisible}
            placeholder="Select level"
          />
        </View>

        {/* Button */}
        <TouchableOpacity onPress={handleViewQuestions} style={styles.button}>
          <Text style={styles.buttonText}>Xem câu hỏi</Text>
        </TouchableOpacity>
      </View>
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
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  backButton: {
    marginRight: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: "#000",
  },
  content: {
    flex: 1,
    padding: 16,
  },
  section: {
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    color: "#000",
    marginBottom: 8,
    fontFamily: 'regular'
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    backgroundColor: "#fff",
  },
  inputText: {
    fontSize: 16,
    color: "#000",
  },
  dropdownButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    backgroundColor: "#fff",
  },
  dropdownButtonText: {
    fontSize: 16,
    color: "#000",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    maxHeight: "50%",
  },
  modalItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  modalItemText: {
    fontSize: 16,
    color: "#000",
  },
  selectedItemText: {
    color: "#2196F3",
    fontWeight: "500",
  },
  button: {
    borderWidth: 1,
    borderColor: "#2196F3",
    borderRadius: 8,
    padding: 12,
    alignItems: "center",
    backgroundColor: "#fff",
    marginTop: 24,
  },
  buttonText: {
    color: "#2196F3",
    fontSize: 16,
    fontWeight: "500",
  },
});

export default FilterScreen;
