import {it} from "@jest/globals"
import coffee from "coffee"
import path from "path"

const main = path.resolve(process.env.MAIN)

it("should open for current directory", () => coffee.fork(main, ["--dry"])
  .expect("code", 0)
  .expect("stdout", /https:\/\/github.com\/jaid\/open-repo-cli/si)
  .end())

it("should open without specified owner", () => coffee.fork(main, ["--dry", "--github-user", "Jaid", "sure-array"])
  .expect("code", 0)
  .expect("stdout", /https:\/\/github.com\/jaid\/sure-array/si)
  .end())

it("should open any repo", () => coffee.fork(main, ["--dry", "webpack/tapable"])
  .expect("code", 0)
  .expect("stdout", /https:\/\/github.com\/webpack\/tapable/s)
  .end())

it("should open by npm name", () => coffee.fork(main, ["npm", "--dry", "chalk"])
  .expect("code", 0)
  .expect("stdout", /https:\/\/github.com\/chalk\/chalk/s)
  .end())

it("should open by npm name with scope", () => coffee.fork(main, ["npm", "--dry", "@babel/core"])
  .expect("code", 0)
  .expect("stdout", /https:\/\/github.com\/babel\/babel/s)
  .end())