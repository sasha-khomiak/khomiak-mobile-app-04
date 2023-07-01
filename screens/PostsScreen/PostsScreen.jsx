// Імпорт компонентів ReactNative
import { View, Text, Image, Pressable } from "react-native";

// Імпорт стилів
import { styles } from "../styles";
import { stylesPostsScreen } from "./stylesPostsScreen";

import { ScrollView } from "react-native-gesture-handler";

import RomanovaImg from "../../assets/images/romanova.jpg";

import { useNavigation } from "@react-navigation/native";

import { Feather } from "@expo/vector-icons";

import PictureCard from "../../components/PictureCard/PictureCard";
import Forest from "../../assets/images/forest.jpg";

import { stylesProfileScreen } from "../ProfileScreen/stylesProfileScreen";
// Головний компонент PostsScreen
const PostsScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={stylesPostsScreen.container}>
      <ScrollView contentContainerStyle={stylesPostsScreen.screenMainContent}>
        <View style={stylesPostsScreen.userBlock}>
          <View style={stylesPostsScreen.userBlockPhotoWrap}>
            <Image source={RomanovaImg} />
          </View>
          <View style={stylesPostsScreen.userBlockInfo}>
            <Text style={stylesPostsScreen.userBlockName}>Natali Romanova</Text>
            <Text style={stylesPostsScreen.userBlockEmail}>
              email@example.com
            </Text>
          </View>
        </View>

        <PictureCard
          pictureSource={Forest}
          title="Ліс"
          comments="8"
          likes="153"
          location="Ukraine"
        />
        <PictureCard
          pictureSource={Forest}
          title="Ліс"
          comments="8"
          likes="153"
          location="Ukraine"
        />
        <PictureCard
          pictureSource={Forest}
          title="Ліс"
          comments="8"
          likes="153"
          location="Ukraine"
        />
      </ScrollView>
    </View>
  );
};

export default PostsScreen;
