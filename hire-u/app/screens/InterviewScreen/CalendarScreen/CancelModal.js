// CancelModal.js
import React from "react";
import {
  Modal,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import styles from "./style";

const CANCEL_REASONS = [
  "Tôi có công việc đột xuất trùng với lịch phỏng vấn",
  "Tôi muốn chuẩn bị kỹ càng hơn cho lần phỏng vấn sau",
  "Buổi phỏng vấn này không còn phù hợp với tôi",
];

const CancelModal = ({ visible, onClose, onConfirm }) => {
  const [selectedReason, setSelectedReason] = React.useState("");
  const [customReason, setCustomReason] = React.useState("");

  const handleConfirm = () => {
    const reason =
      selectedReason === "Lý do khác..." ? customReason : selectedReason;
    if (selectedReason === "Lý do khác..." && !customReason.trim()) {
      alert("Vui lòng nhập lý do")
      return; 
    }
    onConfirm(reason);
    setSelectedReason("");
    setCustomReason("");
  };

  const handleClose = () => {
    setSelectedReason("");
    setCustomReason("");
    onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={handleClose}
    >
      <View style={styles.overlay}>
        <ScrollView style={styles.modalContainer}>
          <Text style={styles.title}>
            Bạn có chắc chắn muốn hủy buổi phỏng vấn đã đăng ký?
          </Text>
          <Text
            style={{
              fontFamily: "regular",
              fontStyle: "italic",
              marginBottom: 15,
            }}
          >
            Hãy cho chúng tôi biết lý do bạn muốn hủy...
          </Text>

          {CANCEL_REASONS.map((reason) => (
            <TouchableOpacity
              key={reason}
              style={[
                styles.reasonButton,
                selectedReason === reason && styles.selectedReason,
              ]}
              onPress={() => setSelectedReason(reason)}
            >
              <Text style={[styles.eventLink, { color: "black" }]}>
                {reason}
              </Text>
            </TouchableOpacity>
          ))}

          <TextInput
            style={[
              styles.reasonButton,
              { height: 100, textAlignVertical: "top" },
              selectedReason === "Lý do khác..." && styles.selectedReason,
            ]}
            onPress={() => setSelectedReason("Lý do khác...")}
            multiline
            placeholder="Nhập lý do của bạn..."
            value={customReason}
            onChangeText={setCustomReason}
          />

          <View style={{ marginBottom: 20 }}>
            <Text style={styles.noteTitle}>Lưu ý:</Text>
            <Text style={styles.noteText}>
              - Nếu bạn hủy buổi phỏng vấn đã đăng ký trước 24h bắt đầu thì buổi
              đăng ký này sẽ được xóa khỏi lịch của bạn, bạn vẫn có thể đăng ký
              lại (nếu còn số lượng trống) hoặc đăng ký buổi phỏng vấn thử khác
              một cách bình thường.
            </Text>
            <Text style={styles.noteText}>
              - Nếu bạn hủy trong vòng 24h trước khi bắt đầu buổi phỏng vấn thì
              tài khoản của bạn sẽ bị cảnh cáo, nếu bị cảnh cáo quá 3 lần thì
              bạn sẽ không được đăng ký phỏng vấn trong vòng 3 tháng
            </Text>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.cancelButton} onPress={handleClose}>
              <Text style={[styles.eventTitle, { color: "black" }]}>Thoát</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.confirmButton,
                !selectedReason && { backgroundColor: "#ffcccc" },
              ]}
              onPress={handleConfirm}
              disabled={!selectedReason}
            >
              <Text style={[styles.eventTitle, { color: "white" }]}>
                Xác nhận hủy
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
};

export default CancelModal;
