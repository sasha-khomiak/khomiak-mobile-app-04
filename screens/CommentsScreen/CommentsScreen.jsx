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

import VisitorComment from "../../components/VisitorComment";
import AuthorComment from "../../components/AuthorComment";

import Sea from "../../assets/images/sea.jpg";
import AuthorAva from "../../assets/images/AuthorAva.jpg";
import VisitorAva from "../../assets/images/VisitorAva.jpg";

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
            marginBottom: 32,
          }}
        >
          <Image source={Sea} />
        </View>
        <VisitorComment
          ico={VisitorAva}
          text="Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!"
          time="09 червня, 2020 | 08:40"
        />
        <AuthorComment
          ico={AuthorAva}
          text="A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images."
          time="09 червня, 2020 | 09:14"
        />

        <VisitorComment
          ico={VisitorAva}
          text="Thank you! That was very helpful!"
          time="09 червня, 2020 | 09:20"
        />
      </ScrollView>
      {/* блок інпута комента */}
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.container}
        >
          <View
            style={{
              marginTop: "auto",
              marginBottom: 16,
            }}
          >
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
