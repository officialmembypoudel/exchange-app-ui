import { StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useContext, useState } from "react";
import { containerStyles } from "../helpers/objects";
import {
  makeStyles,
  Text,
  Button,
  useThemeMode,
  useTheme,
  SearchBar,
  Icon,
  Card,
} from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import ScreenHeaderComponent from "../components/ScreenHeaderComponent";
import ProfileMiniCard from "../components/ProfileMiniCard";
import ProfileItemsCards from "../components/ProfileItemsCards";
import { defaultFont } from "../fontConfig/defaultFont";
import { ScrollView } from "react-native-gesture-handler";
import { AuthContext } from "../context/authContext";

const ProfileScreen = () => {
  const style = useTheme();
  const { logOut } = useContext(AuthContext);
  const navigation = useNavigation();
  const [isDark, setIsDark] = useState(false);
  const { mode, setMode } = useThemeMode();

  const onSettingsPress = () => {
    console.log("pressed and worked");
  };

  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 50 }}>
      <View
        style={{
          ...containerStyles,
          backgroundColor:
            mode === "light" ? "#ffff" : style.theme.colors.background,
        }}
      >
        <ScreenHeaderComponent
          title="Profile"
          hideModeToggle={false}
          iconButton={
            <Icon
              name="settings"
              type="anddesign"
              onPress={onSettingsPress}
              iconStyle={{
                backgroundColor: style.theme.colors.grey5,
                borderRadius: 14,
                padding: 1,
                // elevation: 100,
              }}
              // raised
            />
          }
        />
        <View style={{ width: "100%", marginBottom: 30 }}>
          <ProfileMiniCard rating={4} />
        </View>
        <ProfileItemsCards
          iconBackgroundColor={style.theme.colors.primary}
          iconColor={style.theme.colors.disabled}
          icon="account-details"
          iconType="material-community"
          title="My Account details"
        />
        <ProfileItemsCards
          iconBackgroundColor={style.theme.colors.success}
          iconColor={style.theme.colors.disabled}
          icon="format-list-bulleted-square"
          iconType="material-community"
          title="My Listings"
        />
        <ProfileItemsCards
          iconBackgroundColor={style.theme.colors.warning}
          iconColor={style.theme.colors.disabled}
          title="Saved Listings"
          icon="bookmark-box-multiple"
          iconType="material-community"
        />
        <ProfileItemsCards
          iconBackgroundColor={style.theme.colors.error}
          iconColor={style.theme.colors.disabled}
          icon="privacy-tip"
          iconType="material"
          title="Terms and Conditions"
        />
        <Button
          title="Logout"
          titleStyle={{
            fontFamily: `${defaultFont}_500Medium`,
          }}
          containerStyle={{
            borderRadius: 5,
            marginVertical: 20,
            width: "100%",
            alignSelf: "center",
            // marginHorizontal: 20,
          }}
          buttonStyle={{ paddingVertical: 13 }}
          onPress={() => {
            logOut();
            console.log("navigate to Home screen");
          }}
          color="error"
        />
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
