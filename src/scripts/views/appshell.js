import UrlParser from "../../routers/url-parser";
import routes from "../../routers/routes";
import drawer from "../utils/drawer";
// import lists from "../utils/lists";
import year from "../utils/year";

class Navbar {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._initialDrawer();
  }

  _initialDrawer() {
    drawer.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }
}

class Content {
  constructor(content) {
    this._content = content;
    this._renderContent();
  }

  async _renderContent() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    await page.render(this._content);
  }
}

class Footer {
  constructor(content) {
    this._content = content;
    this._yearCopyright();
  }

  _yearCopyright() {
    year.change(this._content);
  }
}

export { Navbar, Content, Footer };
