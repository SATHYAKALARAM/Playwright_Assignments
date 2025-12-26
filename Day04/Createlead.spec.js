/*Navigate to the url http://leaftaps.com/opentaps/control/main 
2. Enter the username as ‘Demosalesmanager’ 
3. Enter the password as ‘crmsfa’ 
4. Click the Login button 
5. Click CRM/SFA 
6. Click Leads 
7. Click Create Lead 
8. Fill the Company Name 
9. Fill the First Name 
10. Fill the Last Name 
11. Fill the Salutation 
12. Fill the Title 
13. Fill the Annual Revenue 
14. Fill the Department 
15. Fill the Phone number 
16. Click Create Lead button 
17. Verify the company name, first name, last name and the status  
18. Get the page title*/

import {test,expect} from '@playwright/test'
test("Createlead",async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main")
await page.waitForTimeout(3000)
await page.locator('#username').fill("Demosalesmanager")
await page.locator('#password').fill("crmsfa")
await page.locator('.decorativeSubmit').click()
await page.locator('text="CRM/SFA"').click()
await page.locator('text=Create Lead').first().click();
//await page.locator('#ext-gen606').click()
//await page.locator('#ext-gen868').click()
await page.locator('#createLeadForm_companyName').fill("test.co")
await page.locator('#createLeadForm_firstName').fill('Sathya')
await page.locator('#createLeadForm_lastName').fill("Ram")
await page.locator('#createLeadForm_personalTitle').fill('NA')
await page.locator('#createLeadForm_generalProfTitle').fill("Mrs")
await page.locator('#createLeadForm_annualRevenue').fill("5LPA")
await page.locator('#createLeadForm_departmentName').fill("Testing")
await page.locator('#createLeadForm_primaryPhoneNumber').fill("7756536876")
await page.locator('.smallSubmit').click()

await expect(page.locator('#viewLead_companyName_sp')).toContainText('test.co');
await expect(page.locator('#viewLead_firstName_sp')).toHaveText('Sathya');
await expect(page.locator('#viewLead_lastName_sp')).toHaveText('Ram');
await expect(page.locator('#viewLead_statusId_sp')).toHaveText('Assigned');

const title = await page.title()
console.log("title")
})