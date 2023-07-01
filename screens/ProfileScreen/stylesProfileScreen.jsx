import { StyleSheet } from "react-native";

//---------ТАБЛИЦЯ СТИЛІВ КОМПОНЕНТА---------//
export const stylesProfileScreen = StyleSheet.create({
  container: {
    flex: 1,
  },
  // Стиль нашої підложки з картинкою на бекграунді  - розтягується на весь екран
  bgimage: {
    flex: 1,
    justifyContent: "center",
  },
  profileAreaBlock: {
    paddingTop: 32,
    marginTop: 147,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingBottom: 192,
  },
  avatarContainer: {
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
    position: "relative",
    top: -60,
    marginBottom: -28,
  },
  avatarPhotoWrap: {
    borderRadius: 16,
    overflow: "hidden",
  },
  removeIco: {
    zIndex: 100,
    position: "absolute",
    right: -12.5,
    bottom: 14,
    backgroundColor: "white",
    borderRadius: 12.5,
    overflow: "hidden",
  },
  logOutButton: {
    position: "absolute",
    right: 16,
    top: 22,
  },
  profileName: {
    fontFamily: "Roboto-Medium",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 30,
    letterSpacing: 0.3,
    color: "#212121",
    marginTop: 2,
  },
});
