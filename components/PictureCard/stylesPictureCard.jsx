import { StyleSheet } from "react-native";

//---------ТАБЛИЦЯ СТИЛІВ КОМПОНЕНТА---------//
export const stylesPictureCard = StyleSheet.create({
  pictureCard: {
    marginTop: 32,
  },
  pictureWrap: {
    borderRadius: 8,
    overflow: "hidden",
  },
  nameOfPicture: {
    marginTop: 8,
    fontFamily: "Roboto-Medium",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 16,
    color: "#212121",
  },
  pictureInfo: {
    flexDirection: "row",
    marginTop: 8,
  },
  pictureComments: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 24,
  },
  pictureStatistics: {
    fontFamily: "Roboto-Regular",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    color: "#212121",
  },
  pictureLikes: { flexDirection: "row", alignItems: "center" },
  pictureLocation: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "auto",
  },
  underline: {
    textDecorationLine: "underline",
  },
});
