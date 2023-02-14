class Careers {

//Elements
    get careerLink() {
        return $('header a.mchNoDecorate[href*="careers"]');
    }

    get reviewsBanner() {
        return $('main div>ul');
    }

    get nextItemButton() {
        return $('button[aria-label="Next Item"]');
    }

    get review() {
        return $('li[aria-hidden="false"]>q');
    }

    get positionsBanner() {
        return $('main div:nth-child(5)');
    }

    get positionBannerTitle() {
        return $('main div>header>p');
    }

    get marketingJobsLink() {
        return $('section:nth-child(1) a[href*=jobs]');
    }

    get nocJobsLink() {
        return $('section:nth-child(2) a[href*=jobs]');
    }

    get salesJobsFirstLink() {
        return $('//section[3]//a[1]');
    }

    get salesJobsSecondLink() {
        return $('//section[3]//a[2]');
    }

    get positionTitle() {
        return $('div>h1');
    }



//Action
    async clickCareerLink() {
        await this.careerLink.click();
    }

    async scrollToTheReviewsBanner() {
        await this.reviewsBanner.scrollIntoView({ block: 'center', inline: 'center' });
    }

    async clickNextItemButton() {
        await this.nextItemButton.click({force: true});
    }

    async scrollToThePositionsBanner() {
        await this.positionsBanner.scrollIntoView();
    }

    async clickMarketingJobsLink() {
        await this.marketingJobsLink.click({force: true});
    }

    async clickNocJobsLink() {
        await this.nocJobsLink.click({force: true});
    }

    async clickSalesFirstLink() {
        await this.salesJobsFirstLink.click({force: true});
    }

    async clickSalesSecondLink() {
        await this.salesJobsSecondLink.click({force: true});
    }

}

module.exports = new Careers();