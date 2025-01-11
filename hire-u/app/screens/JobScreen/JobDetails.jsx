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

const JobDetails = ({ route }) => {
  const navigation = useNavigation();
  const { job } = route.params;

  return (
    <ScrollView style={styles.container}> 
      <View style={styles.headerContainer}>
        <View style={styles.headerTopSection}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <MaterialIcons name="arrow-back" size={24} color="#4A90E2" />
          </TouchableOpacity>
        </View>

        {/* Gray background section */}
        <View style={styles.headerBottomSection}>
          <View style={styles.logoContainer}>
            {/* <Image source={job.logo} style={styles.companyLogo} /> */}
            <Image
              source={{
                uri: "https://www.dostupnysoftver.sk/70-large_default/google-chrome.jpg",
              }}
              style={{ width: 100, height: 100, borderRadius: 100 }}
            />
          </View>

          <Text style={styles.jobTitle}>{job.title}</Text>
          <View style={styles.companyInfo}>
            <Text style={styles.companyName}>{job.company}</Text>
            <Text style={styles.dot}>•</Text>
            <Text style={styles.location}>{job.location}</Text>
            <Text style={styles.dot}>•</Text>
            <Text style={styles.timePosted}>{job.timePosted}</Text>
          </View>
        </View>
      </View>

      {/* Job Description Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Mô tả công việc</Text>
        <Text style={styles.description}>{job.description}</Text>
        <TouchableOpacity style={styles.readMoreButton}>
          <Text style={styles.readMoreText}>Đọc thêm</Text>
        </TouchableOpacity>
      </View>

      {/* Requirements Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Yêu cầu</Text>
        {job.requirements.map((requirement, index) => (
          <View key={index} style={styles.requirementItem}>
            <Text style={styles.bulletPoint}>•</Text>
            <Text style={styles.requirementText}>{requirement}</Text>
          </View>
        ))}
      </View>

      {/* Apply Button */}
      <TouchableOpacity style={styles.applyButton}>
        <Text style={styles.applyButtonText}>ỨNG TUYỂN</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F4",
  },
  headerContainer: {
    backgroundColor: "#F3F2F2",
    // height:100,
  },
  headerTopSection: {
    backgroundColor: "#FFFFFF",
    height: 60,
    width: "100%",
  },
  headerBottomSection: {
    backgroundColor: "#F3F2F2",
    alignItems: "center",
    paddingBottom: 20,
  },
  backButton: {
    padding: 16,
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1,
  },
  logoContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginTop: -50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  companyLogo: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  jobTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1a1b4b",
    marginTop: 16,
    marginBottom: 8,
    textAlign: "center",
  },
  companyInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
  },
  companyName: {
    fontSize: 16,
    color: "#333",
  },
  dot: {
    marginHorizontal: 8,
    color: "black",
    fontSize: 30,
  },
  location: {
    fontSize: 16,
    color: "#333",
  },
  timePosted: {
    fontSize: 16,
    color: "#666",
  },
  section: {
    padding: 16,
    // borderBottomWidth: 1,
    // borderBottomColor: "#f0f0f0",
    backgroundColor: "white",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1a1b4b",
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: "#524B6B",
    lineHeight: 24,
  },
  readMoreButton: {
    marginTop: 12,
    backgroundColor: "#D3EEFF",
    color: "#4B93CD",
    width: 90,
    height: 40,
    borderRadius: 9,
  },
  readMoreText: {
    color: "#4A90E2",
    textAlign: "center",
    marginTop: 10,
    fontSize: 16,
  },
  requirementItem: {
    flexDirection: "row",
    marginBottom: 12,
  },
  bulletPoint: {
    marginRight: 8,
    color: "#666",
    fontSize: 16,
  },
  requirementText: {
    flex: 1,
    fontSize: 16,
    color: "#150A33",
    lineHeight: 24,
  },
  applyButton: {
    backgroundColor: "#4B93CD",
    margin: 16,
    padding: 16,
    marginLeft: 36,
    marginRight: 36,
    borderRadius: 8,
    alignItems: "center",
  },
  applyButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default JobDetails;
