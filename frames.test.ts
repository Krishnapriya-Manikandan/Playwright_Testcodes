//coded by priya seeing utube
//HTML frames are used to divide your browser window into multiple sections 
//where each section can load a separate HTML document. 
//A collection of frames in the browser window is known as a frameset. 
//The window is divided into frames in a similar way the tables are organized into rows and columns.


import { test, expect } from '@playwright/test';

test('Interaction with frames-one method', async ({ page }) => {
    await page.goto("https://letcode.in/frame");
    const allframes = page.frames(); // returns the number of frames we have in that page
    console.log("No.of.frames" + allframes.length);

    
    const myframe = page.frame("firstFr");
    //if(myframe!= null){   //line 10-12 is similar to line 12
   //     await myframe.fill("text='fname'","priya")
   // }
    await myframe?.fill("text='fname'","priya");  // ?. means nullish operator, if there is a frame it returns value else it returns null
    await myframe?.fill("text='lname'","sajith");
    await page.waitForTimeout(5000);

   await expect(myframe?.locator("p.has-text-info").textContent()).toContain("You have entered Priya sajith");

    //textcontent() returns the value in that element
    // line 17 is to check if we are having the wordings correctly


})

test('Interaction with frames-second method', async ({ page }) => {
    await page.goto("https://letcode.in/frame");
    const allframes = page.frames(); // returns the number of frames we have in that page
    console.log("No.of.frames" + allframes.length);

    const myframe=page.frameLocator("#firstFr"); //locating the frame by ID
    await myframe.locator("text='fname'").fill("priya"); //locate the elements thru frames
    await myframe.locator("text='lname'").fill("sajith");


    // how to interact with nested frame
    const innerframe = myframe.frameLocator("iframe[src='innerFrame']"); //CSS SELECTOR
    innerframe.locator("input[name='email']").fill("priyanair@gmail.com");




})

