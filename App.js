import Main from "./src/components/Main";
import React from "react";
import ThemeProvider from "./src/components/contexts/ThemeProvider";
import { NativeRouter } from "react-router-native";

export default function App() {
  return (
    <NativeRouter>
      <ThemeProvider>
        <Main />
      </ThemeProvider>
    </NativeRouter>
  );
}
