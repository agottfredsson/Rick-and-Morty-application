import React from "react";
import { AppNavigator } from "./src/navigation/app.navigator";
import { ApplicationProvider } from "@ui-kitten/components";
import { StatusBar } from "expo-status-bar";
import * as eva from "@eva-design/eva";

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <StatusBar hidden />
      <AppNavigator />
    </ApplicationProvider>
  );
}
