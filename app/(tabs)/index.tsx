import { CategoryList } from "@/components/Home";
import { Text, View } from "@/components/Themed";
import { db } from "@/firebase/firebaseConfig";
import tw from "@/tailwind";
import { Category } from "@/types";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

type CategoryState =
  | {
      status: "loading";
    }
  | {
      status: "success";
      categories: Category[];
    }
  | {
      status: "error";
      error: string;
    };
export default function HomeScreen() {
  const [data, setData] = useState<CategoryState>({
    status: "success",
    categories: [],
  });

  // Function to fetch categories from Firestore
  const fetchCategories = async () => {
    try {
      setData({ status: "loading" });
      const snapshot = await getDocs(collection(db, "categories"));
      if (snapshot.empty) {
        console.log("No categories found.");
        setData({
          status: "success",
          categories: [],
        });
      } else {
        const categoryList: Category[] = snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.id,
        }));
        setData({ status: "success", categories: categoryList });
      }
    } catch (error: any) {
      setData({ status: "error", error: error.message });
      console.error("Error fetching categories: ", error?.message);
    }
  };

  // Fetch categories when the component mounts
  useEffect(() => {
    fetchCategories();
  }, []);

  if (data.status === "loading") {
    return (
      <View style={tw`flex-1 items-center justify-center`}>
        <Text style={tw`text-white text-lg`}>Loading...</Text>
      </View>
    );
  }

  if (data.status === "error") {
    return (
      <View style={tw`flex-1 items-center justify-center`}>
        <Text style={tw`text-white text-lg`}>{data.error}</Text>
      </View>
    );
  }

  const categories = data.categories;

  return (
    <View style={[tw`bg-black flex-1`]}>
      {categories.length === 0 ? (
        <View style={tw`flex-1 items-center justify-center`}>
          <Text style={tw`text-white text-lg`}>No categories found.</Text>
        </View>
      ) : (
        <CategoryList categories={categories} />
      )}
    </View>
  );
}
