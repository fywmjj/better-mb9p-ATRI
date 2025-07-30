module.exports = {
  // 建议将 printWidth 设置为 80 或 100，100 在现代显示器上是合理的
  printWidth: 100,
  // 保持 2 个空格的缩进
  tabWidth: 2,
  useTabs: false,
  // 建议使用分号，避免 ASI (自动分号插入) 带来的潜在问题
  semi: true,
  // 建议使用单引号，这是社区更普遍的风格
  singleQuote: true,
  // 保持对象属性引号的一致性
  quoteProps: 'consistent',
  // 强烈建议使用尾随逗号，这会让 git diff 更清晰，并使添加新项更容易
  trailingComma: 'es5',
  // 建议在括号内使用空格，增加可读性 e.g. { foo: bar }
  bracketSpacing: true,
  // 保持 JSX > 在新的一行，增强可读性
  jsxBracketSameLine: false,
  // 不需要 pragma
  requirePragma: false,
  insertPragma: false,
  // 保持 markdown 折行
  proseWrap: 'preserve',
  // 忽略 html 中的空格问题
  htmlWhitespaceSensitivity: 'ignore',
  // 建议使用 'lf' 来保证跨平台的一致性
  endOfLine: 'lf',
  // 针对 .ux 文件的解析器配置，保持不变
  overrides: [
    {
      files: '*.ux',
      options: { parser: 'vue' },
    },
  ],
};
