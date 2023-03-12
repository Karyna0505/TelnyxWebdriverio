const OpenSite = require('../pageobjects/openSite.page');
const AboutTelnyx = require('../pageobjects/aboutTelnyx.page');
const Integrations = require('../pageobjects/integrations.page');
const Partners = require('../pageobjects/partners.page');

let name = "User";
let surname ="User";
let validEmail = "user_test2023@gmail.com";

beforeEach('Open site and Accept cookies', async () => {

    await browser.setWindowSize(1920, 1080);
    await OpenSite.open('/');
    await OpenSite.acceptButton.waitForExist({ timeout: 1000 });
    await OpenSite.acceptCookies();
    await AboutTelnyx.hoverOnCompany();
    await AboutTelnyx.visibleCompanyList();
    await Integrations.clickIntegrationsLink();
    await expect(Integrations.integrationsPageTitle).toExist();
    await expect(Integrations.integrationsPageTitle).toHaveTextContaining('Connect Telnyx');

})

describe('Check links on the "Integrations" page.', () => {
    
    it('ID_00012 Check  button, which follow to the Integration Marketplace page on the "Integrations" page.', async () => {

        await Integrations.clickMarketplaceButton();
        await expect(browser).toHaveUrlContaining('marketplace');
        await expect(Integrations.marketplacePageTitle).toHaveTextContaining('Integration Marketplace');

    })

    it('ID_00013 Check "Become a Beta Tester" form on the "Integrations" page with valid email.', async () => {

        await Integrations.scrollToTheBecomeTesterBanner();
        await expect(Integrations.becomeTesterBannerTitle).toHaveTextContaining('Become a Beta Tester');
        await Integrations.becomeTesterBanner.waitForExist({ timeout: 1000 });

        await Partners.setName(name);
        await Partners.setSurname(surname);
        await Partners.setEmail(validEmail);
        await Partners.selectUseCase();
        await Partners.clickSubmitButton();
        await expect(browser).toHaveUrlContaining('integrations?aliId');

    })

})