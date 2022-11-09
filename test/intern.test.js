const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

describe("Intern", () => {
  
  describe("getName", () => {
    it("Should return the name property", () => {
      const intern = new Intern("Brandon Rodriguez", 99, "brandonrodriguezvega@gmail.com", "Georgia Tech");

      expect(intern.getName()).toEqual("Brandon Rodriguez");
    });
  });

  describe("getId", () => {
    it("Should return the id property", () => {
      const intern = new Intern("Brandon Rodriguez", 99, "brandonrodriguezvega@gmail.com", "Georgia Tech");

      expect(intern.getID()).toEqual(99);
    });
  });

  describe("getEmail", () => {
    it("Should return the email property", () => {
      const intern = new Intern("Brandon Rodriguez", 99, "brandonrodriguezvega@gmail.com", "Georgia Tech");

      expect(intern.getEmail()).toEqual("brandonrodriguezvega@gmail.com");
    });
  });

  describe("getSchool", () => {
    it("Should return the school property", () => {
      const intern = new Intern("Brandon Rodriguez", 99, "brandonrodriguezvega@gmail.com", "Georgia Tech");

      expect(intern.getSchool()).toEqual("Georgia Tech");
    });
  });
});