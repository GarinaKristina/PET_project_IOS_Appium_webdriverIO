class MainMenuScreen {
    get loginMenuOption() {
      return $('//XCUIElementTypeOther[@name="menu item log in"]');
    }
  }
  
  export default new MainMenuScreen();
  