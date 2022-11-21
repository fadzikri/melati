import drawer from '../utils/drawer'
import year from '../utils/year'

class Navbar {
  constructor ({ button, drawer, content }) {
    this._button = button
    this._drawer = drawer
    this._content = content

    this._initialDrawer()
  }

  _initialDrawer () {
    drawer.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content
    })
  }
};

class Footer {
  constructor (content) {
    this._content = content
    this._yearCopyright()
  }

  _yearCopyright () {
    year.change(this._content)
  }
}

export { Navbar, Footer }
