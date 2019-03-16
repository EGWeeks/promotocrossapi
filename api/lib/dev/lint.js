/* eslint-disable no-process-exit */
const CLIEngine = require('eslint').CLIEngine

const cli = new CLIEngine({
  envs: ['node'],
  useEslintrc: true,
})

const report = cli.executeOnFiles(['index.js', 'api/', 'test/', 'lib/'])
const formatter = cli.getFormatter()

console.log(formatter(report.results))

if (report.errorCount > 0) process.exit(1)
process.exit(0)
