const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 去除eslint检查
  lintOnSave: false,
})
