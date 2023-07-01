import { StyleSheet } from "react-native";

//---------ТАБЛИЦЯ СТИЛІВ КОМПОНЕНТА---------//
export const stylesPostsScreen = StyleSheet.create({
  container: {
    flex: 1,
  },
  screenMainContent: {
    marginBottom: 0,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
  },

  userBlock: {
    height: 60,
    flexDirection: "row",
    marginBottom: 16,
  },

  userBlockPhotoWrap: {
    borderRadius: 16,
    overflow: "hidden",
  },
  userBlockInfo: {
    paddingLeft: 8,
    justifyContent: "center",
  },

  userBlockName: {
    fontFamily: "Roboto-Bold",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 13,
    lineHeight: 15,
    lineHeight: 15,
    color: "#212121",
  },

  userBlockEmail: {
    fontFamily: "Roboto-Regular",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 11,
    lineHeight: 13,
    lineHeight: 13,
    color: "rgba(33, 33, 33, 0.8)",
  },
});
