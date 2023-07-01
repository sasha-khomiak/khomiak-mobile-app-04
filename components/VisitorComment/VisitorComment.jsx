// імпорт компонентів
import { Text, View, Image } from "react-native";

// імпорт стилів
import { stylesVisitorComments } from "./stylesVisitorComment";

const VisitorComment = ({ ico, text, time }) => {
  return (
    <View style={stylesVisitorComments.visitCommentWrap}>
      <View style={stylesVisitorComments.icoWrap}>
        <Image source={ico} />
      </View>
      <View style={stylesVisitorComments.textBlock}>
        <Text style={stylesVisitorComments.text}>{text}</Text>
        <Text style={stylesVisitorComments.time}>{time}</Text>
      </View>
    </View>
  );
};

export default VisitorComment;
