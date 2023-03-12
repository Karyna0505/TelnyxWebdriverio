const OpenSite = require('../pageobjects/openSite.page');
const Network = require('../pageobjects/network.page');

beforeEach('Open site and Accept cookies', async () => {

    await browser.setWindowSize(1920, 1080);
    await OpenSite.open('/');
    await OpenSite.acceptButton.waitForExist({ timeout: 1000 });
    await OpenSite.acceptCookies();
    await Network.clickNetworkLink();
    await expect(Network.networkPageTitle).toBeDisplayed();
    await expect(Network.networkPageTitle).toHaveTextContaining('Network');

})

describe('Check links on the "Network" page.', () => {

    it('ID_0014 Check sign up on the "Network" page.', async () => {

        await Network.clickTryButton();
        await expect(browser).toHaveUrlContaining('sign-up');
        await expect(Network.registrationFormTitle).toHaveTextContaining('free account');

    })

    it('ID_0015 Check switching banners of communication maps on the "Network" page.', async () => {

        await Network.scrollToTheCommunicationBanner();
        await expect(Network.communicationBannerTitle).toHaveTextContaining('communication');
        await Network.clickCompetitorsLink();
        await Network.competitorMap.waitForExist({ timeout: 1000 });
        await expect(Network.competitorMap).toBeDisplayed();
        await Network.clickOurNetworkLink();
        await Network.ourNetworkMap.waitForExist({ timeout: 1000 });
        await expect(Network.ourNetworkMap).toBeDisplayed();

    })

    it('ID_0016 Check switching to the pricing on the "Network" page.', async () => {

        await Network.scrollToTheDifferenceBanner();
        await expect(Network.differenceBannerTitle).toHaveTextContaining('Telnyx difference');
        await Network.clickCompetitorNetworksLink();
        await Network.competitorDifferenceSchema.waitForExist({ timeout: 1000 });
        await expect(Network.competitorDifferenceSchema).toExist();
        await Network.clickOurNetworkLink2();
        await Network.ourNetworkSchema.waitForExist({ timeout: 1000 });
        await expect(Network.ourNetworkSchema).toExist();

    })
    
    it('ID_0017 Check switching slides with reviews on the "Network" page.', async () => {

        await Network.scrollToTheReviewsBanner();
        await expect(Network.reviewsBanner).toBeDisplayed();
        await Network.clickNextItem();
        await expect(Network.review).toHaveTextContaining('Telnyx is our strongest partner');
        await Network.clickNextItem();
        await expect(Network.review).toHaveTextContaining('Telnyx has the API, portal and documentation');

    })

    it('ID_0018 Check FAQ block on the "Network" page.', async () => {

        await Network.scrollToTheFaqBlock();
        await expect(Network.faqBlock).toBeDisplayed();
        await Network.clickFirstQuastion();
        await Network.faq1.waitForExist({ timeout: 1000 });
        await expect(Network.faq1).toExist();
        await Network.clickSecondQuastion();
        await Network.faq2.waitForExist({ timeout: 1000 });
        await expect(Network.faq2).toExist();
        await Network.clickThirdQustion();
        await Network.faq3.waitForExist({ timeout: 1000 });
        await expect(Network.faq3).toExist();

    })


})