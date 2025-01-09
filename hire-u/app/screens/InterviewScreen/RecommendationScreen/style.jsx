import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 10,
    backgroundColor: "#F4F4F4",
  },
  searchContainer: {
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
    width: "100%",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 10,
    shadowColor: "#5f5d5d",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  inputSearch: {
    marginLeft: 5,
  },
  dropdownButtonStyle: {
    width: "32%",
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#ffffff",
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#5f5d5d",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  threeSelect: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 10,
  },
  selectButtonStyle: {
    flex: 1, // Đảm bảo mỗi dropdown có chiều rộng bằng nhau
    marginHorizontal: 5, // Thêm khoảng cách giữa các dropdown
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 13,
    fontWeight: "400",
    color: "#000",
  },

  dropdownMenuStyle: {
    backgroundColor: "#E9ECEF",
    borderRadius: 8,
  },
  dropdownItemStyle: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 13,
    fontWeight: "400",
    color: "#000",
  },
  dropdownItemIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  item: {
    backgroundColor: "#fff",
    height: 50,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  selectedItem: {
    backgroundColor: "#4B93CD",
  },
  title: {
    fontSize: 13,
    fontWeight: "400",
    color: "#4B93CD",
  },
  selectedTitle: {
    color: "#fff",
  },
  countContainer: {
    backgroundColor: "#4B93CD",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    marginLeft: 10,
  },
  selectedCountContainer: {
    backgroundColor: "#fff",
  },
  count: {
    color: "#fff",
  },
  selectedCount: {
    color: "#4B93CD",
  },
});

export default styles;
