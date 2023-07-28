import Home from "./../pages/home";
import Detail from "../pages/details";

const routes = {
  "/": Home,
  "/home": Home,
  "/detail/:id": Detail,
};

export default routes;
