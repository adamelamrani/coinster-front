// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe("App", function () {
  beforeEach(function () {
    cy.visit("/user/login");
  });

  it("renders the app should find h2 with Identifícate", function () {
    cy.get("h2").should("contain", "Identifícate");
  });

  it("should find the 2nd input and type adelamco", function () {
    cy.get("input").eq(1).type("adelamco").should("have.value", "adelamco");
    cy.get("input").last().type("123456").should("have.value", "123456");
    cy.get("button").click();
  });
});

export {};
