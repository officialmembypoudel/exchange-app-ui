import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
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
  Avatar,
} from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import ScreenHeaderComponent from "../components/ScreenHeaderComponent";
import noInternetImg from "../assets/please-login.png";
import selectImgDum from "../assets/selectImg.png";
import { defaultFont } from "../fontConfig/defaultFont";
import { databases, storage } from "../configs/appwrite";

const AddItemScreen = () => {
  const style = useTheme();
  const { theme } = useTheme();
  const navigation = useNavigation();
  const [isDark, setIsDark] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);
  const { mode, setMode } = useThemeMode();

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setSelectedImg(result.uri);
    }
  };
  // console.log(selectedImg);
  const uploadImage = async () => {
    const uriParts = selectedImg.split(".");
    const fileType = uriParts[uriParts.length - 1];
    console.log(fileType);
    const file = new File(
      [await (await fetch(selectedImg)).blob()],
      `image.jpg`,
      {
        type: `image/${fileType}`,
      }
    );
    if (file) {
      const promise = storage.createFile("listings", "abcdef", file);

      promise.then(
        function (res) {
          console.log(res);
        },
        function (error) {
          console.log("thait myakuri", error);
        }
      );
    }
  };
  return (
    <View
      style={{
        ...containerStyles,
        backgroundColor: style.theme.colors.background,
      }}
    >
      <ScreenHeaderComponent title="List Your Item" />
      <Avatar
        source={selectedImg ? { uri: selectedImg } : selectImgDum}
        containerStyle={{
          alignSelf: "center",
          height: 150,
          width: 250,
          marginBottom: 15,
          // borderRadius: 10,
        }}
        imageProps={{ borderBottomRightRadius: 15, borderRadius: 5 }}
      >
        <Avatar.Accessory
          iconProps={{
            name: "camera",
            // color: theme.colors.success,
          }}
          size={30}
          onPress={pickImage}
        />
      </Avatar>
      <ScrollView style={{ width: "100%" }}>
        <View>
          <Text
            style={{
              fontFamily: `${defaultFont}_400Regular`,
              fontSize: 18,
              marginBottom: 4,
            }}
          >
            Item's Names
          </Text>
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
            containerStyle={{ paddingHorizontal: 0 }}
            inputStyle={{ fontFamily: `${defaultFont}_400Regular` }}
          />
        </View>
        <View>
          <Text
            style={{
              fontFamily: `${defaultFont}_400Regular`,
              fontSize: 18,
              marginBottom: 4,
            }}
          >
            Description
          </Text>
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
            placeholder="say something about your item..."
            // keyboardType="email-address"
            containerStyle={{ paddingHorizontal: 0 }}
            inputStyle={{ fontFamily: `${defaultFont}_400Regular` }}
          />
        </View>
        <View>
          <Text
            style={{
              fontFamily: `${defaultFont}_400Regular`,
              fontSize: 18,
              marginBottom: 4,
            }}
          >
            For
          </Text>
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
            placeholder="in exchange with"
            // keyboardType="email-address"
            containerStyle={{ paddingHorizontal: 0 }}
            inputStyle={{ fontFamily: `${defaultFont}_400Regular` }}
          />
        </View>
        <Button
          title="Create Listing"
          color="success"
          buttonStyle={{ paddingVertical: 12, borderRadius: 5 }}
          onPress={() => uploadImage(selectedImg)}
        />
      </ScrollView>
    </View>
  );
};

export default AddItemScreen;

const styles = StyleSheet.create({});
