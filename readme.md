# open-repo-cli


<a href="https://raw.githubusercontent.com/jaid/open-repo-cli/master/license.txt"><img src="https://img.shields.io/github/license/jaid/open-repo-cli?style=flat-square" alt="License"/></a> <a href="https://github.com/sponsors/jaid"><img src="https://img.shields.io/badge/<3-Sponsor-FF45F1?style=flat-square" alt="Sponsor open-repo-cli"/></a>  
<a href="https://actions-badge.atrox.dev/jaid/open-repo-cli/goto"><img src="https://img.shields.io/endpoint.svg?style=flat-square&url=https%3A%2F%2Factions-badge.atrox.dev%2Fjaid%2Fopen-repo-cli%2Fbadge" alt="Build status"/></a> <a href="https://github.com/jaid/open-repo-cli/commits"><img src="https://img.shields.io/github/commits-since/jaid/open-repo-cli/v0.1.0?style=flat-square&logo=github" alt="Commits since v0.1.0"/></a> <a href="https://github.com/jaid/open-repo-cli/commits"><img src="https://img.shields.io/github/last-commit/jaid/open-repo-cli?style=flat-square&logo=github" alt="Last commit"/></a> <a href="https://github.com/jaid/open-repo-cli/issues"><img src="https://img.shields.io/github/issues/jaid/open-repo-cli?style=flat-square&logo=github" alt="Issues"/></a>  
<a href="https://npmjs.com/package/open-repo-cli"><img src="https://img.shields.io/npm/v/open-repo-cli?style=flat-square&logo=npm&label=latest%20version" alt="Latest version on npm"/></a> <a href="https://github.com/jaid/open-repo-cli/network/dependents"><img src="https://img.shields.io/librariesio/dependents/npm/open-repo-cli?style=flat-square&logo=npm" alt="Dependents"/></a> <a href="https://npmjs.com/package/open-repo-cli"><img src="https://img.shields.io/npm/dm/open-repo-cli?style=flat-square&logo=npm" alt="Downloads"/></a>

**CLI that quickly opens GitHub pages.**





## Installation

<a href="https://npmjs.com/package/open-repo-cli"><img src="https://img.shields.io/badge/npm-open--repo--cli-C23039?style=flat-square&logo=npm" alt="open-repo-cli on npm"/></a>

```bash
npm install --global open-repo-cli@^0.1.0
```

<a href="https://yarnpkg.com/package/open-repo-cli"><img src="https://img.shields.io/badge/Yarn-open--repo--cli-2F8CB7?style=flat-square&logo=yarn&logoColor=white" alt="open-repo-cli on Yarn"/></a>

```bash
yarn global add open-repo-cli@^0.1.0
```

<a href="https://github.com/jaid/open-repo-cli/packages"><img src="https://img.shields.io/badge/GitHub Packages-@jaid/open--repo--cli-24282e?style=flat-square&logo=github" alt="@jaid/open-repo-cli on GitHub Packages"/></a>  
(if [configured properly](https://help.github.com/en/github/managing-packages-with-github-packages/configuring-npm-for-use-with-github-packages))

```bash
npm install --global @jaid/open-repo-cli@^0.1.0
```



## Example

Open the repository of for the currently opened project.
```bash
cd /c/Users/Jaid/Projects/readable-ms
open-repo-cli
# opens https://github.com/Jaid/readable-ms
```










## CLI Usage
After installing package `open-repo-cli` globally, you can use its command line interface.
```bash
open-repo-cli
```
For usage instructions:
```bash
open-repo-cli --help
```








## Development



Setting up:
```bash
git clone git@github.com:jaid/open-repo-cli.git
cd open-repo-cli
npm install
```
Testing:
```bash
npm run test:dev
```
Testing in production environment:
```bash
npm run test
```


## License
[MIT License](https://raw.githubusercontent.com/jaid/open-repo-cli/master/license.txt)  
Copyright © 2020, Jaid \<jaid.jsx@gmail.com> (https://github.com/jaid)
