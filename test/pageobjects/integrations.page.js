class Integrations {

//Elements
    get integrationsLink() {
        return $('header a.mchNoDecorate[href*="integrations"]');
    }

    get integrationsPageTitle() {
        return $('main h1>span');
    }

    get marketplaceButton() {
        return $('main div:first-child div:nth-child(3)>div>a[href*=marketplace]');
    }

    get marketplacePageTitle() {
        return $('main h1');
    }

    get becomeTesterBanner() {
        return $('#become-a-beta-tester');
    }

    get becomeTesterBannerTitle() {
        return $('#become-a-beta-tester h3 span');
    }

    get nameField() {
        return $('#FirstName');
    }

    get surnameField() {
        return $('#LastName');
    }

    get emailField() {
        return $('#Email');
    }

    get submitButton() {
        return $('span>button');
    }

    get useCaseDropdown() {
        return $('#Use_Case_Form__c');
    }

//Actions
    async clickIntegrationsLink() {
        await this.integrationsLink.click({force: true});
    }

    async clickMarketplaceButton() {
        await this.marketplaceButton.click();
    }

    async scrollToTheBecomeTesterBanner() {
        await this.becomeTesterBanner.scrollIntoView({ block: 'center', inline: 'center'});
    }

    async fillingFormTesterValidData(name, surname, email) {
        await this.nameField.setValue(name);
        let enterName = await this.nameField.getValue();
        await expect(enterName === name);
        await this.surnameField.setValue(surname);
        let enterSurname = await this.surnameField.getValue();
        await expect(enterSurname === surname);
        await this.emailField.setValue(email);
        let enterEmail = await this.emailField.getValue();
        await expect(enterEmail === email);
    }

    async selectUseCase() {
        await this.useCaseDropdown.selectByAttribute('value', 'Marketing / Promotions');
    }

    async clickSubmitButton() {
        await this.submitButton.click();
    }

}
module.exports = new Integrations();