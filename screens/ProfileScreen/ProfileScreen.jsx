// Імпорт компонентів
import {
  Text,
  View,
  ImageBackground,
  ScrollView,
  Image,
  Pressable,
} from "react-native";

// Імпорт стилів
import { styles } from "../styles";
import { stylesProfileScreen } from "./stylesProfileScreen";

// Імпорт навігації
import { useNavigation } from "@react-navigation/native";

// Імпорт бібліотек іконок
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

// Імпорт фотографії бекграунду, фото аватару і фото
import PhotoBG from "../../assets/images/PhotoBG.jpg";
import Avatar from "../../assets/images/romanova-ava-profile-screen.jpg";
import Forest from "../../assets/images/forest.jpg";
import Sea from "../../assets/images/sea.jpg";
import House from "../../assets/images/house.jpg";

// Імпорт компоненту картинки
import PictureCard from "../../components/PictureCard/PictureCard";

const ProfileScreen = () => {
  //---------СТВОРЕННЯ НАВІГАЦІЇ---------//
  const navigation = useNavigation();

  return (
    <View style={stylesProfileScreen.container}>
      <ImageBackground
        source={PhotoBG}
        resizeMode="cover"
        style={stylesProfileScreen.bgimage}
      >
        <ScrollView
          contentContainerStyle={stylesProfileScreen.profileAreaBlock}
        >
          {/* Наша аватарка в обгортці і хрестик */}
          <View>
            <View style={stylesProfileScreen.avatarContainer}>
              <View style={stylesProfileScreen.avatarPhotoWrap}>
                <Image source={Avatar} />
              </View>
              <AntDesign
                name="closecircleo"
                size={25}
                color="#BDBDBD"
                style={stylesProfileScreen.removeIco}
              />
            </View>
          </View>

          <Pressable
            style={stylesProfileScreen.logOutButton}
            onPress={() => navigation.navigate("Login")}
          >
            <Feather name="log-out" size={24} color="#BDBDBD" />
          </Pressable>
          <Text style={stylesProfileScreen.profileName}>Natali Romanova</Text>

          <PictureCard
            pictureSource={Forest}
            title="Ліс"
            comments="8"
            likes="153"
            location="Ukraine"
          />
          <PictureCard
            pictureSource={Sea}
            title="Захід на Чорному морі"
            comments="3"
            likes="200"
            location="Ukraine"
          />
          <PictureCard
            pictureSource={House}
            title="Старий будиночок у Венеції"
            comments="5"
            likes="200"
            location="Italy"
          />
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default ProfileScreen;
