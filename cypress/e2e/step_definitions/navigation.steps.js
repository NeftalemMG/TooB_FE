/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I am on the homepage", () => {
  cy.visit("/");
});

When("I click on {string}", (linkText) => {
  cy.contains(linkText).click();
});

Then("I should be redirected to the collections page", () => {
  cy.url().should("include", "/collections");
});
