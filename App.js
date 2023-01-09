import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import TabNavigator from "./app/navigation/TabNavigator";
import NoInternet from "./app/components/NoInternet";
import { useNetInfo } from "@react-native-community/netinfo";

const CUSTOM_THEME = {
  ...DefaultTheme,
  colors: { ...DefaultTheme.colors, background: "#fff" },
};

export default function App() {
  const [noInternet, setNoInternet] = useState(false);
  const netInfo = useNetInfo();

  const fetchNetInfo = () => {
    const { isConnected, isInternetReachable } = netInfo;
    if (isConnected === false && isInternetReachable === false) {
      setNoInternet(true);
    } else {
      setNoInternet(false);
    }
  };

  useEffect(() => {
    fetchNetInfo();
  }, [netInfo]);

  if (noInternet) return <NoInternet onRefreshpress={fetchNetInfo} />;

  return (
    <NavigationContainer theme={CUSTOM_THEME}>
      <TabNavigator />
    </NavigationContainer>
  );
}
