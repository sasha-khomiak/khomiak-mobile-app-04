import { Text, View, ImageBackground, ScrollView } from "react-native";

// Імпорт фотографії бекграунду і іконки плюсика
import PhotoBG from "../../assets/images/PhotoBG.jpg";

// Імпорт стилів
import { styles } from "../styles";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={PhotoBG}
        resizeMode="cover"
        style={styles.bgimage}
      >
        <ScrollView contentContainerStyle={styles.formAreaBlock}></ScrollView>
      </ImageBackground>
    </View>
  );
};

export default ProfileScreen;
