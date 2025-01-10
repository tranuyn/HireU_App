import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    backgroundColor: "#D3EEFF",
    paddingHorizontal: 10,
    paddingVertical: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleHeader: {
    fontSize: 15,
    fontFamily: "semibold",
    color: "#4B93CD",
  },

  contentContainer: { paddingHorizontal: 20 },
  namngang: {
    flexDirection: "row",
    alignItems: "center",
  },
  namngang1: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  namngangLon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  three: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  title: {
    fontFamily: "bold",
    fontSize: 14,
    marginTop: 20,
  },
  text: {
    fontSize: 13,
    fontFamily: "regular",
    color: "#2E2D2D",
  },
  note: {
    fontSize: 13,
    fontFamily: "medium",
    color: "#000",
  },
  registerButton: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 15,
    borderWidth: 1, // Đặt độ dày của đường viền
    borderColor: "#4B93CD",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 30, // Màu sắc của đường viền
  },
  huy: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 15,
    borderWidth: 1, // Đặt độ dày của đường viền
    borderColor: "#FF898B",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginRight: 20,
  },
  dki: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 15,
    borderWidth: 1, // Đặt độ dày của đường viền
    borderColor: "#4B93CD",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  registerText: {
    color: "#4B93CD",
    fontSize: 14,
    fontFamily: "semiBold",
    marginRight: 5,
  },
  position: {
    color: "#464646",
    fontSize: 14,
    fontFamily: "semiBold",
  },
  tabBar: {
    backgroundColor: "#1F68A3",
    elevation: 0, // Remove shadow on Android
    shadowOpacity: 0, // Remove shadow on iOS
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
    height: "auto",
  },
  indicator: {
    backgroundColor: "white",
    height: 3,
    borderRadius: 3,
    marginBottom: -1,
  },
  labelContainer: {
    flex: 1,
    alignItems: "center", // Căn giữa chữ theo chiều ngang
    justifyContent: "center",
    textAlign: "center",
  },
  label: {
    fontSize: 13,
    fontFamily: "medium",
    textTransform: "none",
    textAlign: "center",
  },
  scene: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  mainContainer: {
    flex: 1,
  },
  tabViewContainer: {
    flex: 1,
  },
  scene: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 15,
  },
  nenxanh: {
    backgroundColor: "#EDF7FF",
    padding: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Nền mờ
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 15,
    fontFamily: "bold",
    color: "#00B743",
    marginBottom: 10,
    borderBottomColor: "#000",
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default styles;
