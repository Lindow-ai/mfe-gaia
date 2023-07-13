import PagesData from "../pages/pageData/PagesData";
import { routerType } from "../interfaces/router.type";
import { Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <Routes>
      {PagesData.map(({ path, title, element }: routerType) => {
        return <Route key={title} path={`/${path}`} element={element} />;
      })}
    </Routes>
  );
};

export default Router;
