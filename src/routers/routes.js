import list from "../scripts/utils/lists";
import detail from "../scripts/utils/detail";
import favourite from "../scripts/utils/favourite";

const routes = {
  "/": list, // default page
  "/detail/:id": detail,
  "/favourite": favourite,
};

export default routes;
