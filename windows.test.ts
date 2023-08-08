//coded by priya seeing u tube channel

import { test, expect } from '@playwright/test';
test('interact with single tab/window', async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo");
    console.log(page.url()); //prints the url of page
    // same like alerts, we have to hanlde event listereners, so put all actions in an array to work simultaneously
    const [newWindow]= await Promise.all([
        page.waitForEvent("popup"),
        await page.getByText("Follow On Twitter").click()
    ])
    console.log(newWindow.url());  //prints the url of new window
})

test('interact with multiple windows', async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo");
    console.log(page.url());
    const [multiplepage]= await Promise.all([   //to find multiple page/single page use promise.all
        page.waitForEvent("popup"),
        await page.getByText("Follow Twitter & Facebook").click()
    ])
    await multiplepage.waitForLoadState();  //inorder for all multiplepage to load...

    const pages = multiplepage.context().pages();  //how many pages are there
    console.log('no.of.windows_opened'+pages.length);

    pages.forEach(tab =>{
        console.log(tab.url());
    })

   
})
