import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I visit the specific product page with ID {string}", (productId) => {
  cy.visit(`/product/${productId}`);
});

Then("I should see the product details page", () => {
  cy.url().should("include", "/product/");
});

