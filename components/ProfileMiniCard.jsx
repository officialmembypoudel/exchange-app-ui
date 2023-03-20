import { StyleSheet, View } from "react-native";
import React from "react";
import {
  makeStyles,
  Text,
  Button,
  useThemeMode,
  useTheme,
  SearchBar,
  //   Icon,
  Card,
  Avatar,
  Icon,
  Chip,
  //   AirbnbRating,
} from "@rneui/themed";
import profileImg from "../assets/profile.png";
import { defaultFont } from "../fontConfig/defaultFont";

const array = [1, 2, 3, 4, 5];

const ProfileMiniCard = ({ rating }) => {
  const style = useTheme();
  const { mode, setMode } = useThemeMode();
  return (
    <View>
      <Avatar
        size={"xlarge"}
        source={profileImg}
        rounded
        containerStyle={{
          borderRadius: 10,
          alignSelf: "center",
          elevation: 10,
          borderRadius: 80,
          borderWidth: 2,
          borderColor: style.theme.colors.primary,
          padding: 2,
        }}
      >
        <Avatar.Accessory
          size={30}
          color={"rgb(245, 241, 237)"}
          iconProps={{
            name: "edit",
          }}
          style={{
            marginBottom: 15,
            backgroundColor: style.theme.colors.primary,
            marginRight: 2,
          }}
        />
      </Avatar>
      <Text
        // h4
        style={{
          fontSize: 25,
          textAlign: "center",
          marginVertical: 10,
          fontFamily: `${defaultFont}_700Bold`,
          // fontWeight: "700",
        }}
      >
        Memby Poudel
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginBottom: 10,
        }}
      >
        {array.map((count) => (
          <Icon
            key={count}
            name="star"
            size={16}
            color={count > rating ? style.theme.colors.greyOutline : "red"}
          />
        ))}
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <Chip
          title={"Listings"}
          color={style.theme.colors.warning}
          type="solid"
          radius={10}
          icon={<Icon name="list-alt" color={style.theme.colors.disabled} />}
          titleStyle={{
            fontFamily: `${defaultFont}_400Regular`,
          }}
        />
        <Chip
          title={"Premium"}
          color={style.theme.colors.error}
          type="solid"
          radius={10}
          icon={
            <Icon
              name="award"
              type="font-awesome-5"
              color={"rgb(245, 241, 237)"}
            />
          }
          titleStyle={{
            fontFamily: `${defaultFont}_400Regular`,
          }}
        />
      </View>
    </View>
  );
};

export default ProfileMiniCard;

const styles = StyleSheet.create({});
