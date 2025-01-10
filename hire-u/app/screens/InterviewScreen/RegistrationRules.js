import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const RegistrationRules = () => {
    const navigation = useNavigation()
  return (
    <ScrollView style={styles.container}>
      <View style={styles.rulesContainer}>
        <View style={styles.rulesTitleContainer}>
          <Ionicons name="chevron-back" size={24} color="black" onPress={()=>navigation.goBack()}/>
          <Text style={styles.rulesTitle}>
            Quy định dành cho người dùng tham gia buổi phỏng vấn thử trên app
            "HireU"
          </Text>
        </View>

        <View style={styles.rulesContent}>
          <View style={styles.ruleSection}>
            <Text style={styles.sectionTitle}>1. Thời gian phỏng vấn:</Text>
            <View style={styles.bulletList}>
              <Text style={styles.bulletItem}>
                • Người dùng nên tham gia buổi phỏng vấn đúng giờ đã đăng ký.
                HireU khuyến khích bạn nên truy cập vào link Microsoft Teams
                trước giờ bắt đầu phỏng vấn 5-10'.
              </Text>
              <Text style={styles.bulletItem}>
                • Nếu có sự cố không thể tham gia, vui lòng thông báo cho chuyên
                gia ít nhất 24 giờ trước khi buổi phỏng vấn diễn ra.
              </Text>
            </View>
          </View>

          <View style={styles.ruleSection}>
            <Text style={styles.sectionTitle}>2. Chuẩn bị:</Text>
            <View style={styles.bulletList}>
              <Text style={styles.bulletItem}>
                • Người dùng nên chuẩn bị kỹ lưỡng trước buổi phỏng vấn, bao
                gồm:
              </Text>
              <Text style={styles.bulletItem}>
                • Tìm hiểu về các công nghệ, yêu cầu có trong JD phỏng vấn.
              </Text>
              <Text style={styles.bulletItem}>
                • Chuẩn bị câu hỏi mà bạn thắc mắc cũng như các nội dung cần
                thảo luận với chuyên gia.
              </Text>
            </View>
          </View>

          <View style={styles.ruleSection}>
            <Text style={styles.sectionTitle}>
              3. Hành vi trong buổi phỏng vấn:
            </Text>
            <View style={styles.bulletList}>
              <Text style={styles.bulletItem}>
                • Người dùng cần thể hiện thái độ chuyên nghiệp trong suốt buổi
                phỏng vấn.
              </Text>
              <Text style={styles.bulletItem}>
                • Tôn trọng chuyên gia và không sử dụng ngôn ngữ không phù hợp.
              </Text>
            </View>
          </View>

          <View style={styles.ruleSection}>
            <Text style={styles.sectionTitle}>4. Bảo mật thông tin:</Text>
            <View style={styles.bulletList}>
              <Text style={styles.bulletItem}>
                • Người dùng cam kết không chia sẻ thông tin cá nhân của chuyên
                gia và nội dung buổi phỏng vấn với bên thứ ba.
              </Text>
              <Text style={styles.bulletItem}>
                • Tôn trọng quyền riêng tư và bảo mật dữ liệu của tất cả các bên
                liên quan.
              </Text>
            </View>
          </View>

          <View style={styles.ruleSection}>
            <Text style={styles.sectionTitle}>5. Phản hồi:</Text>
            <View style={styles.bulletList}>
              <Text style={styles.bulletItem}>
                • Sau buổi phỏng vấn, người dùng được khuyến khích gửi phản hồi
                về trải nghiệm của mình để cải thiện dịch vụ.
              </Text>
              <Text style={styles.bulletItem}>
                • Người dùng có quyền nhận phản hồi từ chuyên gia về khả năng
                trả lời phỏng vấn và cách cải thiện những điểm còn thiếu sót.
              </Text>
            </View>
          </View>

          <View style={styles.ruleSection}>
            <Text style={styles.sectionTitle}>6. Hủy bỏ và thay đổi:</Text>
            <View style={styles.bulletList}>
              <Text style={styles.bulletItem}>
                • Người dùng có quyền hủy bỏ lịch phỏng vấn, nhưng cần thông báo
                trước ít nhất 24 giờ, nếu không hệ thống có quyền cảnh cáo tài
                khoản người dùng.
              </Text>
              <Text style={styles.bulletItem}>
                • Trong trường hợp hủy bỏ, vui lòng cung cấp lý do để đội ngũ hỗ
                trợ có thể cải thiện dịch vụ.
              </Text>
            </View>
          </View>

          <View style={styles.ruleSection}>
            <Text style={styles.sectionTitle}>7. Trách nhiệm:</Text>
            <View style={styles.bulletList}>
              <Text style={styles.bulletItem}>
                • Người dùng chịu trách nhiệm về hành vi của mình trong buổi
                phỏng vấn và các thông tin cung cấp trên ứng dụng.
              </Text>
              <Text style={styles.bulletItem}>
                • "HireU" không chịu trách nhiệm cho bất kỳ thiệt hại nào phát
                sinh từ hành vi của người dùng.
              </Text>
            </View>
          </View>

          <Text style={styles.rulesFooter}>
            Các quy định này nhằm đảm bảo buổi phỏng vấn thử diễn ra suôn sẻ và
            hiệu quả cho cả người dùng và chuyên gia. Người dùng khi tham gia
            cần tuân thủ các quy định để tạo môi trường học tập và làm việc tích
            cực.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  rulesContainer: {
    padding: 15,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
    margin: 16,
    borderRadius: 8,
  },
  rulesTitleContainer: {
    // flexDirection: "row",
    alignItems: "center",
  },
  rulesTitle: {
    color: "#4B93CD",
    fontSize: 20,
    marginTop: 5,
    fontFamily: "bold",
    marginBottom: 24,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
  },
  rulesContent: {
    color: "black",
  },
  ruleSection: {
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: "medium",
    marginBottom: 10,
    color: "black",
  },
  bulletList: {
    paddingLeft: 8,
  },
  bulletItem: {
    marginBottom: 8,
    lineHeight: 24,
    color: "black",
    fontFamily: "regular",
    fontSize: 15,
  },
  rulesFooter: {
    marginTop: 20,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#e5e7eb",
    color: "#6b7280",
    fontFamily: "italic",
    lineHeight: 24,
  },
});

export default RegistrationRules;
