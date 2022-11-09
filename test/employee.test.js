const Employee = require("../lib/Employee");


describe("Employee", () => {
  
  describe("getName", () => {
    it("Should return the name property", () => {
      const employee = new Employee("Brandon Rodriguez", 6, "brandonrodriguezvega@gmail.com");

      expect(employee.getName()).toEqual("Brandon Rodriguez");
    });
  });

  describe("getId", () => {
    it("Should return the object's id property", () => {
      const employee = new Employee("Brandon Rodriguez", 6, "brandonrodriguezvega@gmail.com");

      expect(employee.getID()).toEqual(6);
    });
  });

  describe("getEmail", () => {
    it("Should return the email property", () => {
      const employee = new Employee("Brandon Rodriguez", 6, "brandonrodriguezvega@gmail.com");

      expect(employee.getEmail()).toEqual("brandonrodriguezvega@gmail.com");
    });
  });
});