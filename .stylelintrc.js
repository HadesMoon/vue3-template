module.exports = {
  extends: [
    // standard 规则集合
    'stylelint-config-standard',
    // standard 规则集合的 scss 版本
    'stylelint-config-standard-scss',
    'stylelint-config-standard-vue/scss',
    // 样式属性顺序规则
    'stylelint-config-rational-order',
    // 接入 Prettier 规则
    'stylelint-prettier/recommended'
  ]
}
