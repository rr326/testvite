<script setup lang="ts">
import {fnBrowserOnly, fnShared} from "shared_lib/dist_browser/index_browser.js"

const resultsfnBrowserOnly = fnBrowserOnly(),
      resultsfnShared = fnShared()
</script>

<template>
  <h1>Test Vite with Monorepo</h1>
  <p>fnBrowserOnly: {{resultsfnBrowserOnly}}</p>
  <p>fnShared: {{resultsfnShared}}</p>
</template>

<style scoped>
</style>
