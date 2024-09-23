import { View, Pressable, Text } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";

export function Header() {
  return (
    <View className="w-full flex flex-row items-center justify-between">
      <Pressable className="w-10 h-10 bg-black rounded-full flex justify-center items-center">
        <Ionicons name="menu" size={20} color="#fff" />
      </Pressable>
      <View className="flex flex-col items-center justify-center">
        <Text className="text-center text-sm text-white">Localizacion</Text>
        <View className="flex-row items-center justify-center gap-1">
          <Feather name="map-pin" size={14} color="#FF0000" />
          <Text className="text-lg font-bold text-white">Buenos Aires</Text>
        </View>
      </View>
      <Pressable className="w-10 h-10 bg-black rounded-full flex justify-center items-center">
        <Feather name="bell" size={20} color="#fff" />
      </Pressable>
    </View>
  );
}
