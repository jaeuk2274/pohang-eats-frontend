describe("First Test", () => {
    it("should see login page", () => {
      cy.visit("/").title().should("eq", "Login | Pohang Eats");
    });

    it("can fill out the form", () => {
      cy.visit("/")
        .findByPlaceholderText(/email/i)
        .type("jaeuk2274@gmail.com")
        .findByPlaceholderText(/password/i)
        .type("12345")
        .findByRole("button")
        .should("not.have.class", "pointer-events-none");
      // to do (can log in)
    });
});