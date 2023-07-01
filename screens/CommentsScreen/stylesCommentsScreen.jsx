import { StyleSheet } from "react-native";

//---------ТАБЛИЦЯ СТИЛІВ КОМПОНЕНТА---------//
export const stylesCommentsScreen = StyleSheet.create({
  container: {
    flex: 1,
  },
  // блок основного вікна
  imageWrap: {
    borderRadius: 8,
    overflow: "hidden",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 32,
    marginTop: 32,
  },
  // блок інпута
  // inputContainer: {
  //   flex: 1, // цікавий ефект заповзання тексту під інпут
  // },
  inputCommentWrap: {
    width: 343,
    height: 50,
    marginLeft: "auto",
    marginRight: "auto",
    //   marginTop: "auto",
    marginBottom: 16,
    marginTop: 5,
  },
  inputComment: {
    width: "100%",
    height: "100%",
    backgroundColor: "#F6F6F6",
    borderColor: "#BDBDBD",
    borderRadius: 25,
    paddingLeft: 16,
    paddingRight: 50,
    borderWidth: 1,
  },
  commentButton: {
    position: "absolute",
    top: 8,
    right: 8,
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#FF6C00",
    alignItems: "center",
    justifyContent: "center",
  },
});
