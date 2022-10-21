import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HomeComponent from "../components/HomeComponent";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabs from "../navigator/BottomTabs";

const HomeScreen = () => {
  return <BottomTabs />;
};

export default HomeScreen;

const styles = StyleSheet.create({});
