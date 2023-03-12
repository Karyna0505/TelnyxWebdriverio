class AboutTelnyx {
//Elements
    get companyLink() {
        return $('header ul > li:nth-child(8)');
    }

    get companyList() {
        return $('header li:nth-child(8)>div>div');
    }

    get aboutTelnyxLink() {
        return $('header a.mchNoDecorate[href*="about"]');
    }

    get subtitleAboutUs() {
        return $('//section/header/div');
    } 

    get whereWeAreBanner() {
        return $('div>section>h3')
    }
    
    get chicagoLocationLink() {
        return $('li:nth-child(1) p>a[target="_blank"]');
    }

    get dublinLocationLink() {
        return $('li:nth-child(2) p>a[target="_blank"]');
    }

    get warsawLocationLink() {
        return $('li:nth-child(3) p>a[target="_blank"]');
    }

    get amsterdamLocationLink() {
        return $('li:nth-child(4) p>a[target="_blank"]');
    }

    get readyToStartBanner() {
        return $('main header>p');
    }

    get tryButton(){
        return $('main div>a');
    }

    get registrationForm() {
        return $('main h1');
    }

    get supportLink() {
        return $('p>a[href*=contact]');
    }

    get supportPage() {
        return $('header h1>span');
    }

    get careerBanner() {
        return $('main div:nth-child(5)>div>div:nth-child(2)');
    }

    get carrerBannerTitle() {
        return $('main div:nth-child(5) h2');
    }

    get openJobLink () {
        return $('p>a[href*=career]');
    }

    get careerTitlePage () {
        return $('section>header>div');
    }

    get brandBanner() {
        return $('//main//div[6] /div');
    }

    get brandBannerTitle() {
        return $('main div:nth-child(6) h2');
    }

    get seeBrandLink() {
        return $('main p>a[href*=brand]');
    }

    get brandPageTitle() {
        return $('header h1');
    }

//Actions
    async hoverOnCompany() {
        await this.companyLink.moveTo();
    }

    async visibleCompanyList() {
        await this.companyList.isDisplayed();
    }

    async clickAboutTelnyxLink() {
        await this.aboutTelnyxLink.click();
    }

    async scrollToTheBanner() {
        await this.whereWeAreBanner.scrollIntoView({ block: 'center', inline: 'center' });
    }

    async clickChicagoLink() {
        await this.chicagoLocationLink.isClickable();
    }

    async clickDublinLink() {
        await this.dublinLocationLink.isClickable();
    }

    async clickWarsawLink() {
        await this.warsawLocationLink.isClickable();
    }

    async clickAmsterdamLink() {
        await this.amsterdamLocationLink.isClickable();
    }
    
    async scrollToTheReadyToStartBanner() {
        await this.readyToStartBanner.scrollIntoView();
    }

    async clickTryButton() {
        await this.tryButton.click({force: true});
    }
    
    async clickSupportLink() {
        await this.supportLink.click();
    }

    async scrollToTheCareerBanner() {
        await this.careerBanner.scrollIntoView();
    }

    async clickOpenJobLink() {
        await this.openJobLink.click({force: true});
    }

    async scrollToTheBrandBanner() {
        await this.brandBanner.scrollIntoView();
    }    

    async clickSeeBrandLink() {
        await this.seeBrandLink.click({force: true});
    }
 }

module.exports = new AboutTelnyx();

