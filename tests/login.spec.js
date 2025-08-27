import { test, expect } from '@playwright/test';
import LoginPage from "../pages/loginpage.js"
import path from 'path';


test('test_loginpage', async ({ page }) => {

    const Login = new LoginPage(page);
    await Login.GotoUrl('https://the-internet.herokuapp.com/login');
    await Login.login('admin', 'Dell@2022');

});

test("locator_learning", async ({ page }) => {

    await page.goto("https://saucedemo.com")
    await page.pause();
    // usign object properties 
    await page.locator('id=user-name').fill("standard_user");
    await page.locator("[id='user-name']").fill("akash");

    // using xpath 
    await page.locator("//input[@name='password']").fill("akash");
    const pass = await page.locator("xpath=//input[@name='password']").fill("nwq pass word");
    console.log(pass);
    // using css selector 
    await page.locator("#login-button").click();

    // using text
    await page.locator("text=LOGIN").click();
    await page.locator("input:has-text('Login')").click();


})

// test("assertion", async ({ page }) => {

//     await page.goto('https://testautomationpractice.blogspot.com/');


//     const element = await page.getByRole('link', { name: 'GUI Elements' });
//     // check element present 
//     await expect(element).toHaveCount(1);

//     if (await page.$('text=GUI Elements')) {
//         console.log("element present");
//     }

//     // element is visible or not 
//     await expect(element).toBeVisible();
//     // element is hidden or not 
//     await expect.soft(element).toBeHidden();

//     // element is enabled or not 
//     await expect.soft(element).toBeEnabled();
//     // element is disabled or not 
//     await expect.soft(element).toBeDisabled();

//     // check text is present or not 
//     await expect(element).toHaveText("GUI Elements");
//     await expect.soft(element).not.toHaveText("GUI Elements");

//     // check attribute value 
//     await expect.soft(element).toHaveAttribute('class', '');

//     // check page title and url 

//     await expect.soft(page).toHaveTitle('Test Automation Practice');
//     await expect.soft(page).toHaveURL('https://testautomationpractice.blogspot.com/');

//     await page.pause();
//     // check the visual validation of the page 
//     await expect(page).toHaveScreenshot();

// })

test("handle alert", async ({ page }) => {


    page.once('dialog', dialog => {
        console.log(`Dialog message: ${dialog.message()}`);
        dialog.accept().catch(() => { console.log('Dialog was dismissed.'); });
    });

    await page.goto("https://testautomationpractice.blogspot.com/");


    await page.locator('id=alertBtn').click();


    await page.getByRole('button', { name: 'Prompt Alert' }).click();

    // await page.getByRole('button', { name: 'Point Me' }).hover();
    // await page.getByRole('link', { name: 'Mobiles' }).click();



    await page.pause();

    const table = page.locator('#taskTable');
    const rows = table.locator('tr');

    const rowCount = await rows.count();
    console.log(`Number of rows: ${rowCount}`);

    let rowData = [];

    for (let i = 0; i < rowCount; i++) {
        const row = rows.nth(i);
        const cells = row.locator('td');

        const cellCount = await cells.count();
        // let rowData:  [] = [];

        for (let j = 0; j < cellCount; j++) {
            const text = await cells.nth(j).innerText();
            rowData.push(text.trim());
        }

        console.log(`Row ${i + 1}:`, rowData);
    }



})

test("hadle keybord and mouse movement", async ({ page }) => {


    await page.goto("https://testautomationpractice.blogspot.com/");

    //  await page.locator("#draggable").click();
    const elementa = page.locator('#draggable');
    const elementb = page.locator('#droppable');

    await page.mouse.move(100, 100);
    await page.keyboard.press('Enter');

    await elementa.dragTo(elementb);

    await page.pause();


})