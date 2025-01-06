/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I visit the login page", () => {
  cy.visit("/login");
});

When("I enter valid email {string}", (email) => {
  cy.get('input[type="email"]').type(email);
});

When("I enter valid password {string}", (password) => {
  cy.get('input[type="password"]').type(password);
});

When("I enter invalid email {string}", (email) => {
  cy.get('input[type="email"]').type(email);
});

When("I enter invalid password {string}", (password) => {
  cy.get('input[type="password"]').type(password);
});

When("I click the sign in button", () => {
  // Changed this line to just look for a button with "Login" text
  cy.contains("button", "Sign in").click();
});

Then("I should be logged in successfully", () => {
  cy.url().should("not.include", "/login");
});

Then("I should see an error message", () => {
  cy.contains("Invalid credentials").should("be.visible");
});