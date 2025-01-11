import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const navigation = useNavigation();

  const profileSections = [
    { icon: "person-outline", title: "Tiểu sử" },
    { icon: "work-outline", title: "Kinh nghiệm", navigateTo: "Experience" },
    { icon: "school", title: "Trình độ học vấn" },
    { icon: "stars", title: "Kỹ năng" },
    { icon: "language", title: "Ngôn ngữ" },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header Background with Profile Info */}
      <View style={styles.headerContainer}>
        <Image
          source={{
            uri: "https://images.genius.com/64683eb76f812a3707e1b697e4989990.799x800x1.jpg",
          }}
          style={styles.headerImage}
        />
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <MaterialIcons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        {/* Overlay for better text readability */}
        <View style={styles.overlay} />

        {/* Profile Info */}
        <View style={styles.profileInfo}>
          <Image
            source={{
              uri: "https://media.vov.vn/sites/default/files/styles/front_large/public/2021-10/img-bgt-2021-nsx-running-man-viet-van-up-mo-ve-viec-jack-tiep-tuc-dong-hanh-cung-chuong-trinh-1--1631448806-width666height1000.jpeg?resize=p_8,w_",
            }}
            style={styles.profileImage}
          />
          <View style={styles.infoContainer}>
            <Text style={styles.name}>Hồ Kim Thiên Nga</Text>
            <Text style={styles.location}>Thủ Đức, Việt Nam</Text>

            {/* Stats Row */}
            <View style={styles.statsRow}>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>120k</Text>
                <Text style={styles.statLabel}>Người theo dõi</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>23k</Text>
                <Text style={styles.statLabel}>Đang theo dõi</Text>
              </View>
              <TouchableOpacity style={styles.editButton}>
                <Text style={styles.editButtonText}>Chỉnh hồ sơ</Text>
                <MaterialIcons
                  name="edit"
                  size={16}
                  color="#fff"
                  style={styles.editIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      {/* Profile Sections */}
      <View style={styles.sectionsContainer}>
        {profileSections.map((section, index) => (
          <TouchableOpacity
            key={index}
            style={styles.sectionButton}
            onPress={() => {
              if (section.navigateTo) {
                navigation.navigate(section.navigateTo);
              }
            }}
          >
            <MaterialIcons name={section.icon} size={24} color="#4A90E2" />
            <Text style={styles.sectionText}>{section.title}</Text>
            <MaterialIcons name="add" size={24} color="#4A90E2" />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    height: 250,
    position: "relative",
    // borderRadius: 20,
    overflow: "hidden",
  },
  headerImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  backButton: {
    position: "absolute",
    top: 10,
    // left: 16,
    // backgroundColor: "white",
    borderRadius: 30,
    padding: 8,
    elevation: 3,
    zIndex: 100,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  profileInfo: {
    flexDirection: "column",
    padding: 16,
    position: "absolute",
    // marginTop: 20,
    top: 30,
    bottom: 20,
    left: 0,

    right: 0,
  },
  profileImage: {
    width: 80,
    height: 80,
    marginBottom: 10,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: "#fff",
  },
  infoContainer: {
    flex: 1,

    marginLeft: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    fontFamily: "bold",

    color: "#fff",
  },
  location: {
    fontSize: 14,
    fontFamily: "medium",

    color: "#fff",
    marginTop: 4,
  },
  statsRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
  },
  statItem: {
    marginRight: 24,
    // flexDirection: "row",
    // gap: 3,
  },
  statNumber: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    fontFamily: "medium",
  },
  statLabel: {
    fontSize: 12,
    fontFamily: "medium",

    color: "#fff",
  },
  editButton: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "auto",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
  editButtonText: {
    color: "#fff",
    fontFamily: "medium",

    marginRight: 4,
  },
  editIcon: {
    marginLeft: 4,
  },
  sectionsContainer: {
    padding: 16,
    marginTop: 20,
  },
  sectionButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#D3EEFF",
    fontFamily: "medium",

    borderRadius: 12,
    marginBottom: 8,
  },
  sectionText: {
    flex: 1,
    marginLeft: 12,
    fontFamily: "medium",

    fontSize: 16,
    color: "#4A90E2",
  },
});

export default Profile;
