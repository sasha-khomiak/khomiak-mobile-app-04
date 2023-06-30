import {
  Text,
  View,
  Pressable,
  ScrollView,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  Image,
} from "react-native";

import { styles } from "../styles";

import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";

import Sea from "../../assets/images/sea.jpg";

const CommentsScreen = () => {
  const navigation = useNavigation();
  console.log(navigation.getState());

  return (
    <View style={styles.container}>
      {/* верхнє меню */}
      <View style={styles.screenHeader}>
        <View style={styles.screenHeaderLeft}>
          {/* тут кнопку треба переписати  */}
          <Pressable
            onPress={() =>
              navigation.navigate("Home", { screen: "PostsScreen" })
            }
          >
            <AntDesign name="arrowleft" size={24} color="#BDBDBD" />
          </Pressable>
        </View>
        <View style={styles.screenHeaderCenter}>
          <Text style={styles.screenHeaderText}>Коментарі</Text>
        </View>
        <View style={styles.screenHeaderRight}></View>
      </View>
      {/* блок головного контенту */}
      <ScrollView style={styles.screenMainContent}>
        <View
          style={{
            borderRadius: 8,
            overflow: "hidden",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Image source={Sea} />
        </View>
      </ScrollView>
      {/* блок інпута комента */}
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.container}
        >
          <View style={{ backgroundColor: "red" }}>
            <View style={styles.inputCommentWrap}>
              <TextInput
                placeholder="Коментувати..."
                name="comment"
                style={styles.inputComment}
              />
              <Pressable style={styles.commentButton}>
                <AntDesign name="arrowup" size={24} color="white" />
              </Pressable>
            </View>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default CommentsScreen;
