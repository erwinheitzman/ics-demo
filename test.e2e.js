describe('My Login application', () => {
    it('should show two squares in the screenshot', async () => {
        await browser.url(`file:///${__dirname}/index.html`)
        await browser.pause(1000)
        await browser.checkFullPageScreen();
    })
})

