import buildUrl from "build-url"
import getPkgRepo from "get-pkg-repo"
import open from "open"
import readPkgUp from "read-pkg-up"

/**
 * @typedef {Object} Argv
 * @prop {string} [target]
 */

/**
 * @param {import("yargs").Arguments<import("src").Options & Argv>} argv
 * @return {Promise<string>}
 */
async function getUrl(argv) {
  const urlBase = `${argv.protocol}://${argv.domain}`
  if (!argv.target) {
    const packageJson = await readPkgUp()
    if (packageJson) {
      const manifest = packageJson.packageJson
      if (!manifest.repository) {
        console.log(`Package ${packageJson.path} does not link to a repository`)
      }
      const repoInfo = getPkgRepo(manifest)
      const specificUrlBase = `${argv.protocol}://${repoInfo.domain}`
      return buildUrl(specificUrlBase, {
        path: `${repoInfo.user}/${repoInfo.project}`,
      })
    }
    if (!argv.githubUser) {
      console.log("GitHub user not specified")
      return
    }
    return buildUrl(urlBase, {
      path: "search",
      queryParams: {
        q: `user:${argv.githubUser}`,
        s: "updated",
      },
    })
  }
  const targetSegments = argv.target.split("/")
  if (targetSegments.length === 1) {
    console.log("GitHub user not specified, so target must contain a slash")
    if (!argv.githubUser) {
      return
    }
    return buildUrl(urlBase, {
      path: `${argv.githubUser}/${argv.target}`,
    })
  }
  if (targetSegments.length === 2) {
    return buildUrl(urlBase, {
      path: argv.target,
    })
  }
  const [
    targetUser,
    targetRepo,
    ...targetPath
  ] = targetSegments
  const filePath = targetPath.join("/")
  return buildUrl(urlBase, {
    path: `${targetUser}/${targetRepo}/blob/master/${filePath}`,
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