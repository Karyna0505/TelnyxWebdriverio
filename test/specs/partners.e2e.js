const OpenSite = require('../pageobjects/openSite.page');
const AboutTelnyx = require('../pageobjects/aboutTelnyx.page');
const Partners = require('../pageobjects/partners.page');



beforeEach('Open site and Accept cookies', async () => {

    await browser.setWindowSize(1920, 1080);
    await OpenSite.open('/');
    await browser.pause(400);
    await OpenSite.acceptCookies();
    await AboutTelnyx.hoverOnCompany();
    await AboutTelnyx.visibleCompanyList();
    await Partners.clickPartnersLink({force: true});
    await expect(Partners.partnersSubtitle).toBeDisplayed();
    await expect(Partners.partnersSubtitle).toHaveTextContaining('PARTNERS');

})


describe('Check links on the "Partners" page.', () => {

    it('ID_0008 Check network link on the "Partners" page.', async () => {
        await Partners.scrollToTheConnectBanner();
        await expect(Partners.connectBanner).toHaveTextContaining('Connectivity for Real Time Communications');

        await Partners.clickNetworkLink();
        await expect(Partners.networkPageTitle).toHaveTextContaining('Network Built');
    
    })

    it('ID_0009 Check partner form on the "Partners" page with valid data.', async () => {

        await Partners.scrollToThePartnerForm();
        await expect(Partners.partnerFormTitle).toHaveTextContaining('Become a Telnyx Partner');
        await browser.pause(500);

        await Partners.fillingFormValidData("Test", "Test", "test2023@gmail.com");
        await browser.pause(500);
        await Partners.selectUseCase();
        await Partners.clickSubmitButton();
        await browser.pause(500);
        await expect(browser).toHaveUrlContaining('partnerships?aliId');

    })

    it('ID_0010 Check partner form on the "Partners" page with invalid email.', async () => {

        await Partners.scrollToThePartnerForm();
        await expect(Partners.partnerFormTitle).toHaveTextContaining('Become a Telnyx Partner');
        await browser.pause(500);

        await Partners.fillingFormInvalidData("Test", "Test", "test2023gmail.com");
        await browser.pause(500);
        await Partners.selectUseCase();
        await Partners.clickSubmitButton();
        await browser.pause(500);
        await expect(Partners.errorMessageEmail).toHaveTextContaining('Must be valid email.');

    })

    it('ID_0011 Check partner form on the "Partners" page with empty fields.', async () => {

        await Partners.scrollToThePartnerForm();
        await expect(Partners.partnerFormTitle).toHaveTextContaining('Become a Telnyx Partner');
        await browser.pause(500);

        await Partners.clickSubmitButton();
        await expect(Partners.errorMessageName).toBeDisplayed();
        await browser.pause(500);
        await Partners.clickSurnameField(); 
        await expect(Partners.errorMessageSurname).toBeDisplayed();
        await browser.pause(500);
        await Partners.clickEmailField();
        await expect(Partners.errorMessageEmail).toBeDisplayed()
        await browser.pause(500);

    })

})