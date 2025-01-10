import React from "react";
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import styles from "./style";

const Professional = ({ interview, professional }) => {
  return (
    <>
      <View style={styles.namngang1}>
        <Image
          source={professional.imageUrl[0]}
          style={{ width: 80, height: 80, borderRadius: 80, marginRight: 20 }}
        />
        <View>
          <Text style={styles.registerText}>{professional.name}</Text>
          <Text style={([styles.position], { marginVertical: 10 })}>
            {professional.dateOfBirth} - TP. Hồ Chí Minh
          </Text>
          <Text style={styles.position}>{professional.education}</Text>
        </View>
      </View>
      <View style={styles.nenxanh}>
        <View style={styles.namngang}>
          <MaterialIcons name="work" size={24} color="#4B93CD" />
          <Text style={[styles.registerText, { marginLeft: 5 }]}>
            Công việc hiện tại
          </Text>
        </View>

        <View style={{ paddingLeft: 20, marginTop: 10 }}>
          {professional.currentWork.map((item, index) => (
            <Text key={index} style={styles.text}>
              • {item}
            </Text>
          ))}
        </View>
      </View>

      <View style={[styles.nenxanh, { backgroundColor: "#fff" }]}>
        <View style={styles.namngang}>
          <MaterialIcons name="workspace-premium" size={24} color="#4B93CD" />
          <Text style={[styles.registerText, { marginLeft: 5 }]}>
            Kinh nghiệm
          </Text>
        </View>

        <View style={{ paddingLeft: 20, marginTop: 10 }}>
          {professional.experience.map((item, index) => (
            <View
              style={[
                styles.namngangLon,
                { alignItems: "flex-start", marginTop: 0 },
              ]}
              key={index}
            >
              <Text style={[styles.text, { flex: 1 }]}>
                • {item.description}
              </Text>
              <Text style={[styles.text, { color: "#4B93CD", marginLeft: 5 }]}>
                ({item.start}-{item.end})
              </Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.nenxanh}>
        <View style={styles.namngang}>
          <MaterialIcons name="gpp-good" size={24} color="#4B93CD" />
          <Text style={[styles.registerText, { marginLeft: 5 }]}>
            Chuyên môn và kỹ năng
          </Text>
        </View>

        <View style={{ paddingLeft: 20, marginTop: 10 }}>
          {professional.skill.map((item, index) => (
            <Text key={index} style={styles.text}>
              • {item}
            </Text>
          ))}
        </View>
      </View>
    </>
  );
};

export default Professional;
