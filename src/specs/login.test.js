import { productsHeader } from "../pageobjects/CatalogPage.js"
import LoginPage from "../pageobjects/LoginPage.js";
import { expandMenuButton } from "../pageobjects/BottomSideMenuPage.js";
import { loginMenuOption } from "../pageobjects/MainMenuPage.js";

describe("My Login Demo", () => {
  beforeEach(async () => {
    await expandMenuButton.click();
    await loginMenuOption.click();
  });

  it("should not login with invalid credentials", async () => {
    await LoginPage.login("wrongUser", "wrongPassword");
    await expect(LoginPage.errorMessageText).toHaveText(
      "Provided credentials do not match any user in this service."
    );
  });

  it("should login with valid credentials", async () => {
    await LoginPage.login("bob@example.com", "10203040");
    await expect(productsHeader).toHaveText("Products");
  });
});
