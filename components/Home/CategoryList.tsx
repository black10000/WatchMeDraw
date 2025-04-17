import tw from "@/tailwind";
import { Category } from "@/types";
import { FlashList } from "@shopify/flash-list";
import Divider from "../Divider";
import { View } from "../Themed";
import CategoryItem from "./CategoryItem";

interface CategoryListProps {
  categories: Category[];
}

const CategoryList: React.FC<CategoryListProps> = ({ categories }) => {
  const renderItem = ({ item }: { item: Category }) => {
    return (
      <View>
        <CategoryItem item={item} />
        <Divider />
      </View>
    );
  };
  const keyExtractor = (item: Category) => item.id;

  return (
    <FlashList
      contentContainerStyle={tw`p-4`}
      renderItem={renderItem}
      data={categories}
      keyExtractor={keyExtractor}
      estimatedItemSize={10}
    />
  );
};

export default CategoryList;
