import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  FlatList,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
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
import noInternetImg from "../assets/please-login.png";
import ItemComponent from "../components/ItemComponent";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllListings,
  getUserListings,
  userListings,
} from "../store/listings";
import { AuthContext } from "../context/authContext";
import { databases } from "../configs/appwrite";

const EditUpdateCard = ({ item }) => {
  const navigation = useNavigation();
  const { theme } = useTheme();
  const { mode } = useThemeMode();
  const { user } = useContext(AuthContext);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const deleteListing = (id) => {
    setLoading(true);
    const promise = databases.deleteDocument("madhyayuga", "listings", id);
    promise.then(
      (res) => {
        console.log(res);
        dispatch(fetchAllListings({ limit: 100 }));
        dispatch(userListings({ userId: user.$id }));
        setLoading(false);
      },
      (error) => {
        console.log("Delete error", error);
        setLoading(false);
      }
    );
  };

  return (
    <>
      <Card
        containerStyle={{
          margin: 0,
          marginBottom: 10,
          marginHorizontal: 2,
          padding: 10,
          backgroundColor:
            mode === "dark" ? theme.colors.grey4 : theme.colors.background,
          borderWidth: 0,
          borderRadius: 10,
          width: "100%",
          elevation: 2,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Button
            title="Edit"
            color="success"
            radius={10}
            icon={{ name: "edit", color: "#f2f2f2" }}
            onPress={() => navigation.navigate("EditListing", { item })}
          />
          <Button
            loading={loading}
            title="Delete"
            type="outline"
            color="error"
            buttonStyle={{
              borderColor: "#dc3545",
              borderWidth: 2,
              borderRadius: 10,
            }}
            titleStyle={{ color: "#dc3545" }}
            icon={{ name: "delete", color: "#dc3545" }}
            onPress={() => deleteListing(item.$id)}
          />
        </View>
      </Card>
    </>
  );
};

const MyListings = () => {
  const dispatch = useDispatch();
  const { user } = useContext(AuthContext);
  const style = useTheme();
  const navigation = useNavigation();
  const [isDark, setIsDark] = useState(false);
  const { mode, setMode } = useThemeMode();
  const allListings = useSelector(getUserListings);

  useEffect(() => {
    dispatch(userListings({ userId: user.$id }));
  }, [dispatch]);

  console.log(allListings);
  return (
    <View
      style={{
        ...containerStyles,
        backgroundColor: style.theme.colors.background,
      }}
    >
      <ScreenHeaderComponent title="My Listings" />
      {allListings && (
        <FlatList
          style={{ width: "100%" }}
          contentContainerStyle={{ paddingBottom: 70 }}
          showsHorizontalScrollIndicator={false}
          overScrollMode="never"
          // horizontal={true}
          data={allListings}
          // keyExtractor={(item) => item.$id}
          renderItem={({ item }) => (
            <>
              <ItemComponent
                type="column"
                item={{ ...item, from: "myListing" }}
              />
              <EditUpdateCard item={item} />
            </>
          )}
        />
      )}
    </View>
  );
};

export default MyListings;

const styles = StyleSheet.create({});
