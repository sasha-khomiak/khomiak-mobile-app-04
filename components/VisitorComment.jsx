import { Text, View, Image } from "react-native";

const VisitorComment = ({ ico, text, time }) => {
  return (
    <View
      style={{
        width: 343,
        marginLeft: "auto",
        marginRight: "auto",
        flexDirection: "row",
        marginBottom: 24,
      }}
    >
      <View style={{ marginRight: 16, borderRadius: 14, overflow: "hidden" }}>
        <Image source={ico} />
      </View>
      <View
        style={{
          padding: 16,
          backgroundColor: "rgba(0 0 0 / 0.03)",
          borderBottomLeftRadius: 6,
          borderBottomRightRadius: 6,
          borderTopRightRadius: 6,
          width: 299,
        }}
      >
        <Text style={{ marginBottom: 8 }}>{text}</Text>
        <Text style={{ textAlign: "right" }}>{time}</Text>
      </View>
    </View>
  );
};

export default VisitorComment;
