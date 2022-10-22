import Main from "./src/components/Main";
import React from "react";
import ThemeProvider from "./src/components/contexts/ThemeProvider";

export default function App() {
  return (
  <ThemeProvider>
    <Main/>
  </ThemeProvider>
  )
}
