import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from "react-native";
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
  Input,
} from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import ScreenHeaderComponent from "../components/ScreenHeaderComponent";
import noInternetImg from "../assets/please-login.png";
import { defaultFont } from "../fontConfig/defaultFont";

const AddItemScreen = () => {
  const style = useTheme();
  const { theme } = useTheme();
  const navigation = useNavigation();
  const [isDark, setIsDark] = useState(false);
  const { mode, setMode } = useThemeMode();

  return (
    <View
      style={{
        ...containerStyles,
        backgroundColor: style.theme.colors.background,
      }}
    >
      <ScreenHeaderComponent title="List Your Item" />
      <ScrollView style={{ width: "100%" }}>
        <Input
          // value={email}
          // onChangeText={(email) => setEmail(email)}
          inputContainerStyle={{
            borderWidth: 2,
            borderRadius: 5,
            borderBottomWidth: 2,
            paddingHorizontal: 5,
            borderColor: theme.colors.grey4,
            backgroundColor: theme.colors.grey4,
          }}
          // leftIcon={<Icon name="mail" type="feather" />}
          // errorMessage="Fuck@nigga.com"
          placeholder="name"
          // keyboardType="email-address"
          containerStyle={{ paddingHorizontal: 0, marginBottom: 5 }}
          inputStyle={{ fontFamily: `${defaultFont}_400Regular` }}
        />
        <Input
          // value={email}
          // onChangeText={(email) => setEmail(email)}
          inputContainerStyle={{
            borderWidth: 2,
            borderRadius: 5,
            borderBottomWidth: 2,
            paddingHorizontal: 5,
            borderColor: theme.colors.grey4,
            backgroundColor: theme.colors.grey4,
          }}
          // leftIcon={<Icon name="mail" type="feather" />}
          // errorMessage="Fuck@nigga.com"
          placeholder="description"
          // keyboardType="email-address"
          containerStyle={{ paddingHorizontal: 0, marginBottom: 5 }}
          inputStyle={{ fontFamily: `${defaultFont}_400Regular` }}
        />
        <Input
          // value={email}
          // onChangeText={(email) => setEmail(email)}
          inputContainerStyle={{
            borderWidth: 2,
            borderRadius: 5,
            borderBottomWidth: 2,
            paddingHorizontal: 5,
            borderColor: theme.colors.grey4,
            backgroundColor: theme.colors.grey4,
          }}
          // leftIcon={<Icon name="mail" type="feather" />}
          // errorMessage="Fuck@nigga.com"
          placeholder="for"
          // keyboardType="email-address"
          containerStyle={{ paddingHorizontal: 0, marginBottom: 5 }}
          inputStyle={{ fontFamily: `${defaultFont}_400Regular` }}
        />
      </ScrollView>
    </View>
  );
};

export default AddItemScreen;

const styles = StyleSheet.create({});
