import lists from "../scripts/views/pages/card";
import detail from "../scripts/views/pages/detail";
import favourite from "../scripts/views/pages/favourite";

const routes = {
  "/": lists,
  "/detail/:id": detail,
  "/favourite": favourite,
};

export default routes;
