import Home from "./pages/home";
import News from "./pages/news";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/news",
    component: News
  }
];

export default routes;
