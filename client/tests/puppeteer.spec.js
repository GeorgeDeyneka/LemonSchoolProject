import 'expect-puppeteer'

describe('Should be render page', ()=> {
    beforeAll(async ()=> {
        await page.goto('http://localhost:8080/contacts.html')
    })

    it(' Should display "login" text in button', async ()=> {
        await expect(page.click('.logout', { text: 'logout'}))
        expect(page).toMatch('Login')
    })
})