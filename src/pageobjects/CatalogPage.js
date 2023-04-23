class CatalogScreen {
  get productsHeader() {
    return $(
      '//XCUIElementTypeStaticText[@name="Products"]'
    );
  }
}

export default new CatalogScreen();
