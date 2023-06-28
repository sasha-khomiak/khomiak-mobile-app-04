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

// Імпорт навігації
import { useNavigation } from "@react-navigation/native";

// Імпорт бібліотек іконок
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// Імпорт фотографії бекграунду, фото аватару і фото
import PhotoBG from "../../assets/images/PhotoBG.jpg";
import Avatar from "../../assets/images/romanova-ava-profile-screen.jpg";
import Forest from "../../assets/images/forest.jpg";
import Sea from "../../assets/images/sea.jpg";
import House from "../../assets/images/house.jpg";

const ProfileScreen = () => {
  //---------СТВОРЕННЯ НАВІГАЦІЇ---------//
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={PhotoBG}
        resizeMode="cover"
        style={styles.bgimage}
      >
        <ScrollView contentContainerStyle={styles.formAreaBlock}>
          {/* Наша аватарка в обгортці і хрестик */}
          <View>
            <View style={styles.avatarContainer}>
              <View style={styles.avatarPhotoWrap}>
                <Image source={Avatar} />
              </View>
              <AntDesign
                name="closecircleo"
                size={25}
                color="#BDBDBD"
                style={styles.addIco}
              />
            </View>
          </View>

          <Pressable
            style={styles.logOutButton}
            onPress={() => navigation.navigate("Login")}
          >
            <Feather name="log-out" size={24} color="#BDBDBD" />
          </Pressable>
          <Text style={styles.profileName}>Natali Romanova</Text>

          <View style={styles.pictureCard}>
            <Image source={Forest}></Image>
            <Text style={styles.nameOfPicture}>Ліс</Text>

            <View style={styles.pictureInfo}>
              <MaterialCommunityIcons
                name="message-reply"
                size={24}
                color="#FF6C00"
              />
              <Text style={styles.pictureStatistics}>8</Text>
              <AntDesign name="like2" size={24} color="#FF6C00" />
              <Text style={styles.pictureStatistics}>200</Text>
              <AntDesign name="enviromento" size={24} color="#BDBDBD" />
              <Text>Ukraine</Text>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default ProfileScreen;
