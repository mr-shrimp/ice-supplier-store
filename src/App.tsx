import { Button, Stack } from "@mui/material";
import "../index.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App = () => {
  return (
      <Stack
        direction="column"
        flexGrow={1}
        sx={{
          minHeight: "100vh"
        }}
      >
        <Header />
        <Main />
        <Footer />
      </Stack>
  )
}

export default App
