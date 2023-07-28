import routes from "./routes/routes.js";
import UrlParser from "./routes/url-parser.js";
import DrawerInitiator from "./utils/drawer-initiator.js";

class App {
  constructor({ drawer, content }) {
    // this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      //   button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  async renderPage() {
    try {
      const url = UrlParser.parseActiveUrlWithCombiner();
      const page = routes[url];
      this._content.innerHTML = await page.render();
      await page.afterRender();

      const mainContent = document.querySelector("#mainContent");
      const skipLink = document.querySelector(".skip-link");
      skipLink.addEventListener("click", (e) => {
        e.preventDefault();
        mainContent.scrollIntoView({ behavior: "smooth" });
        skipLink.blur();
      });
    } catch {
      this._content.innerHTML = `<error-page>error</error-page>`;
    }
  }
}

export default App;
