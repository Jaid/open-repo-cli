import yargs from "yargs"

import getGithubUser from "lib/getGithubUser"

import handleDefaultCommand from "src/commands"
import handleNpmCommand from "src/commands/npm"

/**
 * @typedef {Object} Options
 * @prop {boolean} dry
 * @prop {string} githubUser
 * @prop {string} npmUser
 * @prop {string} domain
 * @prop {string} protocol
 */

async function main() {
  let githubUser = process.env.githubUser
  if (!githubUser) {
    githubUser = await getGithubUser()
  }
  /**
   * @type {import("yargs").CommandBuilder}
   */
  const commandBuilder = {
    dry: {
      description: "Do not open in browser, just print the URL",
      type: "boolean",
      alias: "d",
    },
    "github-user": {
      description: "Default GitHub user",
      default: githubUser,
      type: "string",
      alias: "u",
    },
    "npm-user": {
      description: "Default npm user",
      default: process.env.npmUser,
      type: "string",
      alias: "n",
    },
    domain: {
      description: "GitHub domain",
      default: "github.com",
      type: "string",
    },
    protocol: {
      description: "URL protocol",
      default: "https",
      type: "string",
    },
  }
  yargs
    .scriptName(process.env.REPLACE_PKG_NAME)
    .version(process.env.REPLACE_PKG_VERSION)
    .command("* [target]", process.env.REPLACE_PKG_DESCRIPTION, commandBuilder, handleDefaultCommand)
    .command("npm <packageName>", "Open a GitHub page for given npm package.", commandBuilder, handleNpmCommand)
    .parse()
}

main()