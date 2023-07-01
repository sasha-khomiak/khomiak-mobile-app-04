import { StyleSheet } from "react-native";

//---------ТАБЛИЦЯ СТИЛІВ КОМПОНЕНТА---------//
export const stylesVisitorComments = StyleSheet.create({
  visitCommentWrap: {
    flexDirection: "row",
    marginBottom: 24,
    width: 343,
    marginLeft: "auto",
    marginRight: "auto",
  },
  icoWrap: {
    marginRight: 16,
    borderRadius: 14,
    overflow: "hidden",
    width: 28,
    height: 28,
  },

  textBlock: {
    padding: 16,
    backgroundColor: "rgba(0 0 0 / 0.03)",
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    borderTopRightRadius: 6,
    width: 299,
  },
  text: {
    fontFamily: "Roboto-Regular",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 13,
    lineHeight: 18,
    color: "#212121",
    marginBottom: 8,
  },
  time: {
    fontFamily: "Roboto-Regular",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 10,
    color: "#BDBDBD",
    textAlign: "right",
  },
});
