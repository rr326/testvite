// These imports can be naked because of 
// shared_lib/package.json: 
// "exports": {
//     ".": "./dist_node/index_node.js",
import { fnShared } from "shared_lib"
import { fnNodeOnly } from "shared_lib"

// You can reference a deep file in shared_lib
// because of shared_lib/package.json:
// "exports": {
//     "./dist_node/*": "./dist_node/*",
import { sharedButNotInIndex } from "shared_lib/dist_node/shared.js"

fnShared()
sharedButNotInIndex()
fnNodeOnly()
