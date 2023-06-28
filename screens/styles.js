import { StyleSheet } from "react-native";

//---------ТАБЛИЦЯ СТИЛІВ КОМПОНЕНТА---------//
export const styles = StyleSheet.create({
  container: {
    // стиль головного контейнера - стандартно
    flex: 1,
  },
  // Стиль нашої підложки з картинкою на бекграунді  - розтягується на весь екран
  bgimage: {
    flex: 1,
    justifyContent: "center",
  },
  //
  // Стиль нашого блока білої форми
  formAreaBlock: {
    height: 549,
    // marginBottom: 0,
    marginTop: "auto",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  //
  // Стиль контейнера нашого аватара
  avatarContainer: {
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
    position: "relative",
    top: -60,
    marginBottom: -28,
  },
  //
  // Стиль іконки плюсика
  addIco: {
    zIndex: 100,
    position: "absolute",
    right: -12.5,
    bottom: 14,
  },
  //
  // Стиль нашого заголовок
  title: {
    fontFamily: "Roboto-Medium",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    color: "#212121",
    // marginTop: 92,
    marginBottom: 32,
  },
  //
  // Стиль обгортки нашого інпута
  inputWrap: {
    position: "relative",
    marginBottom: 16,
  },
  //
  // Стиль нашого інпута
  input: {
    backgroundColor: "#F6F6F6",
    height: 50,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderStyle: "solid",
    borderRadius: 8,
    width: 345,
    padding: 16,
    // position: "relative",
    // marginHorizontal: 16,

    fontFamily: "Roboto-Regular",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    // underlineColor: "transparent",
  },
  focusedInput: {
    borderColor: "#FF6C00",
  },
  //
  // Стиль поля натискання "показати пароль"
  pressableShowPassword: {
    position: "absolute",
    right: 16,
    // bottom: 0,
    top: "50%",
    transform: [{ translateY: -8 }],
  },
  //
  // Лише Стиль тексту-кнопки "показати пароль"
  showPassword: {
    fontFamily: "Roboto-Regular",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
  //
  //  Стиль кнопки "Зареєструватися"
  button: {
    borderRadius: 100,
    backgroundColor: "#FF6C00",
    height: 51,
    width: 345,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 27,
    //   marginBottom: 16,
  },
  //
  //  Стиль тексту кнопки "Зареєструватися"
  buttonText: {
    fontFamily: "Roboto-Regular",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    color: "#FFFFFF",
  },
  //
  //  Стиль клікабельної частини лінку "вже зареєстрований"
  linkTextWrap: {
    marginTop: 16,
  },
  //
  //  Стиль тексту лінку "вже зареєстрований"
  linkText: {
    fontFamily: "Roboto-Regular",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },

  //--------- СТИЛІ КОМПОНЕНТА ЗАЛОГІНЕННЯ---------//
  //
  // Стиль нашого блока білої обгортки автинтефікації
  authAreaBlock: {
    paddingTop: 32,
    height: 489,
    // marginBottom: 0,
    marginTop: "auto",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  underline: {
    textDecorationLine: "underline",
  },
  //--------- СТИЛІ КОМПОНЕНТА POSTSSCREEN---------//

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
