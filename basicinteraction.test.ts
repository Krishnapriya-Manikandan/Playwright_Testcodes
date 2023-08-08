//coded by priya seeing rhys video

import { test, expect } from '@playwright/test';
test('interaction with inputs', async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");

    //the next 4 lines of code is to check if there is a please enter ur message present in place holder
    const messageinput = await page.locator("input[placeholder='Please enter your Message']");
    await messageinput.scrollIntoViewIfNeeded(); // to scroll if needed
    console.log(await messageinput.getAttribute("placeholder"));
    await expect(messageinput).toHaveAttribute("placeholder","Please enter your Message");

    console.log("before entering the data: " + await messageinput.inputValue()); //cosole.log == printf()
    await messageinput.fill("hi this is priya!");
    console.log("After entering the data: " + await messageinput.inputValue());

})

test('sum', async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    let a =10;
    let b =10;
    await page.locator("#sum1").fill("" + a); // to convert to string use ""
    await page.locator("#sum2").fill("" + b);
    const getvaluebutton = await page.locator("form#gettotal>button").click();
    const result = page.locator("#addmessage");
    console.log(await result.textContent()); // prints the result value in console(report and down)
    let expectedrslt = a+b;
    await expect(result).toHaveText(""+expectedrslt);
    
})

test('checkbox', async ({ page }) => {
  await page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo");
  const singlecheckbox = await page.locator("id=isAgeSelected");
  expect(singlecheckbox).not.toBeChecked();  //this line is to check that checkbox is not checked
  await singlecheckbox.check();
  expect(singlecheckbox).toBeChecked();
})

