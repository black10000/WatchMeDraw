import { Text, View } from "@/components/Themed";
import tw from "@/tailwind";

export default function HomeScreen() {
  return (
    <View style={[tw`bg-black flex-1 items-center justify-center`]}>
      <Text style={[tw`text-lg font-bold`]}>Home Screen</Text>
    </View>
  );
}
