import {
  Text,
  View,
  ImageBackground,
  ScrollView,
  Image,
  Pressable,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

// Імпорт бібліотек іконок
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { styles } from "../screens/styles";

const PictureCard = ({ pictureSource, title, comments, likes, location }) => {
  const navigation = useNavigation();
  // console.log("navigation", navigation);
  return (
    <View style={styles.pictureCard}>
      <View style={styles.pictureWrap}>
        <Image source={pictureSource} />
      </View>

      <Text style={styles.nameOfPicture}>{title}</Text>

      <View style={styles.pictureInfo}>
        <View style={styles.pictureComments}>
          <Pressable onPress={() => navigation.navigate("Comments")}>
            <MaterialCommunityIcons
              name="message-reply"
              size={24}
              color="#FF6C00"
              style={{ marginRight: 6 }}
            />
          </Pressable>

          <Text style={styles.pictureStatistics}>{comments}</Text>
        </View>
        <View style={styles.pictureLikes}>
          <AntDesign
            name="like2"
            size={24}
            color="#FF6C00"
            style={{ marginRight: 6 }}
          />
          <Text style={styles.pictureStatistics}>{likes}</Text>
        </View>
        <View style={styles.pictureLocation}>
          <AntDesign
            name="enviromento"
            size={24}
            color="#BDBDBD"
            style={{ marginRight: 4 }}
          />
          <Text style={[styles.pictureStatistics, styles.underline]}>
            {location}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PictureCard;
