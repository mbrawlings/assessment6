
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(2000)
})

test('clicking draw button displays choices', async () => {
    await driver.findElement(By.id('draw')).click()
    let botChoices = await driver.findElement(By.id('choices'))
    const displayed = await botChoices.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(2000)
})

test('clicking add to duo will display added bot', async () => {
    await driver.findElement(By.id('draw')).click()
    await driver.findElement(By.xpath("//div[@id='choices']/div[5]/button[1]")).click()
    let chosenBot = await driver.findElement(By.id('player-duo'))
    const displayed = await chosenBot.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(2000)
})

