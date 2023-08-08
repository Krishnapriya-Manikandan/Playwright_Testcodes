//coded by priya seeing rhys you tube video

import { test, expect } from '@playwright/test';
test('handling alerts 1', async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");
    // we need to first handle alert dialog box and then locate element kind of reverse process
    // to handle/accept alert
    //like an event listerner
    page.on("dialog",async(alert)=>{
        const text = await alert.message(); // to store and read the text in alert box
        console.log(text); // to print the wordings in alert box
        await alert.accept();   // to click ok button in alert box use accept
    });

    // to locate 1st click me--> button with text
    await page.locator("button:has-text('Click Me')").nth(0).click();
})

test('handling alerts 2', async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");
    // we need to first handle alert dialog box and then locate element kind of reverse process
    // to handle/accept alert
    //like an event listerner
    page.on("dialog",async(alert)=>{
        const text = await alert.message(); // to store and read the text in alert box
        console.log(text); // to print the wordings in alert box
        await alert.dismiss();   // to click cancel button in alert box use dismiss
    });

    // to locate 1st click me--> button with text
    await page.locator("button:has-text('Click Me')").nth(1).click();
    expect(page.locator("id=confirm-demo")).toContainText("Cancel!"); //to check partial verificaon of wordings
})

test('handdling alerts 3', async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");
    // we need to first handle alert dialog box and then locate element kind of reverse process
    // to handle/accept alert
    //like an event listerner
    page.on("dialog",async(alert)=>{
        const text = await alert.defaultValue(); // to store and read the default value in alert box("enter name")
        console.log(text); // to print the wordings in alert box
        await alert.accept("priya");   // to click ok button in alert box use accept and pass value which u need to enter
    });

    // to locate 1st click me--> button with text
    await page.locator("button:has-text('Click Me')").nth(2).click();
    expect(page.locator("id=prompt-demo")).toContainText("'priya'"); //to check partial verificaon of wordings
})

test('bootsrap modal alert', async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo");
    await page.locator("button[data-target='#myModal']").click(); 
    await page.click("(//button[text()='Save Changes'])[1]"); //since thats not a JS alert we cn inspect and click
})



