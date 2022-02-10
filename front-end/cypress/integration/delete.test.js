const URL = Cypress.env("URL");
const API = Cypress.env("API");

let id = 0;

describe("Show Page", () => {
  before(() => {
    cy.request({
      method: "POST",
      url: `${API}/snacks`,
      body: {
        name: "Cherry Icee",
        image:
          "https://preview.redd.it/6bovojne7yl51.png?width=225&format=png&auto=webp&s=77aeac334ac53d995a155539c2614f2b488f279b",
        fiber: 0,
        protein: 0,
        added_sugar: 30,
      },
      log: true,
    }).then((newSnack) => {
      id = newSnack.body.payload.id;
      cy.visit(`${URL}/snacks/${id}`);
      cy.wait(1000);
    });
  });

  it("shows the header text", () => {
    cy.contains("Snacks");
  });

  describe("contains action/navigation buttons", () => {
    it("has a 'back' button", () => {
      cy.get("a")
        // .contains("Back").
        // parent()
        .should("exist");
      // .should("have.attr", "href", `/snacks`);
    });

    it("that deletes the item and redirects to index page", () => {
      console.log(id);
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
