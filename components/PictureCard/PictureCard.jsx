// імпорт компонентів
import { Text, View, Image, Pressable } from "react-native";

// імпорт навігації
import { useNavigation } from "@react-navigation/native";

// Імпорт векторних іконок
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// імпорт стилів
import { stylesPictureCard } from "./stylesPictureCard";

const PictureCard = ({ pictureSource, title, comments, likes, location }) => {
  const navigation = useNavigation();
  // console.log("navigation", navigation);
  return (
    <View style={stylesPictureCard.pictureCard}>
      <View style={stylesPictureCard.pictureWrap}>
        <Image source={pictureSource} />
      </View>

      <Text style={stylesPictureCard.nameOfPicture}>{title}</Text>

      <View style={stylesPictureCard.pictureInfo}>
        <View style={stylesPictureCard.pictureComments}>
          <Pressable onPress={() => navigation.navigate("Comments")}>
            <MaterialCommunityIcons
              name="message-reply"
              size={24}
              color="#FF6C00"
              style={{ marginRight: 6 }}
            />
          </Pressable>

          <Text style={stylesPictureCard.pictureStatistics}>{comments}</Text>
        </View>
        <View style={stylesPictureCard.pictureLikes}>
          <AntDesign
            name="like2"
            size={24}
            color="#FF6C00"
            style={{ marginRight: 6 }}
          />
          <Text style={stylesPictureCard.pictureStatistics}>{likes}</Text>
        </View>
        <View style={stylesPictureCard.pictureLocation}>
          <AntDesign
            name="enviromento"
            size={24}
            color="#BDBDBD"
            style={{ marginRight: 4 }}
          />
          <Text
            style={[
              stylesPictureCard.pictureStatistics,
              stylesPictureCard.underline,
            ]}
          >
            {location}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PictureCard;
