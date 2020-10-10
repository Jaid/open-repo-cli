import getGitconfigValue from "lib/getGitconfigValue"

/**
 * @return {Promise<string?>}
 */
export default async () => {
  let user = await getGitconfigValue("user.username")
  if (!user) {
    user = await getGitconfigValue("user.name")
  }
  return user
}