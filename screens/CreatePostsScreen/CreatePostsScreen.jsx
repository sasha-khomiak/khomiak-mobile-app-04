import { Text, View, Pressable, ScrollView } from "react-native";

import { styles } from "../styles";

import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CreatePostsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* верхнє меню */}
      <View style={styles.screenHeader}>
        <View style={styles.screenHeaderLeft}>
          <Pressable onPress={() => navigation.navigate("Login")}>
            <AntDesign name="arrowleft" size={24} color="#BDBDBD" />
          </Pressable>
        </View>
        <View style={styles.screenHeaderCenter}>
          <Text style={styles.screenHeaderText}>Створити публікацію</Text>
        </View>
        <View style={styles.screenHeaderRight}></View>
      </View>
      {/* блок головного контенту */}
      <ScrollView style={styles.screenMainContent}>
        <View style={styles.userBlock}>
          <View style={styles.userBlockInfo}>
            <Text style={styles.userBlockName}>Natali Romanova</Text>
            <Text style={styles.userBlockEmail}>email@example.com</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CreatePostsScreen;
