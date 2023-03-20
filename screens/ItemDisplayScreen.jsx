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
  Button as ThemedButton,
  useThemeMode,
  useTheme,
  SearchBar,
  Icon,
  Card,
  Chip,
  Avatar,
  Tab,
  TabView,
} from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import ScreenHeaderComponent from "../components/ScreenHeaderComponent";
import profileImg from "../assets/boy.png";
import { defaultFont } from "../fontConfig/defaultFont";
import { Dimensions, Button } from "react-native";
import { dummyText } from "../dummyData/exchangeItems";
import { textTrimmer } from "../helpers/functions";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { SearchBarAndroid } from "@rneui/base/dist/SearchBar/SearchBar-android";

const ItemDetailsTab = ({ setScrollEnabled }) => {
  const style = useTheme();
  const [index, setIndex] = useState(0);
  const theme = useTheme();
  const { mode } = useThemeMode();
  const [query, setQuery] = useState("");

  return (
    <>
      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        indicatorStyle={{
          backgroundColor: style.theme.colors.grey2,
          height: 3,
        }}
        // variant="primary"
        containerStyle={{ backgroundColor: "rgba(0,0,0,0)" }}
        // scrollable
      >
        <Tab.Item
          title="Description"
          titleStyle={{
            fontSize: 12,
            color: style.theme.colors.black,
          }}
          icon={{
            name: "description",
            type: "material",
            color: style.theme.colors.black,
          }}
          containerStyle={(active) => ({
            backgroundColor: active
              ? style.theme.colors.grey3
              : "rgba(0,0,0,0)",
            borderRadius: 10,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
          })}
        />
        <Tab.Item
          title="Comments"
          titleStyle={{
            fontSize: 12,
            color: style.theme.colors.black,
          }}
          icon={{
            name: "comment-processing-outline",
            type: "material-community",
            color: style.theme.colors.black,
          }}
          containerStyle={(active) => ({
            backgroundColor: active
              ? style.theme.colors.grey3
              : "rgba(0,0,0,0)",
            borderRadius: 10,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
          })}
        />
        <Tab.Item
          title="Location"
          titleStyle={{
            fontSize: 12,
            color: style.theme.colors.black,
          }}
          icon={{
            name: "location",
            type: "ionicon",
            color: style.theme.colors.black,
          }}
          containerStyle={(active) => ({
            backgroundColor: active
              ? style.theme.colors.grey3
              : "rgba(0,0,0,0)",
            borderRadius: 10,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
          })}
        />
      </Tab>

      <View style={{ backgroundColor: "transparent", height: 400 }}>
        <TabView
          value={index}
          onChange={(e) => setIndex(e)}
          tabItemContainerStyle={{
            // width: "100%",
            height: 400,
            overflow: "hidden",
            backgroundColor: "transparent",
          }}
          disableSwipe={false}
          containerStyle={{
            flexGrow: 1,
            overflow: "hidden",
            backgroundColor: "transparent",
          }}
        >
          <TabView.Item style={{ height: "100%" }}>
            <ScrollView nestedScrollEnabled={true}>
              <View>
                <Text
                  // selectable
                  selectionColor={style.theme.colors.success}
                  style={{
                    fontFamily: `${defaultFont}_400Regular`,
                    textAlign: "justify",
                  }}
                >
                  {textTrimmer(dummyText, 1800)}
                </Text>
              </View>
            </ScrollView>
          </TabView.Item>
          <TabView.Item
            style={{
              overflow: "hidden",
              backgroundColor: "transparent",
              height: "100%",
              justifyContent: "space-between",
            }}
          >
            <View>
              <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ height: 320 }}
                nestedScrollEnabled={true}
              >
                <Text
                  style={{
                    fontFamily: `${defaultFont}_400Regular`,
                    textAlign: "justify",
                  }}
                >
                  {textTrimmer(dummyText, 1800)}
                </Text>
              </ScrollView>
              <View style={{ width: "100%" }}>
                <SearchBarAndroid
                  value={query}
                  containerStyle={{
                    backgroundColor: "rgba(0,0,0,0)",
                    width: "100%",
                    padding: 0,
                    height: 67,
                    borderColor: "rgba(0,0,0,0)",

                    // marginVertical: 5,
                  }}
                  inputContainerStyle={{
                    backgroundColor: "rgba(0,0,0,0)",
                    borderRadius: 10,
                    borderWidth: 2,
                    borderColor: theme.theme.colors.black,
                    height: 50,
                    width: "100%",
                    borderBottomWidth: 2,
                  }}
                  searchIcon={
                    <Icon
                      name="comment"
                      color={mode === "dark" ? theme.theme.colors.grey0 : null}
                    />
                  }
                  cancelIcon={
                    <Icon
                      name="arrow-back"
                      type="ionIcons"
                      color={mode === "dark" ? theme.theme.colors.grey0 : null}
                      onPress={() => Keyboard.dismiss()}
                      // reverseColor
                      containerStyle={{ borderRadius: 30 }}
                    />
                  }
                  clearIcon={
                    <Icon
                      name="send"
                      color={mode === "dark" ? theme.theme.colors.grey0 : null}
                      onPress={() => setQuery("")}
                      // reverseColor
                      containerStyle={{ borderRadius: 30 }}
                    />
                  }
                  inputStyle={{
                    color: theme.theme.colors.grey0,
                    fontFamily: `${defaultFont}_500Medium`,
                  }}
                  onChangeText={(input) => setQuery(input)}
                  onClear={() => setQuery("")}
                  placeholder="add a question"
                  selectionColor={theme.theme.colors.primary}
                />
              </View>
            </View>
          </TabView.Item>
          <TabView.Item
            style={{
              height: "100%",
              overflow: "hidden",
              backgroundColor: "transparent",
            }}
          >
            <ScrollView nestedScrollEnabled={true}>
              <View>
                <Text
                  // selectable
                  selectionColor={style.theme.colors.success}
                  style={{
                    fontFamily: `${defaultFont}_400Regular`,
                    textAlign: "justify",
                  }}
                >
                  {textTrimmer(dummyText, 1800)}
                </Text>
              </View>
            </ScrollView>
          </TabView.Item>
        </TabView>
      </View>
      {/* </ScrollView> */}
    </>
  );
};

const NormalDataTextComponent = ({ title, text, fontFamily, fontSize }) => {
  const style = useTheme();
  return (
    <Text
      style={{
        //   color: style.theme.colors.black,
        marginBottom: 3,
        fontFamily: fontFamily ? fontFamily : `${defaultFont}_600SemiBold`,
        // fontWeight: "600",
        fontSize: fontSize ? fontSize : 16,
        marginRight: 20,
      }}
      selectable
      selectionColor={style.theme.colors.error}
    >
      {`${title ? title + ": " : ""} ${text}`}
    </Text>
  );
};

const StyledCard = ({ children }) => {
  const style = useTheme();
  const { mode } = useThemeMode();
  return (
    <Card
      containerStyle={{
        width: "100%",
        margin: 0,
        marginBottom: 10,
        padding: 10,
        backgroundColor:
          mode === "dark"
            ? style.theme.colors.grey4
            : style.theme.colors.background,
        borderWidth: 0,
        borderRadius: 10,
        //   width: 105,
        elevation: 1,
      }}
    >
      {children}
    </Card>
  );
};

const ItemDisplayScreen = ({ route }) => {
  const style = useTheme();
  const navigation = useNavigation();
  const [isDark, setIsDark] = useState(false);
  const { mode, setMode } = useThemeMode();
  const { item } = route.params;
  const screenWidth = Dimensions.get("window").width;
  const [scrollEnabled, setScrollEnabled] = useState(true);

  console.log(scrollEnabled);

  return (
    <View
      style={{
        ...containerStyles,
        backgroundColor: style.theme.colors.background,
      }}
    >
      <ScrollView
        // overScrollMode="never"
        contentContainerStyle={{ paddingBottom: 100, padding: 2 }}
        style={{ width: "100%", flex: 1 }}
        // nestedScrollEnabled={true}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
      >
        <ScreenHeaderComponent title={item.name} hideModeToggle={true} />
        <Card
          containerStyle={{
            width: "100%",
            margin: 0,
            marginBottom: 10,
            padding: 10,
            backgroundColor:
              mode === "dark"
                ? style.theme.colors.grey4
                : style.theme.colors.background,
            borderWidth: 0,
            borderRadius: 10,
            //   width: 105,
            elevation: 1,
          }}
        >
          <Card.Image
            source={{ uri: item.imageSrc }}
            style={{
              width: "100%",
              height: 250,
              alignSelf: "center",
              marginTop: 0,
              resizeMode: "cover",
            }}
          />
        </Card>
        <Card
          containerStyle={{
            width: "100%",
            margin: 0,
            marginBottom: 10,
            padding: 10,
            backgroundColor:
              mode === "dark"
                ? style.theme.colors.grey4
                : style.theme.colors.background,
            borderWidth: 0,
            borderRadius: 10,
            //   width: 105,
            elevation: 1,
          }}
        >
          <View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Icon name="location-outline" type="ionicon" size={15} />
              <Text style={{ fontFamily: `${defaultFont}_300Light` }}>
                {item.address}
              </Text>
            </View>
            <NormalDataTextComponent title="Name" text={item.name} />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  //   color: style.theme.colors.black,
                  marginBottom: 3,
                  fontFamily: `${defaultFont}_600SemiBold`,
                  fontWeight: "600",
                  fontSize: 16,
                  marginRight: 20,
                }}
                selectable
                selectionColor={style.theme.colors.error}
              >
                Exchange With: {item.with}
              </Text>
              <ThemedButton
                icon={<Icon name="logo-google" type="ionicon" size={16} />}
                type="clear"
                radius={30}
                onPress={() => {
                  console.log("google search");
                }}
              />
            </View>
            <NormalDataTextComponent title="Condition" text={item.condition} />
          </View>
        </Card>
        <StyledCard>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Avatar
              rounded
              size={"large"}
              source={profileImg}
              containerStyle={{
                backgroundColor: style.theme.colors.grey0,
              }}
            />
            <View style={{ marginLeft: 10 }}>
              <NormalDataTextComponent text={item.postedBy} />
              <NormalDataTextComponent
                text={"9842751882"}
                fontFamily={`${defaultFont}_500Medium`}
                fontSize={14}
              />
              <NormalDataTextComponent
                text={"example@gmail.com"}
                fontFamily={`${defaultFont}_500Medium`}
                fontSize={14}
              />
            </View>
          </View>
        </StyledCard>
        <StyledCard>
          <ItemDetailsTab setScrollEnabled={setScrollEnabled} />
          {/* </View> */}
        </StyledCard>
      </ScrollView>
      <View
        style={{
          backgroundColor: "rgba(246, 241, 232,0.6)",

          position: "absolute",
          //   height: 60,
          width: screenWidth,
          //   backgroundColor: "red",
          bottom: 0,
          left: 0,
          flexDirection: "row",
          //   justifyContent: "space-between",
          flex: 1,
        }}
      >
        <TouchableOpacity
          style={[
            styles.buttons,
            { backgroundColor: "rgba(126, 188, 137,0.6)" },
          ]}
        >
          <Icon name="call-outline" type="ionicon" />

          <NormalDataTextComponent text="Call" />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttons, { backgroundColor: "rgba(254, 93, 38,0.6)" }]}
        >
          <Icon name="mail-outline" type="ionicon" />

          <NormalDataTextComponent text="Email" />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttons, { backgroundColor: "rgba(7, 94, 84,0.6)" }]}
        >
          <Icon name="logo-whatsapp" type="ionicon" />
          <NormalDataTextComponent text="WhatsApp" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ItemDisplayScreen;

const styles = StyleSheet.create({
  buttons: {
    // witdh: "33.33%",
    // flex: 1,
    flexGrow: 1,
    padding: 7,
    // paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});
