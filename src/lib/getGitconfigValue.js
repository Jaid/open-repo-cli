import gitconfig from "gitconfig"

/**
 * @param {string} key
 * @return {Promise<string?>}
 */
export default async key => {
  return gitconfig.get(key, {location: "global"})
}