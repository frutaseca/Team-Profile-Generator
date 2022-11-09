const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");


describe("Engineer", () => {
  
  describe("getName", () => {
    it("Should return the name property", () => {
      const engineer = new Engineer("Brandon Rodriguez", 3, "brandonrodriguezvega@gmail.com", "frutaseca");

      expect(engineer.getName()).toEqual("Brandon Rodriguez");
    });
  });

  describe("getId", () => {
    it("Should return the id", () => {
      const engineer = new Engineer("Brandon Rodriguez", 3, "brandonrodriguezvega@gmail.com", "frutaseca");

      expect(engineer.getID()).toEqual(3);
    });
  });

  describe("getEmail", () => {
    it("Should return the email property", () => {
      const engineer = new Engineer("Brandon Rodriguez", 3, "brandonrodriguezvega@gmail.com", "frutaseca");

      expect(engineer.getEmail()).toEqual("brandonrodriguezvega@gmail.com");
    });
  });

  describe("getGithub", () => {
    it("Should return the github property", () => {
      const engineer = new Engineer("Brandon Rodriguez", 3, "brandonrodriguezvega@gmail.com", "frutaseca");

      expect(engineer.getGithub()).toEqual("frutaseca");
    });
  });
});