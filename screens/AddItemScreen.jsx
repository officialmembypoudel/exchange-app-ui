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

const AddItemScreen = () => {
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
      <ScreenHeaderComponent title="List Your Item" />
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
          title={"Please Login To continue"}
          titleStyle={{
            color: style.theme.colors.black,
            fontFamily: `${defaultFont}_500Medium`,
          }}
          type="outline"
          radius={10}
          style={{ alignSelf: "center" }}
          buttonStyle={{
            borderColor: style.theme.colors.black,
          }}
          containerStyle={{}}
          icon={<Icon name="chevron-forward" type="ionicon" />}
          iconPosition="right"
          onPress={() => {
            navigation.navigate("Login");
            console.log("navigate to login screen");
          }}
        />
      </View>

      {/* </Button> */}
      {/* <Text
        h3
        style={{
          textAlign: "center",
          alignSelf: "center",
          color: style.theme.colors.warning,
        }}
      >
        Network Problem!
      </Text> */}
    </View>
  );
};

export default AddItemScreen;

const styles = StyleSheet.create({});
