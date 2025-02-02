import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";
import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();

  const renderJobItem = (title, description, applicants) => (
    <View style={styles.jobItem}>
      <MaterialIcons name="lock-outline" size={24} color="#4B93CD" />
      <View style={styles.jobContent}>
        <Text style={styles.jobTitle}>{title}</Text>
        <Text style={styles.jobDescription}>{description}</Text>
        <Text style={styles.applicantsText}>{applicants}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.mainContainer}>
      <StatusBar barStyle="dark-content" backgroundColor="#D3EEFF" />
      <View style={styles.Header}>
        <Text style={styles.title}>HireU</Text>
        <Text style={styles.description}>
          Xóa tan nỗi lo thất nghiệp của bạn
        </Text>

        <TouchableOpacity
          style={styles.joinButton}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text style={styles.buttonText}>Tạo hồ sơ cá nhân của tôi</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.container}>
        <View style={styles.sectionContainer}>
          {/* <Text style={styles.sectionLabel}>Introduction</Text> */}
          <Text style={styles.sectionTitle}>Về chúng tôi</Text>
        </View>

        <View style={styles.aboutContainer}>
          <View style={styles.aboutItem}>
            <MaterialIcons name="video-library" size={24} color="#4B93CD" />
            <View style={styles.aboutContent}>
              <Text style={styles.aboutItemTitle}>Webinar</Text>
              <Text style={styles.aboutItemDescription}>
                Hàng triệu người dùng tham gia webinar để nâng cao kĩ năng và
                kinh nghiệm trước khi đi làm
              </Text>
            </View>
          </View>

          <View style={styles.aboutItem}>
            <MaterialIcons name="question-answer" size={24} color="#4B93CD" />
            <View style={styles.aboutContent}>
              <Text style={styles.aboutItemTitle}>Câu hỏi phỏng vấn</Text>
              <Text style={styles.aboutItemDescription}>
                Bộ câu hỏi phỏng vấn được biên soạn từ những công ty hàng đầu
                trên thế giới và được nhiều nhà tuyển dụng khuyên dùng
              </Text>
            </View>
          </View>

          <View style={styles.aboutItem}>
            <MaterialIcons name="people" size={24} color="#4B93CD" />
            <View style={styles.aboutContent}>
              <Text style={styles.aboutItemTitle}>Mạng xã hội</Text>
              <Text style={styles.aboutItemDescription}>
                Một nơi để trao đổi và đặt câu hỏi cho những người trong nghề và
                những chuyên gia hàng đầu trong mọi lĩnh vực
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Công việc đang hot</Text>
        </View>

        {renderJobItem(
          "PHP Web Developer (Junior/Mid)",
          "Đây là mô tả công việc",
          "Có 100 người đang apply"
        )}
        {renderJobItem(
          "PHP Web Developer (Junior/Mid)",
          "Đây là mô tả công việc",
          "Có 100 người đang apply"
        )}
        {renderJobItem(
          "PHP Web Developer (Junior/Mid)",
          "Đây là mô tả công việc",
          "Có 100 người đang apply"
        )}

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Những câu hỏi tiêu biểu</Text>
        </View>

        <View style={styles.faqContainer}>
          {[
            "Ứng dụng cung cấp những tính năng gì?",
            "Làm thế nào để tham gia các buổi webinar?",
            "Làm sao liên hệ với bộ phận hỗ trợ của HireU?",
            "HireU hỗ trợ những ngôn ngữ nào?",
          ].map((question, index) => (
            <TouchableOpacity key={index} style={styles.faqItem}>
              <Text style={styles.faqText}>{question}</Text>
              <MaterialIcons name="add" size={24} color="#4B93CD" />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#ffffff",
    fontFamily: "medium",
  },
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 20,
  },
  sectionContainer: {
    alignItems: "center",
    marginBottom: 16,
  },
  title: {
    fontFamily: "bold",
    fontSize: 27,
    color: "#000",
    marginBottom: 8,
    fontFamily: "medium",
  },
  description: {
    fontFamily: "regular",
    fontSize: 14,
    fontFamily: "medium",

    color: "black",
    marginBottom: 16,
  },
  joinButton: {
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
    fontFamily: "medium",

    fontWeight: "500",
  },
  Header: {
    backgroundColor: "#D3EEFF",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    padding: 12,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  sectionLabel: {
    fontFamily: "regular",
    fontSize: 14,
    color: "#4B93CD",
    fontFamily: "medium",

    marginBottom: 8,
    textAlign: "center",
  },
  sectionTitle: {
    fontFamily: "medium",
    fontSize: 20,
    fontWeight: "600",
    color: "#4B93CD",
    fontFamily: "medium",

    textAlign: "center",
  },
  aboutContainer: {
    gap: 16,
    marginBottom: 24,
  },
  aboutItem: {
    flexDirection: "row",
    gap: 12,
  },
  aboutContent: {
    flex: 1,
  },
  aboutItemTitle: {
    fontFamily: "medium",
    fontSize: 14,
    fontFamily: "medium",

    fontWeight: "500",
    color: "#000",
    marginBottom: 4,
  },
  aboutItemDescription: {
    fontFamily: "regular",
    fontSize: 14,
    color: "#666",
    fontFamily: "medium",

    lineHeight: 20,
  },
  jobItem: {
    flexDirection: "row",
    gap: 12,
    padding: 16,
    backgroundColor: "#D3EEFF",
    borderRadius: 8,
    marginBottom: 12,
  },
  jobContent: {
    flex: 1,
  },
  jobTitle: {
    fontSize: 14,
    fontFamily: "medium",

    fontWeight: "500",
    color: "#000",
    marginBottom: 4,
  },
  jobDescription: {
    fontFamily: "regular",
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  applicantsText: {
    fontFamily: "regular",
    fontSize: 14,
    fontFamily: "medium",

    color: "#666",
  },
  faqContainer: {
    gap: 12,
    marginBottom: 30,
  },
  faqItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
  },
  faqText: {
    fontFamily: "regular",
    fontSize: 14,
    color: "#000",
    fontFamily: "medium",
  },
});

export default Home;
