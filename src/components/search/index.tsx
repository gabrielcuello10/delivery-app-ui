import { View, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

export function Search() {
  return (
    <View className="w-full flex-row border border-white h-14 rounded-full items-center gap-2 px-4 bg-transparent">
      <Feather name="search" size={24} color="#fff" />
      <TextInput
        placeholder="Busque su comida..."
        placeholderTextColor="#fff"
        style={{ color: "#fff" }}
        className="w-full h-full flex-1 text-white"
      />
    </View>
  );
}
