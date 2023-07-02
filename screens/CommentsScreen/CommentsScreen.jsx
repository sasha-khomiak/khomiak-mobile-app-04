// ДОПРАЦЮВАТИ КНОПКУ НАЗАД!!!!!!!!
// ВИПРАВИТИ БАГ ПЕРЕКРИТТЯ ІНПУТУ!!!!!
//імпорт компонентів
import {
  Text,
  View,
  Pressable,
  ScrollView,
  TouchableWithoutFeedback,
  KeyboardAvoidingView, // новий імпорт
  Platform, // новий імпорт
  Keyboard,
  Image,
  TextInput,
} from "react-native";
// import { TextInput } from "react-native-gesture-handler";

// імпорт компонентів
import VisitorComment from "../../components/VisitorComment/VisitorComment";
import AuthorComment from "../../components/AuthorComment/AuthorComment";

// імпорт стилів
import { styles } from "../styles"; // тут загальні для всіх стилі контейнера і хедера
import { stylesCommentsScreen } from "./stylesCommentsScreen";

// імпорт векторних іконок
import { AntDesign } from "@expo/vector-icons";

// імпорт навігації
import { useNavigation } from "@react-navigation/native";

//імпорт зображень
import Sea from "../../assets/images/sea.jpg";
import AuthorAva from "../../assets/images/AuthorAva.jpg";
import VisitorAva from "../../assets/images/VisitorAva.jpg";

import CustomHeader from "../../components/CustomHeader/CustomHeader";

const CommentsScreen = () => {
  const navigation = useNavigation();
  console.log(navigation.getState());

  return (
    <View style={stylesCommentsScreen.container}>
      {/* верхнє меню */}
      <CustomHeader title="Коментарі" />

      {/* блок головного контенту початок */}

      <ScrollView style={styles.screenMainContent}>
        <View style={stylesCommentsScreen.imageWrap}>
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
        <AuthorComment
          ico={AuthorAva}
          text="A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images."
          time="09 червня, 2020 | 09:14"
        />
      </ScrollView>

      <KeyboardAvoidingView // визначаємо ОС та налаштовуємо поведінку клавіатури
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <View style={stylesCommentsScreen.inputCommentWrap}>
          <TextInput
            placeholder="Коментувати..."
            name="comment"
            style={stylesCommentsScreen.inputComment}
          />
          <Pressable style={stylesCommentsScreen.commentButton}>
            <AntDesign name="arrowup" size={24} color="white" />
          </Pressable>
        </View>
      </KeyboardAvoidingView>
      {/* блок головного контенту кінець */}
    </View>
  );
};

export default CommentsScreen;
