const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");


describe("Manager", () => {
  
  describe("getName", () => {
    it("Should return the name property", () => {
      const manager = new Manager("Brandon Rodriguez", 1, "brandonrodriguezvega@gmail.com", 11);

      expect(manager.getName()).toEqual("Brandon Rodriguez");
    });
  });

  describe("getId", () => {
    it("Should return the id property", () => {
      const manager = new Manager("Brandon Rodriguez", 1, "brandonrodriguezvega@gmail.com", 11);

      expect(manager.getID()).toEqual(1);
    });
  });

  describe("getEmail", () => {
    it("Should return the email property", () => {
      const manager = new Manager("Brandon Rodriguez", 1, "brandonrodriguezvega@gmail.com", 11);

      expect(manager.getEmail()).toEqual("brandonrodriguezvega@gmail.com");
    });
  });
  
  describe("getOffice", () => {
    it("Should return the officeNumber property", () => {
      const manager = new Manager("Brandon Rodriguez", 1, "brandonrodriguezvega@gmail.com", 11);

      expect(manager.getOffice()).toEqual(11);
    });
  });
});