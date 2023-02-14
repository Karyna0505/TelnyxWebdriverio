const Page = require('./page');

class OpenSite extends Page {

    get acceptButton () {
        return $('[aria-label="close and deny"]~div>div>button');
    }

    async open(path) {
        await super.open(path);
    }

    async acceptCookies() {
        if (await this.acceptButton.isDisplayed()) {
          await this.acceptButton.click();
        }
    }

}

module.exports = new OpenSite();