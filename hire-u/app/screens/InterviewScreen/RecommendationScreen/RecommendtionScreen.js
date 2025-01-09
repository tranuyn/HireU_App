import * as React from "react";
import { useState } from "react";
import {
  View,
  Text,
  useWindowDimensions,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
  Alert,
} from "react-native";
import styles from "./style";
import AntDesign from "@expo/vector-icons/AntDesign";
import SelectDropdown from "react-native-select-dropdown";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

// Component cho các tab

const Recommendation = () => {
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const toggleSelect = (itemId) => {
    if (selectedLanguages.includes(itemId)) {
      setSelectedLanguages(selectedLanguages.filter((id) => id !== itemId)); // Bỏ chọn
    } else {
      setSelectedLanguages([...selectedLanguages, itemId]); // Chọn
    }
  };

  const majors = [
    { title: "Hủy lọc" },
    { title: "Công nghệ phần mềm" },
    { title: "Khoa học máy tính" },
    { title: "Kỹ thuật mạng" },
    { title: "Hệ thống thông tin" },
    { title: "Big Data & Machine Learning" },
    { title: "Quản trị cơ sở dữ liệu" },
    { title: "Robot và trí tuệ nhân tạo" },
    { title: "Thiết kế lĩnh vực Multimedia/Đồ họa/Game" },
    { title: "Khác" },
  ];

  const positions = [
    { title: "Hủy lọc" },
    { title: "Developer" },
    { title: "Designer" },
    { title: "Project Manager" },
    { title: "QA Engineer" },
    { title: "Data Scientist" },
    { title: "Khác" },
  ];

  const levels = [
    { title: "Hủy lọc" },
    { title: "Intern" },
    { title: "Junior" },
    { title: "Mid-level" },
    { title: "Senior" },
    { title: "Lead" },
    { title: "Manager" },
  ];

  const language = [
    { id: "Java", title: "Java", count: "12" },
    { id: "Javascript", title: "Javascript", count: "10" },
    { id: "NodeJS", title: "NodeJS", count: "31" },
    { id: "PHP", title: "PHP", count: "06" },
    { id: "C#", title: "C#", count: "13" },
    { id: "React", title: "React", count: "19" },
    { id: "Flutter", title: "Flutter", count: "27" },
  ];

  const renderItem = ({ item }) => {
    const isSelected = selectedLanguages.includes(item.id);

    return (
      <TouchableOpacity
        style={[styles.item, isSelected && styles.selectedItem]}
        onPress={() => toggleSelect(item.id)}
      >
        <Text style={[styles.title, isSelected && styles.selectedTitle]}>
          {item.title}
        </Text>
        <View
          style={[
            styles.countContainer,
            isSelected && styles.selectedCountContainer,
          ]}
        >
          <Text style={[styles.count, isSelected && styles.selectedCount]}>
            {item.count}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const interviewCards = [
    {
      id: 1,
      title: "[Interview] Intern Full Stack Developer",
      interviewer: "Justin Bieber",
      company: "(Công ty TNHH LG CNS)",
      position: "Developer",
      level: "Intern",
      major: [
        "Công nghệ phần mềm",
        "Khoa học máy tính",
        "Robot và trí tuệ nhân tạo",
      ],
      language: ["Java", "React", "Javascript"],
      date: "09/04/2022",
      time: "15",
      initial: 10,
      registered: 6,
      conlai: 4,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
  ];

  const professional = [
    {
      id: 1,
      name: "Justin Bieber",
      dateOfBirth: 1989,
      education: "Đại học Bách Khoa Hà Nội",
      currentWork: [
        "Project Manager tại Công ty ABC Technology",
        "Quản lý team phát triển với 20+ thành viên",
        "Phụ trách các dự án Enterprise Software",
      ],
      experience: [
        {
          description: "8+ năm kinh nghiệm trong ngành phát triển phần mềm",
          start: "2013",
          end: "now",
        },
        {
          description: "Product Owner tại XYZ Software",
          start: "2017",
          end: "2019",
        },
        {
          description: "Technical Team Lead tại DEF Solutions",
          start: "2020",
          end: "2022",
        },
      ],
      skill: [
        "Quản lý dự án Agile/Scrum",
        "System Architecture Design",
        "Full Stack Development (Java, Spring Boot, React)",
        "Database Design & Optimization",
        "Cloud Services (AWS, Azure)",
        "Team Building & Leadership",
      ],
    },
    {
      id: 2,
      name: "Alice Johnson",
      dateOfBirth: 1990,
      education: "Đại học Stanford",
      currentWork: [
        "Software Engineer tại Tech Innovations",
        "Phát triển ứng dụng web và di động",
        "Tham gia các dự án mã nguồn mở",
      ],
      experience: [
        {
          description: "5+ năm kinh nghiệm trong phát triển phần mềm",
          start: "2018",
          end: "now",
        },
        {
          description: "Junior Developer tại XYZ Solutions",
          start: "2016",
          end: "2018",
        },
        {
          description: "Intern tại Tech Startup",
          start: "2015",
          end: "2016",
        },
      ],
      skill: [
        "JavaScript, React, Node.js",
        "Phát triển phần mềm Agile",
        "Quản lý cơ sở dữ liệu",
        "Kỹ năng giải quyết vấn đề",
        "Thiết kế API",
      ],
    },
    {
      id: 3,
      name: "Bob Smith",
      dateOfBirth: 1985,
      education: "Học viện Công nghệ Massachusetts",
      currentWork: [
        "DevOps Engineer tại Cloud Solutions",
        "Quản lý hạ tầng và triển khai ứng dụng",
        "Tối ưu hóa quy trình phát triển phần mềm",
      ],
      experience: [
        {
          description: "7+ năm kinh nghiệm trong DevOps",
          start: "2016",
          end: "now",
        },
        {
          description: "System Administrator tại Global Tech",
          start: "2014",
          end: "2016",
        },
        {
          description: "Intern tại IT Solutions",
          start: "2013",
          end: "2014",
        },
      ],
      skill: [
        "Docker, Kubernetes",
        "AWS, Azure",
        "CI/CD Pipelines",
        "Quản lý cấu hình",
        "Phân tích hiệu suất",
      ],
    },
    {
      id: 4,
      name: "Eve Davis",
      dateOfBirth: 1992,
      education: "Đại học California, Berkeley",
      currentWork: [
        "Data Scientist tại Data Insights",
        "Phân tích dữ liệu và phát triển mô hình học máy",
        "Tạo báo cáo và trình bày dự án",
      ],
      experience: [
        {
          description: "4+ năm kinh nghiệm trong phân tích dữ liệu",
          start: "2019",
          end: "now",
        },
        {
          description: "Intern tại Analytics Company",
          start: "2018",
          end: "2019",
        },
        {
          description: "Thực tập sinh tại Dữ liệu Đen",
          start: "2017",
          end: "2018",
        },
      ],
      skill: [
        "Python, R, SQL",
        "Machine Learning",
        "Phân tích thống kê",
        "Trực quan hóa dữ liệu",
        "Kỹ năng giao tiếp",
      ],
    },
    {
      id: 5,
      name: "Charlie Brown",
      dateOfBirth: 1988,
      education: "Đại học Washington",
      currentWork: [
        "Cybersecurity Analyst tại SecureTech",
        "Bảo vệ hệ thống và dữ liệu khỏi các mối đe dọa",
        "Đánh giá an ninh mạng định kỳ",
      ],
      experience: [
        {
          description: "6+ năm kinh nghiệm trong an ninh mạng",
          start: "2017",
          end: "now",
        },
        {
          description: "Network Security Engineer tại IT Solutions",
          start: "2015",
          end: "2017",
        },
        {
          description: "Intern tại Cybersecurity Firm",
          start: "2014",
          end: "2015",
        },
      ],
      skill: [
        "Phân tích an ninh mạng",
        "Quản lý rủi ro",
        "Kiểm tra xâm nhập",
        "Tư vấn an ninh",
        "Kỹ năng lập trình (Python, Java)",
      ],
    },
    {
      id: 6,
      name: "Daniel Lee",
      dateOfBirth: 1993,
      education: "Đại học Michigan",
      currentWork: [
        "UX/UI Designer tại Creative Tech",
        "Thiết kế giao diện người dùng và trải nghiệm",
        "Nghiên cứu người dùng và phân tích phản hồi",
      ],
      experience: [
        {
          description: "3+ năm kinh nghiệm trong thiết kế UX/UI",
          start: "2020",
          end: "now",
        },
        {
          description: "Intern tại Design Studio",
          start: "2019",
          end: "2020",
        },
        {
          description: "Freelancer tại các dự án nhỏ",
          start: "2018",
          end: "2019",
        },
      ],
      skill: [
        "Thiết kế giao diện người dùng",
        "Nghiên cứu người dùng",
        "Adobe Creative Suite",
        "Figma, Sketch",
        "Thử nghiệm người dùng",
      ],
    },
    {
      id: 7,
      name: "Fiona Green",
      dateOfBirth: 1987,
      education: "Đại học Toronto",
      currentWork: [
        "Software Architect tại Innovative Solutions",
        "Thiết kế kiến trúc phần mềm cho các sản phẩm",
        "Lãnh đạo nhóm phát triển phần mềm",
      ],
      experience: [
        {
          description: "10+ năm kinh nghiệm trong phát triển phần mềm",
          start: "2013",
          end: "now",
        },
        {
          description: "Senior Developer tại Global Tech",
          start: "2010",
          end: "2013",
        },
        {
          description: "Junior Developer tại Startup",
          start: "2008",
          end: "2010",
        },
      ],
      skill: [
        "Kiến trúc phần mềm",
        "Phát triển ứng dụng phân tán",
        "Lãnh đạo kỹ thuật",
        "Quản lý dự án",
        "Phát triển Agile",
      ],
    },
    {
      id: 8,
      name: "George Martin",
      dateOfBirth: 1984,
      education: "Đại học Columbia",
      currentWork: [
        "Blockchain Developer tại Blockchain Innovations",
        "Phát triển ứng dụng dựa trên blockchain",
        "Tham gia các dự án hợp tác quốc tế",
      ],
      experience: [
        {
          description: "5+ năm kinh nghiệm trong phát triển blockchain",
          start: "2018",
          end: "now",
        },
        {
          description: "Developer tại FinTech Solutions",
          start: "2016",
          end: "2018",
        },
        {
          description: "Intern tại Blockchain Startup",
          start: "2015",
          end: "2016",
        },
      ],
      skill: [
        "Ethereum, Solidity",
        "Phát triển hợp đồng thông minh",
        "Kỹ thuật phân tán",
        "Quản lý dự án Agile",
        "Phát triển ứng dụng di động",
      ],
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <AntDesign name="search1" size={20} color="#A7A7A7" />
        <TextInput placeholder="Tìm kiếm" style={styles.inputSearch} />
      </View>

      <View style={styles.threeSelect}>
        <SelectDropdown
          data={majors}
          // onSelect={(selectedItem, index) => {
          //   console.log(selectedItem, index);
          // }}
          renderButton={(selectedItem, isOpened) => {
            return (
              <View style={styles.dropdownButtonStyle}>
                <Text
                  style={styles.dropdownButtonTxtStyle}
                  numberOfLines={2}
                  ellipsizeMode="tail"
                >
                  {(selectedItem && selectedItem.title) || "Chuyên ngành"}
                </Text>
                {isOpened ? (
                  <MaterialCommunityIcons
                    name="chevron-up"
                    size={24}
                    color="black"
                  />
                ) : (
                  <MaterialCommunityIcons
                    name="chevron-down"
                    size={24}
                    color="black"
                  />
                )}
              </View>
            );
          }}
          renderItem={(item, index, isSelected) => {
            return (
              <View
                style={{
                  ...styles.dropdownItemStyle,
                  ...(isSelected && { backgroundColor: "#D2D9DF" }),
                }}
              >
                <Text
                  style={styles.dropdownItemTxtStyle}
                  numberOfLines={2}
                  ellipsizeMode="tail"
                >
                  {item.title}
                </Text>
              </View>
            );
          }}
          showsVerticalScrollIndicator={false}
          dropdownStyle={styles.dropdownMenuStyle}
          buttonStyle={styles.selectButtonStyle}
        />

        <SelectDropdown
          data={positions}
          // onSelect={(selectedItem, index) => {
          //   console.log(selectedItem, index);
          // }}
          renderButton={(selectedItem, isOpened) => {
            return (
              <View style={styles.dropdownButtonStyle}>
                <Text
                  style={styles.dropdownButtonTxtStyle}
                  numberOfLines={2}
                  ellipsizeMode="tail"
                >
                  {(selectedItem && selectedItem.title) || "Vị trí"}
                </Text>
                {isOpened ? (
                  <MaterialCommunityIcons
                    name="chevron-up"
                    size={24}
                    color="black"
                  />
                ) : (
                  <MaterialCommunityIcons
                    name="chevron-down"
                    size={24}
                    color="black"
                  />
                )}
              </View>
            );
          }}
          renderItem={(item, index, isSelected) => {
            return (
              <View
                style={{
                  ...styles.dropdownItemStyle,
                  ...(isSelected && { backgroundColor: "#D2D9DF" }),
                }}
              >
                <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
              </View>
            );
          }}
          showsVerticalScrollIndicator={false}
          dropdownStyle={styles.dropdownMenuStyle}
          buttonStyle={styles.selectButtonStyle}
        />

        <SelectDropdown
          data={levels}
          // onSelect={(selectedItem, index) => {
          //   console.log(selectedItem, index);
          // }}
          renderButton={(selectedItem, isOpened) => {
            return (
              <View style={styles.dropdownButtonStyle}>
                <Text style={styles.dropdownButtonTxtStyle}>
                  {(selectedItem && selectedItem.title) || "Cấp bậc"}
                </Text>
                {isOpened ? (
                  <MaterialCommunityIcons
                    name="chevron-up"
                    size={24}
                    color="black"
                  />
                ) : (
                  <MaterialCommunityIcons
                    name="chevron-down"
                    size={24}
                    color="black"
                  />
                )}
              </View>
            );
          }}
          renderItem={(item, index, isSelected) => {
            return (
              <View
                style={{
                  ...styles.dropdownItemStyle,
                  ...(isSelected && { backgroundColor: "#D2D9DF" }),
                }}
              >
                <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
              </View>
            );
          }}
          showsVerticalScrollIndicator={false}
          dropdownStyle={styles.dropdownMenuStyle}
          buttonStyle={styles.selectButtonStyle}
        />
      </View>

      <FlatList
        data={language}
        horizontal={true}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Recommendation;
