import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const JobsSaved = () => {
  const navigation = useNavigation();

  const savedJobs = [
    {
      id: 1,
      title: "UI/UX Designer",
      company: "Google inc",
      location: "TP.HCM",
      tags: ["Design", "Full-time", "Senior designer"],
      salary: "25 - 30 triệu",
      timePosted: "25 phút trước",
      logo: "G",
      description:
        "Chúng tôi đang tìm kiếm một UI/UX Designer có khả năng chuyển đổi ý tưởng sáng tạo thành các thiết kế giao diện người dùng trực quan và dễ sử dụng. Bạn sẽ tham gia vào toàn bộ quy trình thiết kế, từ nghiên cứu người dùng đến xây dựng nguyên mẫu và giao diện cuối cùng.",
      requirements: [
        "Tạo ra các thiết kế giao diện người dùng (UI) trực quan, hấp dẫn và dễ sử dụng trên các nền tảng khác nhau (website, ứng dụng di động,...)",
        "Xây dựng các bản persona và user journey map để định hình trải nghiệm người dùng",
        "Làm việc chặt chẽ với các thành viên trong đội ngũ (developer, product manager,...) để đảm bảo sản phẩm được phát triển đúng tiến độ và đáp ứng yêu cầu",
        "Kiểm tra và đảm bảo chất lượng của các thiết kế trước khi bàn giao cho giai đoạn phát triển",
        "Đảm bảo rằng các dự án được thực hiện đúng tiến độ và trong ngân sách",
      ],
    },
    {
      id: 2,
      title: "Lead Designer",
      company: "Dribbble inc",
      location: "Hà Nội",
      tags: ["Design", "Full-time", "Senior designer"],
      salary: "20 - 35 triệu",
      timePosted: "3 giờ trước",
      logo: "D",
      description:
        "Tham gia Creative Studio với vai trò Lead Designer để dẫn dắt các dự án thiết kế, định hình nhận diện thương hiệu và phát triển ý tưởng thành các sản phẩm trực quan tuyệt đẹp.",
        requirements: ["Thông thạo tiếng Anh", "Có kinh nghiệm trên 3 năm"]
      },
    {
      id: 3,
      title: "UX Researcher",
      company: "Dribbble inc",
      location: "Hà Nội",
      tags: ["Design", "Full-time", "Senior designer"],
      salary: "20 - 35 triệu",
      timePosted: "3 giờ trước",
      logo: "T",
      requirements: ["Thông thạo tiếng Anh", "Có khả năng làm việc nhóm tốt"]
    },
  ];

  const handleJobPress = (job) => {
    navigation.navigate("JobDetails", { job });
  };

  const handleRemoveSaved = (jobId) => {
    // Implement remove from saved functionality here
    console.log("Remove job:", jobId);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Công việc đã lưu</Text>
      </View>

      <ScrollView style={styles.jobList}>
        {savedJobs.map((job) => (
          <TouchableOpacity
            key={job.id}
            style={styles.jobCard}
            onPress={() => handleJobPress(job)}
          >
            <View style={styles.jobHeader}>
              <View style={styles.hehe}>
                <View style={styles.logoContainer}>
                  <Text style={styles.logo}>{job.logo}</Text>
                </View>
                <TouchableOpacity
                  onPress={() => handleRemoveSaved(job.id)}
                  style={styles.saveButton}
                >
                  <MaterialIcons name="bookmark" size={24} color="#4A90E2" />
                </TouchableOpacity>
              </View>
              <View style={styles.jobInfo}>
                <Text style={styles.jobTitle}>{job.title}</Text>
                <Text style={styles.companyName}>
                  {job.company} • {job.location}
                </Text>
              </View>
            </View>
            <View style={styles.tagContainer}>
              {job.tags.map((tag, index) => (
                <View key={index} style={styles.tag}>
                  <Text style={styles.tagText}>{tag}</Text>
                </View>
              ))}
            </View>
            <View style={styles.jobFooter}>
              <Text style={styles.timePosted}>{job.timePosted}</Text>
              <Text style={styles.salary}>{job.salary}</Text>
            </View>
          </TouchableOpacity>
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
    padding: 16,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#EFEFEF",
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: "bold",
    marginLeft: 16,
    fontFamily: "bold",
  },
  jobList: {
    padding: 16,
  },
  jobCard: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 30,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  jobHeader: {
    flexDirection: "column",
  },
  hehe: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  logoContainer: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    marginBottom: 10,
    alignItems: "center",
  },
  logo: {
    fontSize: 24,
    fontFamily: "regular",
  },
  jobInfo: {
    flex: 1,
    marginTop: 12,
    marginBottom: 12,
  },
  jobTitle: {
    fontSize: 16,
    fontFamily: "bold",
  },
  companyName: {
    fontSize: 14,
    color: "#232D3A",
    fontFamily: "medium",

    marginTop: 4,
    fontFamily: "regular",
  },
  saveButton: {
    padding: 4,
  },
  tagContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 12,
  },
  tag: {
    backgroundColor: "#D3EEFF",
    borderRadius: 16,
    paddingVertical: 4,
    paddingHorizontal: 12,
    marginRight: 8,
    marginBottom: 8,
  },
  tagText: {
    color: "#4B93CD",
    fontSize: 14,
    fontFamily: "regular",
  },
  jobFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
    fontFamily: "medium",
  },
  timePosted: {
    color: "#AAA6B9",
    fontSize: 14,
    fontFamily: "regular",
  },
  salary: {
    color: "#4B93CD",
    fontSize: 14,
    fontFamily: "medium",
  },
});

export default JobsSaved;
