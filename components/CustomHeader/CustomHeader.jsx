// імпорт компонентів
import { Text, View, Pressable } from "react-native";

import { stylesCustomHeader } from "./stylesCustomHeader";

import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

const CustomHeader = ({ title }) => {
  const navigation = useNavigation();

  return (
    <View style={stylesCustomHeader.screenHeader}>
      <View style={stylesCustomHeader.screenHeaderLeft}>
        {(title === "Створити публікацію" || title === "Коментарі") && (
          <Pressable onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={24} color="#BDBDBD" />
          </Pressable>
        )}
      </View>
      <View style={stylesCustomHeader.screenHeaderCenter}>
        <Text style={stylesCustomHeader.screenHeaderText}>{title}</Text>
      </View>
      <View style={stylesCustomHeader.screenHeaderRight}>
        {title === "Пубілкації" && (
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Feather name="log-out" size={24} color="#BDBDBD" />
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default CustomHeader;
