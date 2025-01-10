import React from "react";
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import Header from "../../../components/HeaderTitle";
import styles from "./style";

const Detail = ({ interview, professional }) => {
  return (
    <View style={{ paddingHorizontal: 15 }}>
      <Header name={"Chi tiết buổi phỏng vấn"} />
      <View style={styles.three}>
        <View style={{ flex: 1, marginRight: 10 }}>
          <Image
            source={professional.imageUrl[1]}
            style={{ width: "100%", height: 70, borderRadius: 10 }}
          />
          <Text style={styles.note}>Đã mentoring 30+ junior developers</Text>
        </View>
        <View style={{ flex: 1, marginRight: 10 }}>
          <Image
            source={professional.imageUrl[2]}
            style={{ width: "100%", height: 70, borderRadius: 10 }}
          />
          <Text style={styles.note}>
            Tổ chức các workshop về phát triển sự nghiệp IT
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <Image
            source={professional.imageUrl[3]}
            style={{ width: "100%", height: 70, borderRadius: 10 }}
          />
          <Text style={styles.note}>Diễn giả tại nhiều hội thảo công nghệ</Text>
        </View>
      </View>

      <Text style={[styles.text, { color: "#515050", marginBottom: 10 }]}>
        Đây là cơ hội để các sinh viên IT được trao đổi trực tiếp với chuyên gia
        có nhiều năm kinh nghiệm trong lĩnh vực Full Stack Development. Buổi
        phỏng vấn sẽ giúp bạn hiểu rõ hơn về vị trí Intern, đồng thời nhận được
        những đánh giá, góp ý có giá trị cho định hướng nghề nghiệp
      </Text>

      <Header name={"Yêu cầu ứng viến"} />
      <View>
        <Text style={styles.text}>
          • Là sinh viên năm 3, năm 4 ngành Công nghệ thông tin hoặc các ngành
          liên quan.
        </Text>
        <Text style={styles.text}>
          • Có kiến thức cơ bản về lập trình Java.
        </Text>
        <Text style={styles.text}>
          • Đã học qua HTML, CSS, JavaScript và các framework cơ bản.
        </Text>
        <Text style={styles.text}>
          • Có hiểu biết về cơ sở dữ liệu (MySQL, PostgreSQL,...).
        </Text>
      </View>

      <Header name={"Lợi ích khi tham gia"} />
      <Text style={styles.text}>
        • Được đánh giá năng lực bởi các chuyên gia có kinh nghiệm.
      </Text>
      <Text style={styles.text}>
        • Nhận được phản hồi chỉ tiết từ những người dày dạn kinh nghiệm.
      </Text>
      <Text style={styles.text}>
        • Có cơ hội thực tập và làm việc tại những nơi phù hợp.
      </Text>
      <Text style={styles.text}>
        • Hiểu rõ hơn về môi trường làm việc thực tế và yêu cầu của nhà tuyển
        dụng.
      </Text>
      <Text style={styles.text}>• Mở rộng mạng lưới trong lĩnh vực IT.</Text>
      <Text style={styles.text}>
        • Nâng cao kỹ năng phỏng vấn và giao tiếp.
      </Text>
      <Header name={"Chuẩn bị cho buổi phỏng vấn"} />

      <Text style={styles.text}>• CV đã cập nhật.</Text>
      <Text style={styles.text}>• Portfolio các project đã làm (nếu có).</Text>
      <Text style={styles.text}>• Laptop để demo code nếu được yêu cầu.</Text>
      <Text style={styles.text}>
        • Chuẩn bị các câu hỏi muốn trao đổi với chuyên gia.
      </Text>

      <Header name={"Địa điểm phỏng vấn"} />
      <Text style={styles.text}>Microsoft Team</Text>
      <Header name={"Cách thức tham gia"} />
      <Text style={styles.text}>
        Bạn nộp hồ sơ trực tuyến bằng cách bấm Đăng ký
      </Text>
      <Text style={[styles.registerText, { marginTop: 20 }]}>
        Hạn nộp hồ sơ: 11/01/2025
      </Text>
    </View>
  );
};
export default Detail;
