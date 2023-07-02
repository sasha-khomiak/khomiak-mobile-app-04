// ДОПРАЦЮВАТИ КНОПКУ НАЗАД!!!!!!!!
// Чому двічі консолиться
// Компоненти
import {
  Text,
  View,
  Pressable,
  ScrollView,
  TouchableWithoutFeedback,
  KeyboardAvoidingView, // новий імпорт
  Platform, // новий імпорт
  Keyboard,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";

// Стилі
import { styles } from "../styles";
import { stylesCreatePostsScreen } from "./stylesCreatePostsScreen";

// Іконки
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

// Навігація
import { useNavigation } from "@react-navigation/native";

const CreatePostsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={stylesCreatePostsScreen.container}>
      {/* верхнє меню вантажиться з компонента HOME із customHeader */}
      {/* блок головного контенту */}
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <ScrollView style={stylesCreatePostsScreen.mainContent}>
            <View style={stylesCreatePostsScreen.photoWrap}>
              <Pressable style={stylesCreatePostsScreen.buttonLoadPhoto}>
                <FontAwesome name="camera" size={24} color="#BDBDBD" />
              </Pressable>
            </View>
            <Text style={stylesCreatePostsScreen.operationPhotoText}>
              Завантажте фото
            </Text>

            <TextInput
              placeholder="Назва..."
              style={stylesCreatePostsScreen.inputName}
            ></TextInput>
            <View style={stylesCreatePostsScreen.inputPlaceWrap}>
              <TextInput
                placeholder="Місцевість..."
                style={stylesCreatePostsScreen.inputPlace}
              />

              <AntDesign
                name="enviromento"
                size={24}
                color="#BDBDBD"
                style={stylesCreatePostsScreen.inputPlaceIco}
              />
            </View>

            <Pressable style={stylesCreatePostsScreen.postButton}>
              <Text style={stylesCreatePostsScreen.postButtonText}>
                Опубліковати
              </Text>
            </Pressable>
          </ScrollView>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
      <Pressable style={stylesCreatePostsScreen.postButtonTrash}>
        <Feather name="trash-2" size={24} color="#BDBDBD" />
      </Pressable>
    </View>
  );
};

export default CreatePostsScreen;
