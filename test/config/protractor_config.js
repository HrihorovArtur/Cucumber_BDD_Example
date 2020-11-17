const path = require('path');
const yargs = require('yargs');
const reporter = require('cucumber-html-reporter');

const reportOptions = {
    theme: 'bootstrap',
    jsonFile: path.join(__dirname, '../reports/report.json'),
    output: path.join(__dirname, '../reports/cucumber_report.html'),
    reportSuitsAsScenarios: true
}

exports.config = {
    allScriptsTimeout: 60000,
    getPageTimeout: 60000,
    specs: [path.resolve('./test/features/*.feature')],
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        shardTestFiles: yargs.argv.instances > 1,
        maxInstances: yargs.argv.instances || 1,
        browserName: 'chrome',
        chromeOptions: {
            args: ['--no-sandbox', '--window-size=1920,1080']
        },
    },
    disableChecks: true,
    directConnect: true,
    cucumberOpts: {
        require: [path.resolve('./test/step_definitions/**/*.js')],
        format: ['json:./test/reports/report.json', 'node_modules/cucumber-pretty'],
        tags: yargs.argv.tags || '@smoke'
    },
    onPrepare: () => {
        return browser.waitForAngularEnabled(false);
    },
    afterLaunch: () => {
        return reporter.generate(reportOptions)
    }
}