const URL = Cypress.env("URL");
const API = Cypress.env("API");

let id = 1;

describe("The Edit page", () => {
  before(() => {
    cy.visit(`${URL}/snacks/${1}/edit`);
  });

  describe("the form", () => {
    // pay attention the capitalization!
    // cypress needs accuracy to find elements on the DOM\

    it("has a form with correct labels and fields", () => {
      // for the form inputs we use label/input
      // in this first one its called 'name'
      cy.get("label").contains("Name").should("have.attr", "for", "name");
      cy.get("#name").should("have.attr", "type", "text");
      cy.get("#name").should("have.attr", "required");

      cy.get("label").contains("Image").should("have.attr", "for", "image");
      cy.get("#image").should("have.attr", "type", "text");

      cy.get("label").contains("Fiber").should("have.attr", "for", "fiber");
      cy.get("#fiber").should("have.attr", "type", "number");

      cy.get("label").contains("Protein").should("have.attr", "for", "protein");
      cy.get("#protein").should("have.attr", "type", "number");

      cy.get("label")
        .contains("Added Sugar")
        .should("have.attr", "for", "added_sugar");
      cy.get("#added_sugar").should("have.attr", "type", "number");
    });
    it("can update a snack and then redirects back to index page", () => {
      cy.get("#name").type("!!!!!!!!!");
      cy.get("#fiber").type(5);
      cy.get("#protein").type(1);
      cy.get("#added_sugar").type(0);
      cy.get("form").submit();
      cy.url().should("eq", "http://localhost:3000/snacks");
      cy.contains("Strawberries!!!!!!!!!");
    });
  });
});
