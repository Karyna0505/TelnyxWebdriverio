const OpenSite = require('../pageobjects/openSite.page')
const AboutTelnyx = require('../pageobjects/aboutTelnyx.page')

beforeEach('Open site and Accept cookies', async () => {

    await browser.setWindowSize(1920, 1080);
    await OpenSite.open('/');
    await OpenSite.acceptButton.waitForExist({ timeout: 1000 });
    await OpenSite.acceptCookies();
    await AboutTelnyx.hoverOnCompany();
    await AboutTelnyx.visibleCompanyList();
    await AboutTelnyx.clickAboutTelnyxLink();
    await expect(AboutTelnyx.subtitleAboutUs).toBeExisting();
    await expect(AboutTelnyx.subtitleAboutUs).toHaveTextContaining('ABOUT US');

})

describe('Check links on the "About Us" page.', () => {

    it('ID_0001 Check links to Google Maps on the "About Us" page.', async () => {

        await AboutTelnyx.scrollToTheBanner();
        await expect(AboutTelnyx.whereWeAreBanner).toBeDisplayed();

        await AboutTelnyx.clickChicagoLink();
        await expect(AboutTelnyx.chicagoLocationLink).toHaveAttributeContaining('href', 'maps');
        await AboutTelnyx.clickDublinLink();
        await expect(AboutTelnyx.dublinLocationLink).toHaveAttributeContaining('href', 'maps');
        await AboutTelnyx.clickWarsawLink();
        await expect(AboutTelnyx.warsawLocationLink).toHaveAttributeContaining('href', 'maps');
        await AboutTelnyx.clickAmsterdamLink();
        await expect(AboutTelnyx.amsterdamLocationLink).toHaveAttributeContaining('href', 'maps');

    })

    it('ID_0002 Check the registration through the "Try for free" button on the "About Us" page.', async () => {

        await AboutTelnyx.scrollToTheReadyToStartBanner();
        await expect(AboutTelnyx.readyToStartBanner).toBeDisplayed();
        await expect(AboutTelnyx.readyToStartBanner).toHaveText('Ready to Get Started?');

        await AboutTelnyx.clickTryButton();

    })
    

    it('ID_0003 Check the support link on the "About Us" page.', async () => {

        await AboutTelnyx.scrollToTheReadyToStartBanner();
        await expect(AboutTelnyx.readyToStartBanner).toBeDisplayed();
        await expect(AboutTelnyx.readyToStartBanner).toHaveText('Ready to Get Started?');

        await AboutTelnyx.clickSupportLink();
        await expect(AboutTelnyx.supportPage).toHaveText('Talk to an expert');

    })

    it('ID_0004 Check switching from "About Us" page to the "Careers" page.', async () => {

        await AboutTelnyx.scrollToTheCareerBanner()
        await expect(AboutTelnyx.carrerBannerTitle).toBeDisplayed();
        await expect(AboutTelnyx.carrerBannerTitle).toHaveText('Join a team that\'s building something special');

        await AboutTelnyx.clickOpenJobLink();
        await expect(AboutTelnyx.careerTitlePage).toHaveText('CAREERS AT TELNYX');

    })

    it('ID_0005 Check brands link on the "About Us" page.', async () => {

        await AboutTelnyx.scrollToTheBrandBanner();
        await expect(AboutTelnyx.brandBannerTitle).toBeDisplayed();
        await expect(AboutTelnyx.brandBannerTitle).toHaveText('The Telnyx brand');

        await AboutTelnyx.clickSeeBrandLink();
        await expect(AboutTelnyx.brandPageTitle).toHaveText('Brand Assets');

    })
})




