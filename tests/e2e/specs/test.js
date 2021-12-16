describe("Edit an orange", () => {
  it("Visits the homepage", () => {
    cy.visit("/");
    cy.contains(".v-toolbar__title", "Fruits");
  });
  it("Visits the edit page for an orange", () => {
    cy.visit("/");
    cy.get("#editItem-id2").click();
    cy.contains("h1", "Edit");
  });
  it("Successfully changes the price of an orange", () => {
    cy.get("#price").should("be.visible").clear().type("23.99");
    cy.get("#submit").should("be.visible").click();
    cy.get("#editResponseText").contains("OK").should("be.visible");
  });
});
