import { StyleSheet } from "react-native";

//---------ТАБЛИЦЯ СТИЛІВ КОМПОНЕНТА---------//
export const stylesCreatePostsScreen = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContent: {
    backgroundColor: "white",
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    height: "100%",
  },
  photoWrap: {
    width: "100%",
    height: 240,
    marginLeft: "auto",
    marginRight: "auto",
    // marginTop: 32,

    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#BDBDBD",
    borderRadius: 8,
  },
  buttonLoadPhoto: {
    backgroundColor: "white",
    width: 60,
    height: 60,
    borderRadius: 30,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateY: -30 }, { translateX: -30 }],
    alignItems: "center",
    justifyContent: "center",
  },

  operationPhotoText: {
    marginTop: 8,
    fontFamily: "Roboto-Medium",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 16,
    color: "#BDBDBD",
  },

  inputName: {
    marginTop: 32,
    paddingVertical: 15,
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
  },
  inputPlaceWrap: {
    marginTop: 16,
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
    // paddingBottom: 15,
    // paddingTop: 15,
  },
  inputPlace: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 28,
  },
  inputPlaceIco: {
    position: "absolute",
    top: "50%",
    transform: [{ translateY: -14 }],
  },
  postButton: {
    marginTop: 32,
    maxWidth: 343,
    width: "100%",
    backgroundColor: "#F6F6F6",
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 100,
    marginLeft: "auto",
    marginRight: "auto",
  },
  postButtonText: {
    textAlign: "center",
    fontFamily: "Roboto-Medium",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 16,
    color: "#BDBDBD",
  },
});
