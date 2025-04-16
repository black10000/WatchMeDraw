import { StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";
import tw from "@/tailwind";

export default function HomeScreen() {
  return (
    <View style={[tw`bg-green-500`, styles.container]}>
      <Text style={styles.title}>Home Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
