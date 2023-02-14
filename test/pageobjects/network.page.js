class Network {

//Elements
    get networkLink() {
        return $('span>a[href*=network]');
    }

    get networkPageTitle() {
        return $('main h1>span');
    }

    get tryButton() {
        return $('main>div:first-child a[href*="/sign-up"]');
    }

    get registrationFormTitle() {
        return $('main h1');
    }

    get communicationBannerTitle() {
        return $('//main/div[2]/div/div[1]//h2');
    }

    get communicationBanner () {
        return $('#content-2IXQpgM9HStNH0WnUUiWCw');
    }

    get competitorsLink() {
        return $('#tab-2IXQpgM9HStNH0WnUUiWCw>button');
    }

    get competitorMap() {
        return $('img[src*="Competitor"]');
    }

    get ourNetworkLink() {
        return $('#tab-5qKqtUbJNN3vVehx6JvATL>button');
    }

    get ourNetworkMap() {
        return $('img[src*="PoPNetwork"]');
    }

    get differenceBanner() {
        return $('#content-4azmFSNfuMMzXK062TEcHx');
    }

    get differenceBannerTitle() {
        return $('//main/div[2]/div/div[4]//h2');
    }

    get competitorNetworksLink() {
        return $('#tab-4azmFSNfuMMzXK062TEcHx>button');
    }

    get ourNetworkLink2() {
        return $('#tab-Sq8ENgsX3FFJrQ1xYXJAa>button');
    }

    get competitorDifferenceSchema() {
        return $('img[src*="TwilioCompare"]');
    }

    get ourNetworkSchema() {
        return $('img[src*="Network_Telnyx"]');
    }

    get reviewsBanner() {
        return $('[data-testid="wrapper"]>ul');
    }

    get nextItem() {
        return $('button[aria-label="Next Item"]');
    }

    get review() {
        return $('li[aria-hidden="false"]>q');
    }

    get faqBlock() {
        return $('main>div:nth-child(2)>div>div:last-child>div');
    }

    get firstQuastion() {
        return $('button[data-faq-question="0"]');
    }

    get secondQuestion() {
        return $('button[data-faq-question="1"]');
    }

    get thirdQuestion() {
        return $('button[data-faq-question="2"]');
    }

    get faq1() {
        return $('#faq1_description>p');
    }

    get faq2() {
        return $('#faq2_description>p');
    }

    get faq3() {
        return $('#faq3_description>p');
    }


//Actions

    async clickNetworkLink() {
        await this.networkLink.click();
    }

    async clickTryButton() {
        await this.tryButton.click();
    }

    async scrollToTheCommunicationBanner() {
        await this.communicationBanner.scrollIntoView({ block: 'center', inline: 'center' });
    }

    async clickCompetitorsLink() {
        await this.competitorsLink.click({force: true});
    }

    async clickOurNetworkLink() {
        await this.ourNetworkLink.click({force: true});
    }

    async scrollToTheDifferenceBanner() {
        await this.differenceBanner.scrollIntoView({ block: 'center', inline: 'center'});
    }

    async clickCompetitorNetworksLink() {
        await this.competitorNetworksLink.click({force: true});
    }

    async clickOurNetworkLink2() {
        await this.ourNetworkLink2.click({force: true});
    }

    async scrollToTheReviewsBanner() {
        await this.reviewsBanner.scrollIntoView({ block: 'center', inline: 'center'});
    }

    async clickNextItem() {
        await this.nextItem.click({force: true});
    }

    async scrollToTheFaqBlock() {
        await this.faqBlock.scrollIntoView({ block: 'center', inline: 'center'});
    }

    async clickFirstQuastion() {
        await this.firstQuastion.click({force: true});
    }

    async clickSecondQuastion() {
        await this.secondQuestion.click({force: true});
    }

    async clickThirdQustion() {
        await this.thirdQuestion.click({force: true});
    }

}

module.exports = new Network();