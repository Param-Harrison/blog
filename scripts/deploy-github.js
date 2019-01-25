const ghPages = require('gh-pages');

ghPages.publish(
  'public',
  {
    branch: 'master',
    repo: 'git@github.com:paramlabs/paramlabs.github.io.git',
  },
  () => {
    console.log('Deploy Complete!')
  }
);