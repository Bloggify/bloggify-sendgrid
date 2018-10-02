"use strict"

const mail = require("@sendgrid/mail")

module.exports = class BloggifySendgrid {

    /**
     * @name bloggify:init
     * @function
     * @param {Object} config
     *
     *   - `key` (String): The Sendgrid API key.
     */
    static init (config) {
        mail.setApiKey(config.key)
    }

    /**
     * send
     * Send an email.
     *
     * @name send
     * @function
     * @param {Object} data An object containing the message object sent to Sendgrid, as [documented here](https://github.com/sendgrid/sendgrid-nodejs/blob/master/packages/mail/USE_CASES.md).
     *
     * In the Bloggify config you will have to provide the following data:
     *
     *  - `key` (String): The SendGrid key.
     *
     * @returns {Promise} A promise resolving the result from Sendgrid.
     */
    static send (message) {
        return mail.sendMultiple(message)
    }
}
