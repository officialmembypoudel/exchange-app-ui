import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useThemeMode } from "@rneui/themed";
import React, { createContext, useEffect, useState } from "react";
import { account } from "../configs/appwrite";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  //   const { navigate } = useNavigation();
  const { setMode } = useThemeMode();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [authCheck, setAuthCheck] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState({});

  useEffect(() => {
    const promise = account.get();

    promise.then(
      function (response) {
        setUser(response);
        setLoading(false);
        setIsSignedIn(true);
      },
      function (error) {
        console.log(error);
        setLoading(false);
        setIsSignedIn(false);
      }
    );
    console.log("running");
  }, [authCheck]);

  const login = (email = "", password = "") => {
    const promise = account.createEmailSession(email, password);

    promise.then(
      function (response) {
        const promise = account.get();

        promise.then(
          function (response) {
            setUser(response);
            setLoading(false);
            setIsSignedIn(true);
          },
          function (error) {
            console.log(error);
            setLoading(false);
            setIsSignedIn(false);
          }
        );
      },
      function (error) {
        setIsSignedIn(false);
        console.log(error);
      }
    );
  };

  const logOut = () => {
    const promise = account.deleteSession("current");

    promise.then(
      function (response) {
        setUser({});
        setIsSignedIn(false);
        // navigation.navigate('Login')
      },
      function (error) {
        console.log(error);
      }
    );
  };

  useEffect(() => {
    const checkIfMOdeExist = async () => {
      try {
        const value = await AsyncStorage.getItem("@mode");
        if (value) {
          console.log(value, "mode from auth context, checking");
          setMode(value);
        }
      } catch (error) {}
    };
    checkIfMOdeExist();
  }, []);

  return (
    <>
      <AuthContext.Provider
        value={{
          user,
          loading,
          setUser,
          login,
          logOut,
          isSignedIn,
          setIsSignedIn,
          setAuthCheck,
          refreshing,
          setRefreshing,
          error,
          setError,
        }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
