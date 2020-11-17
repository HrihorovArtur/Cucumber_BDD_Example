const { expect } = require('chai');
const { When, Then, setDefaultTimeout } = require('cucumber');
const { browser } = require('protractor');
const yargs = require('yargs');
setDefaultTimeout(60000);

When('I open {string}', function (url) {
    return browser.get(url);
});

Then(/^Page title should (not )?be "([^"]*)"$/, async function (notArg, expectedTitle) {
    const pageTitle = await browser.getTitle();
    if (notArg) {
        expect(pageTitle).to.not.be.equal(expectedTitle);
    } else {
        expect(pageTitle).to.be.equal(expectedTitle);
    }
});

When('I wait {int} seconds', function (timeInSeconds) {
    return browser.sleep(timeInSeconds * 1000);
});
