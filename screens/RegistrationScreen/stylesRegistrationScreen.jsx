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
  // Стиль нашого блока білої форми
  formAreaBlock: {
    height: 549,
    marginTop: "auto",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  //
  // Стиль контейнера нашого аватара на скріні реєстрації
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
  //обгортка фотки аватару для приховування скруглених кутів
  avatarPhotoWrap: {
    borderRadius: 16,
    overflow: "hidden",
  },
  // Стиль іконки плюсика (позиціонування)
  addIco: {
    zIndex: 100,
    position: "absolute",
    right: -12.5,
    bottom: 14,
    backgroundColor: "white",
    borderRadius: 12.5,
    overflow: "hidden",
  },
  //
  // Стиль нашого заголовок реєстрація і логін
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
  //
  // стиль інпута змінюється колір, коли він у фокусі
  focusedInput: {
    borderColor: "#FF6C00",
  },
  //
  // Стиль поля натискання "показати пароль" (позиціонування)
  pressableShowPassword: {
    position: "absolute",
    right: 16,
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
  //  Стиль кнопки "Зареєструватися" і "Залогінитись"
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
  //  Стиль тексту кнопки "Зареєструватися" і "Залогінитись"
  buttonText: {
    fontFamily: "Roboto-Regular",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    color: "#FFFFFF",
  },
  //
  //  Стиль клікабельної частини лінку "вже зареєстрований" або "зареєструватися"
  linkTextWrap: {
    marginTop: 16,
  },
  //
  //  Стиль тексту лінку "вже зареєстрований" або "зареєструватися"
  linkText: {
    fontFamily: "Roboto-Regular",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
});
