import { Pressable, StyleSheet, View } from "react-native";
import React from "react";
import {
  makeStyles,
  Text,
  Button,
  useThemeMode,
  useTheme,
  SearchBar,
  Icon,
  Card,
  Avatar,
  Chip,
} from "@rneui/themed";
import { TouchableOpacity } from "react-native";
import { defaultFont } from "../fontConfig/defaultFont";
import { textTrimmer } from "../helpers/functions";
import { useNavigation } from "@react-navigation/native";

export default function ItemComponent({ type, item, zindex }) {
  const { theme } = useTheme();
  const { mode } = useThemeMode();
  const navigation = useNavigation();

  const pressed = () => navigation.navigate("Item", { item });
  return (
    <TouchableOpacity
      onPress={pressed}
      style={{
        elevation: 1,
        backgroundColor: "rgba(0,0,0,0)",
        borderRadius: 12,
        // width: "100%",
        marginLeft: type === "column" ? "1%" : 0,
        marginRight: type === "row" ? 10 : 0,
        marginBottom: type === "column" ? 5 : 5,
        padding: 1,
        height: type === "column" ? "auto" : "auto",
        zIndex: zindex,
      }}
    >
      <Card
        containerStyle={{
          margin: 0,
          marginBottom: 0,
          padding: 10,
          backgroundColor:
            mode === "dark" ? theme.colors.grey4 : theme.colors.background,
          borderWidth: 0,
          borderRadius: 10,
          width: type === "row" ? 190 : "100%",
          elevation: 0,
          // height: 200,
        }}
        wrapperStyle={{
          display: "flex",
          flexDirection: type === "column" ? "row" : "column",
          gap: type === "column" ? 5 : 20,
          padding: 0,
          alignItems: type === "column" ? "center" : "flex-start",
        }}
      >
        {/* <Card.Image
          style={{
            resizeMode: "cover",
            width: 172,
            height: 138,
            padding: 0,
          }}
          source={{
            uri: item.imageSrc,
          }}
        /> */}
        <Avatar
          title={item?.name}
          containerStyle={{
            width: 172,
            height: 138,
            backgroundColor: theme.colors.grey3,
          }}
        />
        <View
          style={{
            marginLeft: type === "column" ? "auto" : 0,
            width: type === "column" ? "45%" : 170,
            // backgroundColor: "red",
          }}
        >
          <View
            style={{ alignSelf: "flex-start", marginTop: 5, marginBottom: 5 }}
          >
            <Chip
              title="Hot"
              type="solid"
              color={theme.colors.error}
              icon={
                <Icon
                  name="fire"
                  type="material-community"
                  color={theme.colors.white}
                />
              }
              onPress={pressed}
              radius={10}
              titleStyle={{
                fontFamily: `${defaultFont}_400Regular`,
              }}
            />
          </View>
          {type === "row" && <Card.Divider style={{ marginBottom: 2 }} />}
          <Text
            style={{
              color: theme.colors.grey0,
              marginTop: 0,
              textAlign: "left",
              fontSize: 16,
              fontFamily: `${defaultFont}_500Medium`,
              fontWeight: "500",
            }}
          >
            {item?.name}
          </Text>
          <Text
            style={{
              color: theme.colors.grey0,
              marginTop: 0,
              textAlign: "left",
              fontSize: 13,
              marginBottom: 2,
              fontFamily: `${defaultFont}_300Light`,
            }}
          >
            {item?.location}
          </Text>
          <Text
            style={{
              color: theme.colors.grey0,
              marginTop: 0,
              textAlign: "left",
              fontSize: 15,
              marginBottom: 2,
              fontFamily: `${defaultFont}_400Regular`,
            }}
          >
            {item.condition}
          </Text>
          <Text
            style={{
              color: theme.colors.grey0,
              marginTop: 0,
              textAlign: "left",
              fontSize: 16,
              fontFamily: `${defaultFont}_500Medium`,
              fontWeight: "500",
            }}
          >
            For: {item?.for}
          </Text>
        </View>
      </Card>
    </TouchableOpacity>
    // </View>
  );
}

const styles = StyleSheet.create({});
