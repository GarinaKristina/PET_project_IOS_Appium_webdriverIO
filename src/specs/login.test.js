import { productsHeader } from "../pageobjects/Catalog.screen.js"
import { login, errorMessageText } from "../pageobjects/Login.screen";
import { expandMenuButton } from "../pageobjects/BottomSideMenu.screen";
import { loginMenuOption } from "../pageobjects/MainMenu.screen";

describe("My Login Demo", () => {
  beforeEach(async () => {
    await expandMenuButton.click();
    await loginMenuOption.click();
  });

  it("should not login with invalid credentials", async () => {
    login("wrongUser", "wrongPassword");
    await expect(errorMessageText).toHaveText(
      "Provided credentials do not match any user in this service."
    );
  });

  it("should login with valid credentials", async () => {
    login("bob@example.com", "10203040");
    await expect(productsHeader).toHaveText("Products");
  });
});
