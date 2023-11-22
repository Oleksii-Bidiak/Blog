import { Suspense } from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { useTheme } from "./theme/useTheme";
import { AboutPageAsync } from "./pages/About/AboutePageAsync";
import { HomePageAsync } from "./pages/Home/HomePageAsync";
import { classNames } from "./helpers/classNames/classNames";
import "./styles/index.scss";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>

      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPageAsync />} />
          <Route path={"/"} element={<HomePageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
