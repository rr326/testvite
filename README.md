# Monorepos with Typescript & Vite

I ran into a ton of trouble getting a monorepo set up with Typescript and Vite.
I wanted to share my solution in case it helps someone else.

## Disclaimer

I am _not_ an expert. I tested this repo, but not extensively. There may be stuff that isn't necessary that is left over from other attempts, or that I just don't understand. But hopefully this will help someone else get started.

## Pieces of the puzzle

- /root
  - `package.json`
    - type: module - standardize on ES modules
    - workspaces
      - These automtically import packages into the root `/node_modules`
        allowing them to be accessible across sub projects
  - `tsconfig.json`
    - Put your generic stuff here and `extend` it
- /root/shared_lib
  - Some functions only work in node (eg: fs) and some only in the browser (eg: window.location) and some can be in both (eg: string manipulation)
  - Be explicit so you don't get too confused: `tsconfig.node.json`, `tsconfig.browser.json`. each with separate dist folder: `/dist_node`, `/dist_browser`
  - `package.json`
    - `exports` is the key to this folder
    - you can have only one "naked" export. In this repo, I export dist_node/index_node.js as '.' so if you do `import {foo} from 'shared_lib'` it will import from dist_node/index_node.js
    - but you can reference subfiles like `import {fnBrowserOnly, fnShared} from "shared_lib/dist_browser/index_browser.js"`
  - `tsconfig.node/browser.json`
    - set the `outDir` folder to be explicit: `dist_node`, `dist_json`
    - set `lib` to the type of target: `node` or `browser`
    - `files` - use this so you are explicit about which files are valid in each type of environment
- /node_proj and /frontend
  - `tsconfig.json`
    - `references` - use this so that if you do `tsc --build` in this folder, it will build shared_lib first
  - importing functions
    - you can only reference things based on the `exports` field of shared_lib/package.json
    - see details in the files
- frontend (vite)
  - in addition to the above stuff, you need to tell vite not to optimize your dependencies into obvlivion: `optimizeDeps: {include: ['shared_lib']}`
