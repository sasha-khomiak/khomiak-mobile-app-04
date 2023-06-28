import { Text, View, ImageBackground, ScrollView, Image } from "react-native";

// Імпорт фотографії бекграунду і іконки плюсика
import PhotoBG from "../../assets/images/PhotoBG.jpg";

// Імпорт стилів
import { styles } from "../styles";

import Avatar from "../../assets/images/romanova-ava-profile-screen.jpg";

// Імпорт іконки плюсика
import { AntDesign } from "@expo/vector-icons";

const ProfileScreen = () => {
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
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default ProfileScreen;
