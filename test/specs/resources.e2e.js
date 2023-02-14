const OpenSite = require('../pageobjects/openSite.page');
const Resources = require('../pageobjects/resources.page');

beforeEach('Open site and Accept cookies', async () => {

    await browser.setWindowSize(1920, 1080);
    await OpenSite.open('/');
    await browser.pause(400);
    await OpenSite.acceptCookies();
    await Resources.hoverResourcesLink();
    await Resources.visibleResourcesList();
    await Resources.clickBringCarrierLink();
    await expect(Resources.bringCarrierTitle).toBeDisplayed();
    await expect(Resources.bringCarrierTitle).toHaveTextContaining('Bring Your Own Carrier (BYOC)');

})

describe('Check links on the "BYOC" page.', () => {

    it('ID_0019 Check available products banners on the "BYOC" page.', async () => {

        await Resources.scrollToTheProductsBlocks();
        await expect(Resources.productsBlocks).toBeDisplayed();

        await Resources.clickLearnMoreTrunkingLink();
        await expect(Resources.trunkigTitle).toHaveTextContaining('SIP Trunking');
        await browser.back();
        await Resources.clickLearnMoreGlobalCloudLink();
        await expect(Resources.globalCloudTitle).toHaveTextContaining('Global Cloud');
        await browser.back();
        await Resources.clickLearnMoreControlLink();
        await expect(Resources.controlTitle).toHaveTextContaining('Control');
        await browser.back();
        await Resources.clickLearnMoreNetworkLink();
        await expect(Resources.networkTitle).toHaveTextContaining('Network');
        
    })

    it.only('ID_0020 Check available resources banners on the "BYOC" page.', async () => {

        await Resources.scrollToTheResourcesBlock();
        await expect(Resources.resourceBlock).toBeDisplayed();

        await Resources.clickBenefitsLink();
        await expect(Resources.benefitsPageTitle).toHaveTextContaining('The Benefits of Direct');
        await browser.back();
        await Resources.clickGuidesLink();
        await browser.switchWindow('developers.telnyx.com');
        await expect(Resources.guidesPageTitle).toHaveTextContaining('Carrier Guides');
        await browser.closeWindow();
        await browser.switchWindow('telnyx.com');
        await Resources.clickOwnCarrier();
        await expect(Resources.bringCarrierTitle).toHaveTextContaining('Bring Your Own Carrier (BYOC)');

    })
})