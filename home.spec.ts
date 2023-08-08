// By priya! Seeing udemy course!

import { test, expect } from '@playwright/test';

test.describe('Home', () => {
    test('open homepage and verify title', async ({ page }) => {
       //open url
       await page.goto("https://practice.automationbro.com/"); 

       //verify title
       await expect(page).toHaveTitle("Practice E-Commerce Site – Automation Bro")
    })

    test('open about page using the link and verify title', async ({ page }) => {
        await page.goto("https://practice.automationbro.com/about/");
        await expect(page).toHaveTitle("About – Practice E-Commerce Site");
    })
    
    test('open home page,click about and scroll down and take screenshot', async ({ page }) => {
        await page.goto("https://practice.automationbro.com/");
        await page.locator('#menu-item-491').getByRole('link', { name: 'About' }).click(); //located using playwrigh pick locator
        await page.waitForTimeout(5000);
        page.keyboard.down('End') //to scroll down
        await page.waitForTimeout(5000);
        await page.screenshot({path:'screenshots.png'}); //to take screenshot

        
    })

    test('open homepage and clck get started button using CSS SELECTOR', async ({ page }) => {
        await page.goto("https://practice.automationbro.com/");
        
        //click get started button
        //located by ID so need to use #
        await page.locator('#get-started').click();  
        await page.waitForTimeout(5000);
        //verify url has #get-started
        //await expect(page).toHaveURL("https://practice.automationbro.com/#get-started"); //one method
        await expect(page).toHaveURL(/.*get-started/); //another method to ceck get-started in present in URL (REGEX EXP)
        await page.waitForTimeout(5000);


    })

    test('Verify heading text is visible using TEXT SELECTOR ', async ({ page }) => {
        await page.goto("https://practice.automationbro.com/");
        //located by text 
        const headingtext = await page.locator('text= Think different. Make different.');

        //verify heading text is visible
        await expect(headingtext).toBeVisible();


    })

    test('verify home link is enabled using CSS AND TEXT SELECTOR', async ({ page }) => {
        await page.goto("https://practice.automationbro.com/");

        //find home text
        //since there is many Home, so we locate by unique ID which is prefixed to text in next line
        // syntax is css selector >> text selector
        const hometext1 = await page.locator('#primary-menu >> text=Home'); //method1
        // syntax is css selector: has-text("text selector")
        const hometext2 = await page.locator('#primary-menu:has-text("Home")'); //method2
        
        //verify home text is enabled
        await expect(hometext1).toBeVisible();
        await expect(hometext2).toBeEnabled();
        await page.waitForTimeout(5000);
        
    })
    
    test('verify search icon is visible using xpath', async ({ page }) => {
        await page.goto("https://practice.automationbro.com/");

        //took from let path extension
       const searchicon =  await page.locator('//div[@id="header-action"]/ul[1]/li[1]/a[1]/i[1]');
       await expect(searchicon).toBeVisible();
       
    })
    

    
    
    
})
