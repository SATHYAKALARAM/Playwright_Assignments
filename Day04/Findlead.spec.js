import {test,expect} from '@playwright/test'
test("Findlead",async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main")
await page.waitForTimeout(3000)
await page.locator('#username').fill("Demosalesmanager")
await page.locator('#password').fill("crmsfa")
await page.locator('.decorativeSubmit').click()
await page.locator('text=CRM/SFA').click()

await page.locator("//a[text()='Leads']").click()
await page.locator("//a[text()='Find Leads']").click()

//await page.locator([name="firstName"]).nth(3).fill("Sathya")
await page.locator('input[name="firstName"]').nth(2).fill('Sathya');
await page.locator("//button[text()='Find Leads']").click()
await page.locator('.linktext').nth(3).click();
await page.locator("//a[text()='Edit']").click();
await page.locator('#updateLeadForm_companyName').fill("testleaf")
await page.locator('#updateLeadForm_annualRevenue').fill("12LPA")
await page.locator('#updateLeadForm_departmentName').fill("Automation Testing")
await page.locator('#updateLeadForm_description').fill("Update changes in the values of company name, Annual Income, Department")
await page.locator("[value='Update']").click();

await expect(page.locator('#viewLead_companyName_sp')).toContainText('testleaf');
await expect(page.locator('#viewLead_departmentName_sp')).toHaveText('Automation Testing');

const title = await page.title()
console.log("title")

})