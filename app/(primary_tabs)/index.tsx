import MainHeader from "@/components/header/MainHeader";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MainHeader />
      <Text>Here is the main screen</Text>
    </View>
  );
}
