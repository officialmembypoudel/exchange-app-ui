import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import HomeScreen from "../screens/HomeScreen";
import ItemDisplayScreen from "../screens/ItemDisplayScreen";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from "../context/authContext";

const Stack = createNativeStackNavigator();

const UnAuthStack = () => {
  const { isSignedIn } = useContext(AuthContext);
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Login"
    >
      <Stack.Group>
        {/* <Stack.Screen name="Root" component={HomeScreen} /> */}
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Group>

      {/* <Stack.Group>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Root" component={HomeScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Group> */}

      {/* <Stack.Group>
        <Stack.Screen name="Item" component={ItemDisplayScreen} />
      </Stack.Group> */}
    </Stack.Navigator>
  );
};

export const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Group>
        <Stack.Screen name="Root" component={HomeScreen} />
        <Stack.Screen name="Item" component={ItemDisplayScreen} />
        {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
        {/* <Stack.Screen name="Register" component={RegisterScreen} /> */}
      </Stack.Group>
    </Stack.Navigator>
  );
};

export const Router = () => {
  const { isSignedIn } = useContext(AuthContext);
  return <>{isSignedIn ? <AuthStack /> : <UnAuthStack />}</>;
};

export default UnAuthStack;

const styles = StyleSheet.create({});
