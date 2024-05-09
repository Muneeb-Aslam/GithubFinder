import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import NotFound from "./pages/notfound";
import About from "./pages/about";
import GithubContextProvider from "./contexts/githubContext";

function App() {
  return (
    <>
      <GithubContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </GithubContextProvider>
    </>
  );
}

export default App;
