// імпорт компонентів
import { Text, View, Image } from "react-native";

// імпорт стилів
import { stylesAuthorComments } from "./stylesAuthorComments";

const AuthorComment = ({ ico, text, time }) => {
  return (
    <View style={stylesAuthorComments.authCommentWrap}>
      <View style={stylesAuthorComments.textBlock}>
        <Text style={stylesAuthorComments.text}>{text}</Text>
        <Text style={stylesAuthorComments.time}>{time}</Text>
      </View>
      <View style={stylesAuthorComments.icoWrap}>
        <Image source={ico} />
      </View>
    </View>
  );
};

export default AuthorComment;
