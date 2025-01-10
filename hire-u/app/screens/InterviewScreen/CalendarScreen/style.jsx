import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    marginTop: 15,
    backgroundColor: "white",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  monthText: {
    fontSize: 18,
    fontFamily: "semiBold",
    color: "#4b93cd",
  },
  calendar: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 5,
    paddingVertical: 8,
    backgroundColor: "white",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  dayHeader: {
    width: "14.28%",
    padding: 10,
    alignItems: "center",
  },
  dayHeaderText: {
    fontFamily: "semiBold",
    color: "#666",
  },
  day: {
    width: "14.28%",
    padding: 10,
    alignItems: "center",
  },
  dayText: {
    fontSize: 16,
    color: "black",
    fontFamily: "regular",
  },
  notCurrentMonth: {
    opacity: 0.3,
  },
  todayText: {
    color: "#2196F3",
    fontWeight: "bold",
  },
  selectedDay: {
    backgroundColor: "#2196F3",
    borderRadius: 10,
  },

  eventsContainer: {
    // marginHorizontal: 5,
    backgroundColor: "#4b93cd",
    borderRadius: 10,
    overflow: "hidden",
    marginTop: 20,
  },
  eventsHeader: {
    fontSize: 16,
    fontFamily: "medium",
    marginVertical: 10,
    color: "white",
    textAlign: "center",
  },
  eventItem: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    marginBottom: 1,
  },
  eventTime: {
    fontSize: 16,
    fontFamily: "medium",
    color: "#4b93cd",
  },
  eventTitle: {
    fontSize: 15,
    fontFamily: "medium",
    marginHorizontal: 10,
  },
  eventLink: {
    color: "#666",
    fontSize: 14,
    fontFamily: "regular",
    marginHorizontal: 10,
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    width: "90%",
    maxHeight: "90%",
  },
  title: {
    fontSize: 16,
    fontFamily: "bold",
    color: "red",
    marginBottom: 10,
  },
  reasonButton: {
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 10,
  },
  selectedReason: {
    borderColor: "#007AFF",
    backgroundColor: "#F0F8FF",
  },
  noteTitle: {
    fontSize: 15,
    fontFamily: "medium",
    color: 'red'
  },
  noteText: {
    fontSize: 13,
    color: "#666",
    marginTop: 5,
    fontFamily: 'regular',
    fontStyle: 'italic'
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 10,
  },
  cancelButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  confirmButton: {
    backgroundColor: "red",
    paddingVertical: 8,
    borderRadius: 5,
  },
});
export default styles;
