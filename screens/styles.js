import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  //--------- СТИЛІ КОМПОНЕНТА ХЕДЕРА---------//

  screenHeader: {
    marginTop: 44,
    height: 44,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#BDBDBD",
    // width: "100%",
  },
  screenHeaderLeft: {
    // backgroundColor: "violet",
    alignItems: "center",
    justifyContent: "center",
    width: "15%",
  },
  screenHeaderCenter: {
    alignItems: "center",
    justifyContent: "center",
    width: "70%",
  },
  screenHeaderRight: {
    // backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
    width: "15%",
  },

  screenHeaderText: {
    fontFamily: "Roboto-Medium",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.408,
    color: "#212121",
  },
});
