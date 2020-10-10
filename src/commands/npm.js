import buildUrl from "build-url"
import getPkgRepo from "get-pkg-repo"
import open from "open"
import pacote from "pacote"

/**
 * @typedef {Object} Argv
 * @prop {string} packageName
 */

/**
 * @param {import("yargs").Arguments<import("src").Options & Argv>} argv
 * @return {Promise<string>}
 */
async function getUrl(argv) {
  let packageName = argv.packageName
  if (packageName.startsWith("@")) {
    if (!argv.npmUser) {
      console.log("--npm-user not given, can't autocomplete package name")
      return
    }
    packageName = `@${argv.npmUser}/${packageName.slice(1)}`
  }
  let manifest
  try {
    manifest = await pacote.manifest(packageName, {
      fullMetadata: true,
    })
  } catch (error) {
    if (error.statusCode === 404) {
      console.log(`Package ${packageName} not found`)
      return
    }
    console.error(`Could not fetch manifest for package ${packageName}`)
    throw error
  }
  if (!manifest.repository) {
    console.log(`Package ${packageName} does not link to a repository`)
    return
  }
  const repoInfo = getPkgRepo(manifest)
  const urlBase = `${argv.protocol}://${repoInfo.domain}`
  return buildUrl(urlBase, {
    path: `${repoInfo.user}/${repoInfo.project}`,
  })
}

/**
 * @param {import("yargs").Arguments<import("src").Options & Argv>} argv
 * @return {Promise<void>}
 */
export default async argv => {
  const url = await getUrl(argv)
  if (!url) {
    console.log("Couldn't find a suitable URL")
    process.exit(1)
  }
  console.log(url)
  if (!argv.dry) {
    await open(url)
  }
}