class Partners {
//Elements
    get partnersLink() {
        return $('header a.mchNoDecorate[href*="partner"]');
    }

    get partnersSubtitle() {
        return $('main header>div');
    }

    get connectBanner() {
        return $('//main//div/../h2');
    }

    get networkLink() {
        return $('p>a[href*=solutions]');
    }

    get networkPageTitle() {
        return $('main h1>span');
    }

    get partnerForm() {
        return $('#become-a-partner');
    }

    get partnerFormTitle() {
        return $('#become-a-partner h3>div>span');
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

    get errorMessageName() {
        return $('#ValidMsgFirstName');
    }

    get errorMessageSurname() {
        return $('#ValidMsgLastName');
    }

    get errorMessageEmail() {
        return $('#ValidMsgEmail');
    }

//Actions
    async clickPartnersLink() {
        await this.partnersLink.click();
    }

    async scrollToTheConnectBanner() {
        await this.connectBanner.scrollIntoView();
    }

    async clickNetworkLink() {
        await this.networkLink.click({force: true});
    }

    async scrollToThePartnerForm() {
        await this.partnerForm.scrollIntoView({ block: 'center', inline: 'center'});
    }

    async fillingFormValidData(name, surname, email) {
        await this.nameField.setValue(name);
        let inputName = await this.nameField.getValue()
        await expect(inputName === name);
        await this.surnameField.setValue(surname);
        let inputSurname = await this.surnameField.getValue()
        await expect(inputSurname === surname);
        await this.emailField.setValue(email);
        let inputEmail = await this.emailField.getValue()
        await expect(inputEmail === email);
    }

    async selectUseCase() {
        await this.useCaseDropdown.selectByAttribute('value', 'Programmable Network');
    }

    async clickSubmitButton() {
        await this.submitButton.click();
    }

    async fillingFormInvalidData(name, surname, invalidEmail) {
        await this.nameField.setValue(name);
        let inputName = await this.nameField.getValue()
        await expect(inputName === name);
        await this.surnameField.setValue(surname);
        let inputSurname = await this.surnameField.getValue()
        await expect(inputSurname === surname);
        await this.emailField.setValue(invalidEmail);
        let inputEmail = await this.emailField.getValue()
        await expect(inputEmail === invalidEmail);
    }

    async clickSurnameField() {
        await this.surnameField.click();
    }

    async clickEmailField() {
        await this.emailField.click();
    }


 }

module.exports = new Partners();
