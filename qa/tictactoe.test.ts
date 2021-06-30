import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})


test('I can start a game', async () => {
    await driver.sleep(2000);
    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
    await driver.sleep(2000);
});


//TEST NUMBER 1 - Clicking an empty field marks an 'X' and begins the computer's turn

test('Populate empty field with x', async () => {
    
    await driver.sleep(2000);

    await driver.findElement(By.id('cell-6')).click();

})

// //TEST NUMBER 2 - WIN
test('Winner winner', async () => {
    driver.navigate().refresh();
    
    await driver.sleep(2000);

    await driver.findElement(By.id('cell-6')).click();

    await driver.sleep(2000);

    await driver.findElement(By.id('cell-7')).click();

    await driver.sleep(2000);

    await driver.findElement(By.id('cell-8')).click();

    await driver.sleep(2000);

})

//TEST NUMBER 3 - Attempt to stall to see if the computer can win

test('Random moves until computer wins', async () => {
    driver.navigate().refresh();
     
    await driver.sleep(2000);

    await driver.findElement(By.id('cell-6')).click();

    await driver.sleep(2000);

    await driver.findElement(By.id('cell-4')).click();

    await driver.sleep(2000);

    await driver.findElement(By.id('cell-7')).click();

    await driver.sleep(2000);

})

//TEST NUMBER 4 - Attempt to click the same populated field until game completion - noted by the h1 text changing

test('Attempt to click same field until completion or error', async () => {
    driver.navigate().refresh();
    
    let header = await driver.findElement(By.xpath('//h1[contains(text(),"Tic Tac")]'))
    await driver.sleep(2000);

    while (header) {
            await driver.findElement(By.id('cell-6')).click();
            await driver.sleep(2000);
        };
});