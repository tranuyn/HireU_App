import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const QuestionsScreen = ({ route, navigation }) => {
  const { categoryTitle, positionTitle, levelTitle, totalQuestions } =
    route.params;
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedAnswers, setExpandedAnswers] = useState({});

  const questions = [
    {
      id: 1,
      question:
        "Bạn sử dụng những công cụ nào để tạo ra các prototype tương tác?",
      answer:
        "Để tạo ra các prototype tương tác, tôi thường sử dụng các công cụ như Figma, InVision, hoặc Adobe XD. Những công cụ này cho phép tôi tạo ra các bản demo tương tác cao, giúp khách hàng và các thành viên trong nhóm hình dung rõ hơn về sản phẩm cuối cùng.",
    },
    {
      id: 2,
      question:
        "Theo bạn, xu hướng thiết kế UI/UX nào sẽ thống trị trong vài năm tới?",
      answer:
        "Tôi cho rằng các xu hướng thiết kế UI/UX trong tương lai sẽ tập trung vào việc cá nhân hóa trải nghiệm người dùng, sử dụng trí tuệ nhân tạo, và thiết kế cho các thiết bị thực tế ảo/ tăng cường. Ngoài ra, các yếu tố như tính bền vững và trách nhiệm xã hội cũng sẽ ngày càng được quan tâm.",
    },
    {
      id: 3,
      question:
        "Bạn có thể chia sẻ về một dự án thiết kế UI/UX mà bạn cảm thấy tự hào nhất không? Điều gì làm cho dự án đó đặc biệt?",
      answer:
        "Dự án mà tôi cảm thấy tự hào nhất là... (Tên dự án). Trong dự án này, tôi đã phải đối mặt với một số thách thức như (nêu rõ thách thức). Để giải quyết vấn đề này, tôi đã (nêu giải pháp). Kết quả là, sản phẩm đã đạt được những chỉ số rất tốt về (nêu chỉ số). Điều làm cho dự án này đặc biệt là...",
    },
  ];
  const filteredQuestions = questions.filter((item) =>
    item.question.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const toggleAnswer = (id) => {
    setExpandedAnswers((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const truncateText = (text, limit) => {
    if (text.length <= limit) return text;
    return text.slice(0, limit) + "...";
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <MaterialIcons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <MaterialIcons name="search" size={24} color="#AAA6B9" />
          <TextInput
            style={styles.searchInput}
            placeholder="Tìm kiếm câu hỏi"
            placeholderTextColor="#AAA6B9"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      <View style={styles.filters}>
        {categoryTitle && (
          <View style={styles.filterChip}>
            <Text style={styles.filterText}>{categoryTitle}</Text>
          </View>
        )}
        {positionTitle && (
          <View style={styles.filterChip}>
            <Text style={styles.filterText}>{positionTitle}</Text>
          </View>
        )}
        {levelTitle && (
          <View style={styles.filterChip}>
            <Text style={styles.filterText}>{levelTitle}</Text>
          </View>
        )}
      </View>

      <Text style={styles.questionCount}>
        Có <Text style={styles.totalQuestions}>{filteredQuestions.length}</Text>{" "}
        câu hỏi mẫu cho lĩnh vực này
      </Text>

      <ScrollView style={styles.questionsContainer}>
        {filteredQuestions.map((item) => (
          <View key={item.id} style={styles.questionCard}>
            <Text style={styles.questionText}>Câu hỏi: {item.question}</Text>
            <Text style={styles.answerText}>
              {expandedAnswers[item.id]
                ? item.answer
                : truncateText(item.answer, 150)}
            </Text>
            {item.answer.length > 150 && (
              <TouchableOpacity
                style={styles.seeMoreButton}
                onPress={() => toggleAnswer(item.id)}
              >
                <Text style={styles.seeMoreText}>
                  {expandedAnswers[item.id] ? "Thu gọn" : "Xem thêm"}
                </Text>
              </TouchableOpacity>
            )}
          </View>
        ))}
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
    fontFamily: "medium",

    // padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    // marginBottom: 24,
    marginHorizontal: 20,
  },
  searchBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 8,
    padding: 8,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontFamily: "medium",

    fontSize: 14,
    color: "#333333",
    fontFamily: "regular",
  },
  totalQuestions: {
    color: "red",
    fontFamily: "regular",
  },
  filterButton: {
    padding: 8,
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
  },
  backButton: {
    padding: 8,
  },
  filters: {
    flexDirection: "row",
    padding: 16,
    gap: 8,
  },
  filterChip: {
    backgroundColor: "#D3EEFF",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  filterText: {
    color: "#4B93CD",
    fontSize: 14,
    fontFamily: "regular",
  },
  questionCount: {
    fontSize: 14,
    color: "#666666",
    fontFamily: "bold",

    paddingHorizontal: 16,
    marginBottom: 16,
    fontFamily: "regular",
  },
  questionsContainer: {
    flex: 1,
    padding: 16,
  },
  questionCard: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#F0F0F0",
  },
  questionText: {
    fontSize: 16,
    fontFamily: "medium",
    color: "#333333",
    marginBottom: 8,
  },
  answerText: {
    fontSize: 14,
    color: "#666666",
    lineHeight: 20,
    fontFamily: "medium",

    marginBottom: 12,
    fontFamily: "regular",
  },
  seeMoreButton: {
    alignSelf: "flex-end",
  },
  seeMoreText: {
    color: "#4B93CD",
    fontFamily: "medium",

    fontSize: 14,
    fontWeight: "500",
  },
});

export default QuestionsScreen;
