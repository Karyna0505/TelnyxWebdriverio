class Resources {
//Elements 
    get resourcesLink() {
        return $('header ul > li:nth-child(6)');
    }

    get resourcesList() {
        return $('header li:nth-child(6)>div>div');
    }

    get bringCarrierLink() {
        return $('header a[href*="bring"]');
    }

    get bringCarrierTitle() {
        return $('main h1>span');
    }

    get productsBlocks() {
        return $('main div:nth-child(7) ul');
    }

    get learnMoreTrunkingLink() {
        return $('main div:nth-child(7) li>a[href*=trunk]');
    }

    get learnMoreGlobalCloudLink() {
        return $('main div:nth-child(7) li>a[href*=cloud]');
    }

    get learnMoreControlLink() {
        return $('main div:nth-child(7) li>a[href*=control]');
    } 

    get learnMoreNetworkLink() {
        return $('main div:nth-child(7) li>a[href*=network]');
    }

    get trunkigTitle(){
        return $('main h1 strong');
    }

    get globalCloudTitle() {
        return $('header h1>span');
    }

    get controlTitle() {
        return $('header h1>span');
    }

    get networkTitle() {
        return $('main h1>span');
    }
 
    get resourceBlock() {
        return $('main div:nth-child(8) ul');
    }

    get benefitsLink() {
        return $('a[href*=benefits]');
    }

    get guidesLink() {
        return $('a[href*=trunk-setup]');
    }

    get ownCarrier() {
        return $('li:nth-child(3)>a[href*=bring-your-own]');
    }

    get benefitsPageTitle() {
        return $('header h1');
    }

    get guidesPageTitle() {
        return $('main>h1');
    }
 

//Actions
    async hoverResourcesLink() {
        await this.resourcesLink.moveTo();
    }

    async visibleResourcesList() {
        await this.resourcesList.isDisplayed();
    }

    async clickBringCarrierLink() {
        await this.bringCarrierLink.click();
    }

    async scrollToTheProductsBlocks() {
        await this.productsBlocks.scrollIntoView({ block: 'center', inline: 'center'});
    }

    async clickLearnMoreTrunkingLink() {
        await this.learnMoreTrunkingLink.click();
    }

    async clickLearnMoreGlobalCloudLink() {
        await this.learnMoreGlobalCloudLink.click();
    }

    async clickLearnMoreControlLink() {
        await this.learnMoreControlLink.click();
    }

    async clickLearnMoreNetworkLink() {
        await this.learnMoreNetworkLink.click();
    }

    async scrollToTheResourcesBlock() {
        await this.resourceBlock.scrollIntoView({ block: 'center', inline: 'center'});
    }

    async clickBenefitsLink() {
        await this.benefitsLink.click();
    }

    async clickGuidesLink() {
        await this.guidesLink.click();
    }

    async clickOwnCarrier() {
        await this.ownCarrier.click();
    }

}
module.exports = new Resources();