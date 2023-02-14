const OpenSite = require('../pageobjects/openSite.page');
const AboutTelnyx = require('../pageobjects/aboutTelnyx.page');
const Careers = require('../pageobjects/careers.page');

beforeEach('Open site and Accept cookies', async () => {

    await browser.setWindowSize(1920, 1080);
    await OpenSite.open('/');
    await browser.pause(400);
    await OpenSite.acceptCookies();
    await AboutTelnyx.hoverOnCompany();
    await AboutTelnyx.visibleCompanyList();
    await Careers.clickCareerLink();
    await expect(AboutTelnyx.careerTitlePage).toBeDisplayed();
    await expect(AboutTelnyx.careerTitlePage).toHaveTextContaining('CAREERS AT TELNYX');

})

describe('Check links on the Careers page.', () => {

    it('ID_0006 Check switching slides with reviews on the "Careers" page.', async () => {

        await Careers.scrollToTheReviewsBanner();
        await expect(Careers.reviewsBanner).toBeDisplayed();

        await Careers.clickNextItemButton();
        await expect(Careers.review).toHaveTextContaining('"I joined Telnyx at the beginning of the pandemic and I was looking for an organization that could not only stay afloat, but that could thrive through uncertainty."');

        await Careers.clickNextItemButton();
        await expect(Careers.review).toHaveTextContaining('"I like the challenge, I love the people and I’ve embraced uncertainty. There’s not always a clear path and that’s the beauty of it. You can push yourself."');

        await Careers.clickNextItemButton();
        await expect(Careers.review).toHaveTextContaining('“I’ve come to place a lot of value on things like culture, transparency, and balance. Telnyx is excellent in those aspects and that’s why I have stayed.”');
    
    })

    it('ID_0007 Check positions links with reviews on the "Careers" page.', async () => {

        await Careers.scrollToThePositionsBanner();
        await expect(Careers.positionBannerTitle).toHaveTextContaining('Come and work with us!');

        await Careers.clickMarketingJobsLink();
        await browser.switchWindow('boards.greenhouse.io');
        await expect(Careers.positionTitle).toHaveTextContaining('Marketing');
        await browser.closeWindow();
        await browser.switchWindow('telnyx.com');

        await Careers.clickNocJobsLink();
        await browser.switchWindow('boards.greenhouse.io');
        await expect(Careers.positionTitle).toHaveTextContaining('Support');
        await browser.closeWindow();
        await browser.switchWindow('telnyx.com');

        await Careers.clickSalesFirstLink();
        await browser.switchWindow('boards.greenhouse.io');
        await expect(Careers.positionTitle).toHaveTextContaining('Account');
        await browser.closeWindow();
        await browser.switchWindow('telnyx.com');

        await Careers.clickSalesSecondLink();
        await browser.switchWindow('boards.greenhouse.io');
        await expect(Careers.positionTitle).toHaveTextContaining('Sales');
        await browser.closeWindow();

    })
})