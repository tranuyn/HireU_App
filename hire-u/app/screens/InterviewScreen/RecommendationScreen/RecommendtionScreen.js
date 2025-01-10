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
import InterviewCard from "../../../components/interviewCard";
import { useEffect } from "react";

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

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMajor, setSelectedMajor] = useState(null);
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [filteredInterviews, setFilteredInterviews] = useState(interviewCards);

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
    { id: "NodeJS", title: "Node.js", count: "31" },
    { id: "PHP", title: "PHP", count: "06" },
    { id: "C#", title: "C#", count: "13" },
    { id: "React", title: "React", count: "19" },
    { id: "Flutter", title: "Flutter", count: "27" },
  ];

  const renderItem = ({ item }) => {
    const isSelected = selectedLanguages.some((lang) => lang.id === item.id);
    return (
      <TouchableOpacity
        style={[styles.item, isSelected && styles.selectedItem]}
        onPress={() => handleLanguageSelect(item)}
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
      interviewerId: 1,
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
      title: "[Interview] Intern Backend Developer",
      interviewerId: 2,
      company: "(Công ty TNHH ABC)",
      position: "Backend Developer",
      level: "Intern",
      major: ["Công nghệ thông tin", "Khoa học máy tính"],
      language: ["Node.js", "Python"],
      date: "10/04/2022",
      time: "10",
      initial: 8,
      registered: 5,
      conlai: 3,
    },
    {
      id: 3,
      title: "[Interview] Frontend Developer",
      interviewerId: 3,
      company: "(Công ty XYZ)",
      position: "Frontend Developer",
      level: "Junior",
      major: ["Thiết kế đồ họa", "Công nghệ thông tin"],
      language: ["HTML", "CSS", "JavaScript"],
      date: "11/04/2022",
      time: "14",
      initial: 12,
      registered: 8,
      conlai: 4,
    },
    {
      id: 4,
      title: "[Interview] Data Scientist Intern",
      interviewerId: 4,
      company: "(Công ty Data Inc.)",
      position: "Data Scientist",
      level: "Intern",
      major: ["Khoa học dữ liệu", "Toán ứng dụng"],
      language: ["Python", "R"],
      date: "12/04/2022",
      time: "11",
      initial: 5,
      registered: 3,
      conlai: 2,
    },
    {
      id: 5,
      title: "[Interview] Mobile App Developer",
      interviewerId: 5,
      company: "(Công ty AppDev)",
      position: "Mobile Developer",
      level: "Junior",
      major: ["Công nghệ thông tin", "Khoa học máy tính"],
      language: ["Flutter", "Dart"],
      date: "13/04/2022",
      time: "16",
      initial: 7,
      registered: 4,
      conlai: 3,
    },
    {
      id: 6,
      title: "[Interview] UX/UI Designer",
      interviewerId: 6,
      company: "(Công ty Design Co.)",
      position: "Designer",
      level: "Junior",
      major: ["Thiết kế đồ họa", "Nghệ thuật"],
      language: ["Figma", "Sketch"],
      date: "14/04/2022",
      time: "13",
      initial: 6,
      registered: 3,
      conlai: 3,
    },
    {
      id: 7,
      title: "[Interview] Cloud Engineer Intern",
      interviewerId: 1,
      company: "(Công ty Cloud Solutions)",
      position: "Cloud Engineer",
      level: "Intern",
      major: ["Công nghệ thông tin", "Khoa học máy tính"],
      language: ["AWS", "Azure"],
      date: "15/04/2022",
      time: "09",
      initial: 4,
      registered: 2,
      conlai: 2,
    },
    {
      id: 8,
      title: "[Interview] Cybersecurity Analyst Intern",
      interviewerId: 2,
      company: "(Công ty CyberSec)",
      position: "Cybersecurity Analyst",
      level: "Intern",
      major: ["An ninh mạng", "Công nghệ thông tin"],
      language: ["Python", "C++"],
      date: "16/04/2022",
      time: "14",
      initial: 5,
      registered: 3,
      conlai: 2,
    },
    {
      id: 9,
      title: "[Interview] Game Developer Intern",
      interviewerId: 3,
      company: "(Công ty GameDev)",
      position: "Game Developer",
      level: "Intern",
      major: ["Công nghệ game", "Khoa học máy tính"],
      language: ["C#", "Unity"],
      date: "17/04/2022",
      time: "11",
      initial: 6,
      registered: 4,
      conlai: 2,
    },
  ];

  const professional = [
    {
      id: 1,
      name: "Mark Zuckerberg",
      dateOfBirth: 1989,
      imageUrl: [
        require("../../../../assets/images/a.jpg"),
        require("../../../../assets/images/b.png"),
        require("../../../../assets/images/c.jpg"),
        require("../../../../assets/images/d.jpg"),
      ],
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
      imageUrl: [
        require("../../../../assets/images/e.jpg"),
        require("../../../../assets/images/f.jpg"),
        require("../../../../assets/images/j.jpg"),
        require("../../../../assets/images/h.jpg"),
      ],
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
      imageUrl: [
        require("../../../../assets/images/i.jpg"),
        require("../../../../assets/images/jj.jpg"),
        require("../../../../assets/images/k.jpg"),
        require("../../../../assets/images/l.jpg"),
      ],
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
      imageUrl: [
        require("../../../../assets/images/a.jpg"),
        require("../../../../assets/images/b.png"),
        require("../../../../assets/images/c.jpg"),
        require("../../../../assets/images/d.jpg"),
      ],
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
      imageUrl: [
        require("../../../../assets/images/e.jpg"),
        require("../../../../assets/images/f.jpg"),
        require("../../../../assets/images/j.jpg"),
        require("../../../../assets/images/h.jpg"),
      ],
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
      imageUrl: [
        require("../../../../assets/images/i.jpg"),
        require("../../../../assets/images/jj.jpg"),
        require("../../../../assets/images/k.jpg"),
        require("../../../../assets/images/l.jpg"),
      ],
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
  ];

  const filterInterviews = () => {
    let filtered = interviewCards.filter((interview) => {
      //Tìm kiếm
      const searchMatch =
        searchTerm === "" ||
        interview.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        interview.company.toLowerCase().includes(searchTerm.toLowerCase());
      // ||
      // interview.skills.some((skill) =>
      //   skill.toLowerCase().includes(searchTerm.toLowerCase())
      // );

      // Lọc theo chuyên ngành
      const majorMatch =
        !selectedMajor ||
        selectedMajor.title === "Hủy lọc" ||
        interview.major.includes(selectedMajor.title);

      // Lọc theo vị trí
      const positionMatch =
        !selectedPosition ||
        selectedPosition.title === "Hủy lọc" ||
        interview.position === selectedPosition.title;

      // Lọc theo cấp bậc
      const levelMatch =
        !selectedLevel ||
        selectedLevel.title === "Hủy lọc" ||
        interview.level === selectedLevel.title;

      // Lọc theo ngôn ngữ lập trình
      const languageMatch =
        selectedLanguages.length === 0 ||
        selectedLanguages.every((lang) =>
          interview.language.includes(lang.title)
        );

      return (
        searchMatch &&
        majorMatch &&
        positionMatch &&
        levelMatch &&
        languageMatch
      );
    });

    setFilteredInterviews(filtered);
  };
  useEffect(() => {
    filterInterviews();
  }, [searchTerm, selectedMajor, selectedPosition, selectedLevel, selectedLanguages]);

  const handleSearch = (value) => {
    setSearchTerm(value.nativeEvent.text)
  };

  // Xử lý chọn major
  const handleMajorSelect = (selectedItem) => {
    if (selectedItem.title === "Hủy lọc") {
      setSelectedMajor(null);
    } else {
      setSelectedMajor(selectedItem);
    }
  };

  // Xử lý chọn position
  const handlePositionSelect = (selectedItem) => {
    if (selectedItem.title === "Hủy lọc") {
      setSelectedPosition(null);
    } else {
      setSelectedPosition(selectedItem);
    }
  };

  // Xử lý chọn level
  const handleLevelSelect = (selectedItem) => {
    if (selectedItem.title === "Hủy lọc") {
      setSelectedLevel(null);
    } else {
      setSelectedLevel(selectedItem);
    }
  };

  // Xử lý chọn/bỏ chọn ngôn ngữ
  const handleLanguageSelect = (item) => {
    if (selectedLanguages.some((lang) => lang.id === item.id)) {
      setSelectedLanguages(
        selectedLanguages.filter((lang) => lang.id !== item.id)
      );
    } else {
      setSelectedLanguages([...selectedLanguages, item]);
    }
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.searchContainer}>
        <AntDesign name="search1" size={20} color="#A7A7A7" />
        <TextInput placeholder="Tìm kiếm" style={styles.inputSearch} onChange={handleSearch}/>
      </View>

      <View style={styles.threeSelect}>
        <SelectDropdown
          data={majors}
          onSelect={handleMajorSelect}
          renderButton={(selectedItem, isOpened) => (
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
          )}
          renderItem={(item, index, isSelected) => (
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
          )}
          showsVerticalScrollIndicator={false}
          dropdownStyle={styles.dropdownMenuStyle}
          buttonStyle={styles.selectButtonStyle}
        />

        <SelectDropdown
          data={positions}
          onSelect={handlePositionSelect}
          renderButton={(selectedItem, isOpened) => (
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
          )}
          renderItem={(item, index, isSelected) => (
            <View
              style={{
                ...styles.dropdownItemStyle,
                ...(isSelected && { backgroundColor: "#D2D9DF" }),
              }}
            >
              <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
            </View>
          )}
          showsVerticalScrollIndicator={false}
          dropdownStyle={styles.dropdownMenuStyle}
          buttonStyle={styles.selectButtonStyle}
        />

        <SelectDropdown
          data={levels}
          onSelect={handleLevelSelect}
          renderButton={(selectedItem, isOpened) => (
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
          )}
          renderItem={(item, index, isSelected) => (
            <View
              style={{
                ...styles.dropdownItemStyle,
                ...(isSelected && { backgroundColor: "#D2D9DF" }),
              }}
            >
              <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
            </View>
          )}
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
        // renderItem={({ item }) => (
        //   <TouchableOpacity
        //     onPress={() => handleLanguageSelect(item)}
        //     style={[
        //       styles.languageItem,
        //       selectedLanguages.some((lang) => lang.id === item.id) &&
        //         styles.selectedLanguageItem,
        //     ]}
        //   >
        //     <Text
        //       style={[
        //         styles.languageText,
        //         selectedLanguages.some((lang) => lang.id === item.id) &&
        //           styles.selectedLanguageText,
        //       ]}
        //     >
        //       {item.title}
        //     </Text>
        //   </TouchableOpacity>
        // )}
        // keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
      />
      <View style={{ marginTop: 10 }}>
        {filteredInterviews?.map((item) => {
          const interviewer = professional.find(
            (prof) => prof.id === item.interviewerId
          );
          return (
            <InterviewCard
              key={item.id}
              interview={item}
              professional={interviewer}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

export default Recommendation;
