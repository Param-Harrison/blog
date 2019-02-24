---
title: Trick to update all packages in package.json file
date: '2019-02-24T08:36:28.652Z'
published: true
tags: ['Hacks & Tricks']
---

Sometimes we want to upgrade all the packages in package.json file. It might not be the great solution or answer, since any package might break the functionality due to upgrade. But you can always check, what will happen if we upgrade all at once.

Unfortunately, there is no easy way to upgrade all packages version number in package.json file.

There is an NPM package for the rescue `npm-check-updates`.

```bash
# Getting started
npm install -g npm-check-updates
# Run ncu to check what packages are outdated
ncu
```

- `npm outdated` will provide option to check what packages are outdated.
- `ncu -u` helps to upgrade the package.json file and `npm install` helps to install the new package.

##### Options

`ncu` accepts lot of options. You can check it out in their documentation. Most notable ones are,

- `ncu -u` - this upgrade the package.json file with minor version changes
- `ncu -a` - this upgrade the package.json with all version changes including major (Use with CAUTION!)
- `ncu` - without any option just list down the new versions available. Similar to `npm outdated`.

Hope this helps 😊
