import tw from "@/tailwind";
import { Category } from "@/types";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "../Themed";

interface CategoryItemProps {
  item: Category;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ item }) => {
  return (
    <View style={tw`flex-row items-center justify-between`}>
      <Text style={[tw`text-xl capitalize`]}>{item.name}</Text>
      <Ionicons name="chevron-forward-outline" size={20} color="white" />
    </View>
  );
};

export default CategoryItem;
