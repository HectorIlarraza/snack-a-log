const URL = Cypress.env("URL");
const API = Cypress.env("API");
const CI_ENV = Cypress.env("ci");

let id = 0;

describe("Show Page", () => {
  before(() => {
    cy.request({
      method: "POST",
      url: `${API}/snacks`,
      body: {
        name: "Raspberries",
        image: "https://picsum.photos/id/102/300/300",
        fiber: 16,
        protein: 4,
        added_sugar: 0,
        is_healthy: true,
      },
      log: true,
    }).then((newSnack) => {
      id = newSnack.body.payload.id;
      cy.visit(`${URL}/snacks/${id}`);
    });
  });

  it("shows the header text", () => {
    cy.contains("Snacks");
  });

  it("can navigate to New page", () => {
    cy.get("a")
      .contains("New Snack")
      .should("have.attr", "href", `/snacks/new`);
  });

  describe("snack with its information", () => {
    it("shows the correct healthy heart image", () => {
      cy.get("aside img").should("have.attr", "alt", "healthy food");
    });
    it("shows the image of the snack", () => {
      cy.get("article div img").should("have.attr", "alt", "Raspberries");
    });
    it("shows the protein amount of the snack", () => {
      cy.get("article div").contains("Protein: 4");
    });
    it("shows the fiber amount of the snack", () => {
      cy.get("article div").contains("Fiber: 16");
    });
    it("shows the Added Sugar of the snack", () => {
      cy.get("article div").contains("Added Sugar: 0");
    });
  });

  describe("contains action/navigation buttons", () => {
    it("has a 'back' button", () => {
      cy.get("button")
        .contains("Back")
        .parent()
        .should("have.attr", "href", `/snacks`);
    });

    it("that deletes the item and redirects to index page", () => {
      cy.wait(1000); // gives us a chance to see the show page before deleting and redirecting
      cy.get("button")
        .contains("Delete")
        .click()
        .then(() => {
          cy.url().should("eq", `${URL}/snacks`);
          cy.get("a").each((item) => {
            cy.wrap(item)
              .invoke("attr", "href")
              .then((href) => {
                cy.wrap(href).should("not.equal", `/snacks/${id}`);
              });
          });
        });
    });
  });
});
