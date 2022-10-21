import { StyleSheet, TouchableOpacity, View, Image } from "react-native";
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
import { useNavigation } from "@react-navigation/native";
import ScreenHeaderComponent from "../components/ScreenHeaderComponent";
import noInternetImg from "../assets/please-login.png";
import { defaultFont } from "../fontConfig/defaultFont";

const LoginScreen = () => {
  const style = useTheme();
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
      <ScreenHeaderComponent title="Login" />
      <Image
        source={noInternetImg}
        style={{
          width: 334,
          height: 330,
          alignSelf: "center",
          marginTop: 100,
          resizeMode: "contain",
        }}
      />
      <View
        style={{ alignSelf: "center", marginTop: "auto", marginBottom: 50 }}
      >
        <Button
          title={"Don't Have an Account? Register now"}
          titleStyle={{
            color: style.theme.colors.black,
            fontFamily: `${defaultFont}_500Medium`,
          }}
          type="clear"
          radius={10}
          style={{ alignSelf: "center" }}
          buttonStyle={{
            borderColor: style.theme.colors.black,
          }}
          containerStyle={{}}
          icon={<Icon name="chevron-forward" type="ionicon" size={18} />}
          iconPosition="right"
          onPress={() => {
            navigation.navigate("Register");
            console.log("navigate to login screen");
          }}
        />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
