// Імпорт компонентів ReactNative
import { View, Text, Image } from "react-native";

// Імпорт стилів
import { styles } from "../styles";
import { ScrollView } from "react-native-gesture-handler";

import RomanovaImg from "../../assets/images/romanova.jpg";

// Головний компонент PostsScreen
const PostsScreen = () => {
  return (
    <View style={styles.container}>
      {/* верхнє меню */}
      <View style={styles.screenHeader}>
        <View style={styles.screenHeaderLeft}>
          <Text style={styles.screenHeaderText}>Left</Text>
        </View>
        <View style={styles.screenHeaderCenter}>
          <Text style={styles.screenHeaderText}>Публікації</Text>
        </View>
        <View style={styles.screenHeaderRight}>
          <Text style={styles.screenHeaderText}>Right</Text>
        </View>
      </View>
      {/* блок головного контенту */}
      <ScrollView style={styles.screenMainContent}>
        <View style={styles.userBlock}>
          <View style={styles.userBlockPhotoWrap}>
            <Image source={RomanovaImg} />
          </View>
          <View style={styles.userBlockInfo}>
            <Text style={styles.userBlockName}>Natali Romanova</Text>
            <Text style={styles.userBlockEmail}>email@example.com</Text>
          </View>
        </View>

        <View style={styles.userBlock}>
          <View style={styles.userBlockPhotoWrap}>
            <Image source={RomanovaImg} />
          </View>
          <View style={styles.userBlockInfo}>
            <Text style={styles.userBlockName}>Natali Romanova</Text>
            <Text style={styles.userBlockEmail}>email@example.com</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default PostsScreen;
