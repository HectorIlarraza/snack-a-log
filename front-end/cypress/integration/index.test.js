const URL = Cypress.env("URL");
const API = Cypress.env("API");
const CI_ENV = Cypress.env("ci");

describe("index page", () => {
  before(() => {
    cy.visit(`${URL}/snacks`);
  });

  it("can load index page and has navigation to New page", () => {
    cy.get("a")
      .contains("New Snack")
      .should("have.attr", "href", `/snacks/new`);
  });

  it("has list snack cards that are coming from the back-end seed data", () => {
    cy.contains("h4", "Strawberries");
    cy.contains("h4", "Healthy Birthday Cake Square");
  });

  it("has a link to each snack's show page", () => {
    const regex = /snacks\/(\d+)/;
    cy.get(".Snack a").each(($item) => {
      cy.wrap($item).invoke("attr", "href").should("match", regex);
    });
  });

  it("has a solid heart, if the snack is healthy", () => {
    cy.contains("Strawberries")
      .find("h4 img")
      .should("have.attr", "alt", "healthy food");
  });
  it("has a heart outline, if the snack is unhealthy", () => {
    cy.contains("Healthy Birthday Cake Square")
      .find("h4 img")
      .should("have.attr", "alt", "unhealthy food");
  });
  describe("Index Page CSS", () => {
    it("has body with font Overlock, cursive", () => {
      cy.get("body")
        .should("have.css", "font-family")
        .and("match", /Overlock/);
    });

    it("has h1 with font Carter One, cursive", () => {
      cy.get("h1")
        .should("have.css", "font-family")
        .and("match", /Carter One/);
    });

    it("has main with width 90 and centered using margin auto", () => {
      cy.get("main").should("have.css", "width").and("match", /90/);
      cy.get("main").should("have.css", "margin").and("match", /0/);
    });

    it("has nav background-color rgb(37, 36, 34)", () => {
      cy.get("nav")
        .should("have.css", "background-color")
        .and("match", /37, 36, 34/);
    });

    it("has nav display flex", () => {
      cy.get("nav").should("have.css", "display").and("match", /flex/);
    });

    it("has nav justify-content space-between", () => {
      cy.get("nav")
        .should("have.css", "justify-content")
        .and("match", /space-between/);
    });
    it("has nav align-items center", () => {
      cy.get("nav")
        .should("have.css", "align-items")
        .and("match", /center/);
    });
    it("has nav padding 1em top bottom, 3em left/right", () => {
      cy.get("nav")
        .should("have.css", "padding")
        .and("match", /15px 45px/);
    });
    it("has nav margin-bottom 1em", () => {
      cy.get("nav").should("have.css", "margin-bottom").and("match", /15px/);
    });
    it("has anchors with no text-decoration and color rgb(235, 94, 40)", () => {
      cy.get("a").should("have.css", "text-decoration").and("match", /none/);
      cy.get("a")
        .should("have.css", "color")
        .and("match", /235, 94, 40/);
    });
    it("has h4 with margin 0 and font-size 1em, with text-align center", () => {
      cy.get("h4").should("have.css", "margin").and("match", /0/);
      cy.get("h4").should("have.css", "font-size").and("match", /15px/);
      cy.get("h4")
        .should("have.css", "text-align")
        .and("match", /center/);
    });

    it("has a section element with a class of 'Snacks' ", () => {
      cy.get(".Snacks").should("exist");
    });

    it("has a div element inside the article element with a class of 'Snack' ", () => {
      cy.get(".Snack").should("exist");
    });
    it("has a article element inside a section element with a class of  'Snacks'", () => {
      cy.get(".Snacks article").should("exist");
    });

    it("article element has a display of flex and flex-wrap set to wrap", () => {
      cy.get(".Snacks article")
        .should("have.css", "display")
        .and("match", /flex/);
      cy.get(".Snacks article")
        .should("have.css", "flex-wrap")
        .and("match", /wrap/);
    });

    it("article element has a justify-content with space-between and padding 1em", () => {
      cy.get(".Snacks article")
        .should("have.css", "justify-content")
        .and("match", /space-between/);
      cy.get(".Snacks article")
        .should("have.css", "padding")
        .and("match", /15/);
    });
    it("has a div inside the article element that has a width of 150px and padding of 1em", () => {
      cy.get(".Snacks div").should("have.css", "width").and("match", /150/);
      cy.get(".Snacks div").should("have.css", "padding").and("match", /15/);
    });
    it("has a div inside the article element that has background-color of rgb(255, 252, 242)", () => {
      cy.get(".Snacks div")
        .should("have.css", "background-color")
        .and("match", /255, 252, 242/);
    });
    it("The images elements inside the element with a class of Snacks have a width of 150px ", () => {
      cy.get(".Snacks img").should("have.css", "width").and("match", /150/);
    });
  });
});

// CSS testing
// https://www.codegrepper.com/code-examples/css/cypress+element+css
