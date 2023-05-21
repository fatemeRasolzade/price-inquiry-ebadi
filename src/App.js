
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";

import "./styles/Styles.css";
import "simplebar/dist/simplebar.min.css";
import { ThemeProvider } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import CustomTheme from "./public/js/CustomTheme";

import NotFound from "./pages/NotFound";
import Home from "./components/Home";

function App() {
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });

  return (
    <>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={CustomTheme}>
          <Toaster
            position="top-left"
            containerStyle={{
              top: 60,
              right: 10,
            }}
            toastOptions={{
              style: {
                background: "#1e293b",
                // background: "#333",
                border: "1px solid #cc9c00",
              },
              success: {
                style: {
                  color: "green",
                },
              },
              error: {
                style: {
                  color: "red",
                },
              },
            }}
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}

export default App;
