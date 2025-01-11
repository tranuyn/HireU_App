import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const fakeJobs = [
  {
    id: 1,
    title: "UI/UX Designer",
    company: "TechCorp Inc",
    location: "Ho Chi Minh City",
    tags: ["Design", "Full-time", "Senior designer"],
    salary: "25 - 30 triệu",
    timePosted: "25 phút trước",
    logo: "🔵",
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
    company: "Creative Studio",
    location: "Ha Noi",
    tags: ["Design", "Full-time", "Senior designer"],
    salary: "20 - 35 triệu",
    timePosted: "3 giờ trước",
    logo: "🎨",
    description:
      "Tham gia Creative Studio với vai trò Lead Designer để dẫn dắt các dự án thiết kế, định hình nhận diện thương hiệu và phát triển ý tưởng thành các sản phẩm trực quan tuyệt đẹp.",
    requirements: [
      "Lãnh đạo các dự án thiết kế từ ý tưởng đến triển khai, đảm bảo chất lượng cao.",
      "Hướng dẫn và hỗ trợ các Junior Designer để nâng cao kỹ năng của họ.",
      "Tạo các tài liệu hình ảnh ấn tượng cho các chiến dịch marketing và thương hiệu.",
      "Làm việc với các bên liên quan để đảm bảo thiết kế phù hợp với mục tiêu kinh doanh.",
      "Thành thạo Adobe Creative Suite và các công cụ thiết kế khác.",
    ],
  },
  {
    id: 3,
    title: "Product Designer",
    company: "Innovation Labs",
    location: "Da Nang",
    tags: ["Design", "Full-time", "Mid-level"],
    salary: "18 - 25 triệu",
    timePosted: "5 giờ trước",
    logo: "💡",
    description:
      "Với vai trò Product Designer, bạn sẽ biến các nhu cầu người dùng thành các tính năng sản phẩm sáng tạo. Làm việc chặt chẽ với các kỹ sư và product managers để mang đến trải nghiệm xuất sắc.",
    requirements: [
      "Thiết kế các tính năng sản phẩm vừa có tính thẩm mỹ vừa đáp ứng yêu cầu sử dụng.",
      "Thực hiện phỏng vấn người dùng để hiểu các vấn đề và nhu cầu của họ.",
      "Hợp tác với các kỹ sư để đảm bảo thiết kế được triển khai chính xác.",
      "Cung cấp tài liệu và hướng dẫn chi tiết cho developers khi triển khai.",
      "Có portfolio mạnh mẽ, thể hiện kỹ năng giải quyết vấn đề và thiết kế trực quan.",
    ],
  },
  {
    id: 4,
    title: "Senior UX Researcher",
    company: "Digital Solutions",
    location: "Ho Chi Minh City",
    tags: ["Research", "Full-time", "Senior"],
    salary: "30 - 40 triệu",
    timePosted: "1 ngày trước",
    logo: "📊",
    description:
      "Chúng tôi đang tìm kiếm một Senior UX Researcher để dẫn dắt các nghiên cứu tập trung vào người dùng cho các sản phẩm của chúng tôi. Bạn sẽ phụ trách các sáng kiến nghiên cứu để khám phá nhu cầu và hành vi khách hàng.",
    requirements: [
      "Lập kế hoạch và thực hiện nghiên cứu người dùng bằng nhiều phương pháp khác nhau.",
      "Phân tích dữ liệu và trình bày các insight khả thi cho đội ngũ sản phẩm.",
      "Xây dựng persona, journey map và các tài liệu nghiên cứu khác.",
      "Hợp tác với designers và developers để ưu tiên nhu cầu của người dùng.",
      "Kinh nghiệm với các công cụ kiểm tra khả năng sử dụng và phần mềm phân tích.",
    ],
  },
  {
    id: 5,
    title: "Visual Designer",
    company: "ArtTech",
    location: "Ha Noi",
    tags: ["Design", "Full-time", "Mid-level"],
    salary: "15 - 25 triệu",
    timePosted: "2 ngày trước",
    logo: "🎯",
    description:
      "Tham gia ArtTech với vai trò Visual Designer, bạn sẽ góp phần tạo nên các thiết kế đẹp mắt trên các nền tảng số và in ấn. Sự sáng tạo của bạn sẽ giúp thương hiệu của chúng tôi nổi bật.",
    requirements: [
      "Thiết kế đồ họa, minh họa và bố cục cho nhiều nền tảng.",
      "Đảm bảo tính nhất quán của thương hiệu trên tất cả các tài liệu hình ảnh.",
      "Hợp tác với đội ngũ marketing để triển khai các chiến dịch hấp dẫn.",
      "Thành thạo Photoshop, Illustrator và các công cụ thiết kế khác.",
      "Khả năng làm việc trong môi trường năng động với thời hạn gấp.",
    ],
  },
];

const Job = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [savedJobs, setSavedJobs] = useState([]);

  const filteredJobs = fakeJobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLocation =
      !locationFilter ||
      job.location.toLowerCase().includes(locationFilter.toLowerCase());
    return matchesSearch && matchesLocation;
  });

  const handleJobPress = (job) => {
    navigation.navigate("JobDetails", { job });
  };
  const toggleSaveJob = (jobId) => {
    setSavedJobs((prev) =>
      prev.includes(jobId)
        ? prev.filter((id) => id !== jobId)
        : [...prev, jobId]
    );
  };
  const handleNavigateToSaved = () => {
    navigation.navigate("JobsSaved");
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1a1b4b" />
      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <MaterialIcons name="search" size={24} color="#666" />
          <TextInput
            style={styles.input}
            placeholder="Tìm kiếm trên HireU"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        <View style={styles.searchBox}>
          <MaterialIcons name="location-on" size={24} color="#666" />
          <TextInput
            style={styles.input}
            placeholder="Chọn địa điểm"
            value={locationFilter}
            onChangeText={setLocationFilter}
          />
        </View>
        <TouchableOpacity
          style={styles.savedButton}
          onPress={handleNavigateToSaved}
        >
          <MaterialIcons name="bookmark" size={20} color="#fff" />
          <Text style={styles.savedButtonText}>Đã lưu</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.jobList}>
        {filteredJobs.map((job) => (
          <TouchableOpacity
            key={job.id}
            style={styles.jobCard}
            onPress={() => handleJobPress(job)}
          >
            <Text>{" "}</Text>
            <View style={styles.jobHeader}>
              <View style={styles.hehe}>
                <View style={styles.logoContainer}>
                  <Text style={styles.logo}>{job.logo}</Text>
                </View>
                <TouchableOpacity
                  onPress={() => toggleSaveJob(job.id)}
                  style={styles.saveButton}
                >
                  <MaterialIcons
                    name={
                      savedJobs.includes(job.id)
                        ? "bookmark"
                        : "bookmark-border"
                    }
                    size={24}
                    color="#4A90E2"
                  />
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
  searchContainer: {
    padding: 16,
    backgroundColor: "#1a1b4b",
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 8,
    padding: 5,
    marginBottom: 8,
  },
  hehe: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    fontFamily: "regular",
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
    // alignItems: "center",
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
    // marginLeft: 12,
    marginTop: 12,
    marginBottom: 12,
  },
  jobTitle: {
    fontSize: 16,
    fontFamily: "bold",
  },
  savedButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#4A90E2",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    gap: 4,
  },
  savedButtonText: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "regular",
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
    fontFamily: "medium",

    fontSize: 14,
    fontFamily: "regular",
  },
  salary: {
    color: "#4B93CD",
    fontSize: 14,
    fontFamily: "medium",
  },
});

export default Job;
