// by priya ! watching you tube course by rhys! Lamda test utube channel

import {test, Page} from "@playwright/test";
test("login test demo", async({browser})=>{
    const context = await browser.newContext();
    const page =  await context.newPage();
    await page.goto("https://ecommerce-playground.lambdatest.io/");
    await page.waitForTimeout(5000);
    //await page.screenshot({path: 'screenshots.png', fullPage:true });
   // await page.hover("//a[@data-toggle='dropdown']//span[contains(.,'My account')]");
   // await page.getByRole('button', { name: 'My account' }).highlight;
    await page.getByRole('button', { name: ' My account' }).hover(); //selected using pick locator from playwright
    
   // await page.getByText("All categories").hover();
    await page.waitForTimeout(5000);
    //await page.screenshot({path: 'screenshots.png', fullPage:true });
    await page.click("'Login'");
    await page.waitForTimeout(5000);
   // await page.screenshot({path: 'screenshots.png', fullPage:true });
   // await page getByText('E-Mail Address')
   // await page.getByPlaceholder('E-Mail Address').type("priyanair2606982gmail.com"); -- alternate for placeholder
    await page.getByRole("textbox", {name:"E-Mail Address"}).fill("priyanair2606982gmail");
   // await page.screenshot({path: 'screenshots.png', fullPage:true });
    await page.getByPlaceholder('Password').fill("test");
    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForTimeout(5000);
    await page.screenshot({path: 'screenshots.png', fullPage:true }); ///to take screenshot(last page)
})

