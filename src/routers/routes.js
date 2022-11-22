import lists from "../scripts/views/pages/card";
import detail from "../scripts/views/pages/detail";
// import favourite from "../scripts/utils/favourite";

const routes = {
  "/": lists,
  "/detail/:id": detail,
  // "/favourite": favourite,
};

export default routes;
