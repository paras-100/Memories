import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
