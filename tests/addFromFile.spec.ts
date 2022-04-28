import "mocha";
import { expect } from "chai";
import AddFromFile from "../src/AddFromFile";

describe("AddFromFile", () => {
  const add = new AddFromFile()
  it("Iter 1", () => {
    expect(add.start("./tests/testAddFormFile.txt")).to.be.eql(10);
  });

  it("Iter 2", () => {
    expect(add.start("./tests/NoTestAddFormFile.txt")).to.be.eql(undefined);
  });
});
