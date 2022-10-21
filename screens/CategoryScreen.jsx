import { StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { containerStyles } from "../helpers/objects";
import {
  makeStyles,
  Text,
  Button,
  useThemeMode,
  useTheme,
  SearchBar,
  Icon,
} from "@rneui/themed";
import CategoryCard from "../components/CategoryCard";
import { useNavigation } from "@react-navigation/native";
import { array } from "../components/CategoryComponent";
import ScreenHeaderComponent from "../components/ScreenHeaderComponent";

const CategoryScreen = () => {
  const style = useTheme();
  const navigation = useNavigation();
  const [isDark, setIsDark] = useState(false);
  const { mode, setMode } = useThemeMode();

  const handleOnPress = (state) => {
    setIsDark(state);
    // console.log(state);
    setMode(state ? "dark" : "light");
  };
  return (
    <View
      style={{
        ...containerStyles,
        backgroundColor: style.theme.colors.background,
      }}
    >
      <ScreenHeaderComponent title="Browse All Categories" />

      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          marginHorizontal: "1%",
        }}
      >
        {array.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={{
              backgroundColor: "rgba(0,0,0,0)",
              marginBottom: 10,
              borderRadius: 10,
              elevation: 3,
            }}
          >
            <CategoryCard category={category} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({});
