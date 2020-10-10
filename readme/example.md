### Open the repository for the current project
```bash
cd /c/Users/Jaid/Projects/readable-ms
open-repo-cli
# https://github.com/Jaid/readable-ms
```

### Open a repository you own

This reads your `.gitconfig` (`user.username` or `user.name` property) to determine your GitHub username. Can be overwritten with env variable `githubUser` or option `--github-user`.

```bash
open-repo-cli sure-array
# https://github.com/Jaid/sure-array
```

### Open any repository

```bash
open-repo-cli webpack/tapable
# https://github.com/webpack/tapable
```

### Open a repository by npm package name

```bash
open-repo-cli npm chalk
# https://github.com/chalk/chalk

open-repo-cli npm @babel/core
# https://github.com/babel/babel
```

### Open any repository file

```bash
open-repo-cli webpack/tapable/package.json
# https://github.com/webpack/tapable/blob/master/package.json
```