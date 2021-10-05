import { strictEqual } from 'assert'
import { Given, Then, When } from '@cucumber/cucumber'
import { browser, by, element } from 'protractor'

// PLEASE NOTE:
//  To keep this example simple, the implementation below invokes Protractor APIs directly and doesn't use any design patterns.
//  To learn more about the Screenplay Pattern, which is a far more flexible way to implement acceptance tests, read:
//  https://serenity-js.org/handbook/thinking-in-serenity-js/

Given(/.* decides to use the Super Calculator/, async () => {
    await browser.get('/protractor-demo/')
})

When('she adds {int} and {int}', async (first, second) => {
    await element(by.model('first')).sendKeys(first)
    await element(by.model('operator')).element(by.cssContainingText('option', '+')).click()
    await element(by.model('second')).sendKeys(second)
    await element(by.id('gobutton')).click()
})

When('she multiplies {int} and {int}', async (first, second) => {
    await element(by.model('first')).sendKeys(first)
    await element(by.model('operator')).element(by.cssContainingText('option', '*')).click()
    await element(by.model('second')).sendKeys(second)
    await element(by.id('gobutton')).click()
})

Then('she should see that the result is {word}', async (expectedResult) => {
    await element(by.css('h2')).getText().then(result => {
        strictEqual(result, expectedResult)
    })
})
