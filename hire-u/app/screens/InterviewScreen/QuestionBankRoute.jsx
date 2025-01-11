import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

const QuestionBankRoute = () => {
  const navigation = useNavigation();
  const [activeCategory, setActiveCategory] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: 1, title: "Thiết kế", icon: "brush", questions: 140 },
    { id: 2, title: "Phần cứng", icon: "computer", questions: 412 },
    { id: 3, title: "Phần mềm", icon: "apps", questions: 122 },
    {
      id: 4,
      title: "Hệ thống thông tin",
      icon: "desktop-windows",
      questions: 442,
    },
    { id: 5, title: "Dữ liệu", icon: "storage", questions: 122 },
    { id: 6, title: "Mạng máy tính", icon: "public", questions: 442 },
  ];

  const handleOpenFilter = () => {
    navigation.navigate("Filter");
  };

  const handleCategoryPress = (categoryId, categoryTitle) => {
    setActiveCategory(categoryId);
    navigation.navigate("Questions", {
      categoryId,
      categoryTitle,
      totalQuestions: categories.find((cat) => cat.id === categoryId).questions,
    });
  };

  const renderCategoryCard = (category) => (
    <TouchableOpacity
      key={category.id}
      style={[
        styles.categoryCard,
        category.id === activeCategory && styles.activeCard,
      ]}
      onPress={() => handleCategoryPress(category.id, category.title)}
    >
      <View
        style={[
          styles.iconContainer,
          category.id === activeCategory
            ? styles.activeIconContainer
            : styles.inactiveIconContainer,
        ]}
      >
        <MaterialIcons
          name={category.icon}
          size={24}
          color={category.id === activeCategory ? "#ffffff" : "#4B93CD"}
        />
      </View>
      <Text
        style={[
          styles.categoryTitle,
          category.id === activeCategory && styles.activeCategoryTitle,
        ]}
      >
        {category.title}
      </Text>
      <Text
        style={[
          styles.questionCount,
          category.id === activeCategory && styles.activeQuestionCount,
        ]}
      >
        {category.questions} câu hỏi
      </Text>
    </TouchableOpacity>
  );

  const filteredCategories = categories.filter((category) =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <MaterialIcons name="search" size={24} color="#AAA6B9" />
          <TextInput
            style={styles.searchInput}
            placeholder="Tìm kiếm trên HireU"
            placeholderTextColor="#AAA6B9"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
        <TouchableOpacity
          onPress={handleOpenFilter}
          style={styles.filterButton}
        >
          <MaterialIcons name="tune" size={24} color="#4B93CD" />
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Ngành nghề</Text>

      <View style={styles.categoryGrid}>
        {filteredCategories.map(renderCategoryCard)}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F4",
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "600",
    color: "#333333",
    fontFamily: "ASAP",
    marginBottom: 16,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 24,
  },
  searchBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 14,
    color: "#333333",
  },
  filterButton: {
    padding: 8,
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333333",
    fontFamily: "ASAP",
    marginBottom: 16,
  },
  categoryGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 16,
  },
  categoryCard: {
    width: "47%",
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#F0F0F0",
  },
  activeCard: {
    backgroundColor: "#4B93CD",
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  activeIconContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
  inactiveIconContainer: {
    backgroundColor: "#F5F5F5",
  },
  categoryTitle: {
    fontSize: 14,
    fontWeight: "500",
    color: "#333333",
    marginBottom: 4,
    textAlign: "center",
  },
  activeCategoryTitle: {
    color: "#ffffff",
  },
  questionCount: {
    fontSize: 12,
    color: "#AAA6B9",
    textAlign: "center",
  },
  activeQuestionCount: {
    color: "#ffffff",
  },
});

export default QuestionBankRoute;
