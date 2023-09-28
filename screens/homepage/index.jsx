import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../../constant/theme";
import CategorySection from "../../components/category/CategorySection";
import OrchidsSection from "../../components/orchid/OrchidsSection";

export default function HomepageScreen({ navigation }) {
  const [activeCategory, setActiveCategory] = useState("Epiphytic");

  return (
    <SafeAreaView
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: COLORS.primary,
      }}
    >
      <CategorySection
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <OrchidsSection />
    </SafeAreaView>
  );
}
