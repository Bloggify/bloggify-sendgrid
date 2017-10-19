"use strict"

const SendGrid = require("sendgrid")
    , forEach = require("iterate-object")

module.exports = class BloggifySendgrid {

    /**
     * @name bloggify:init
     * @function
     * @param {Object} config
     *
     *   - `key` (String): The Sendgrid API key.
     */
    static init (config) {
        BloggifySendgrid._client = SendGrid(config.key)
    }

    /**
     * send
     * Send an email.
     *
     * @name send
     * @function
     * @param {Object} data An object containing the following fields:
     *
     *  - `subject` (String): The email subject.
     *  - `from_email` (String): The `from` email.
     *  - `from_name` (String): The `from` name (optional).
     *  - `to_email` (String): The `to` email.
     *  - `bcc_email` (String): The `bcc` email.
     *  - `cc_email` (String): The `cc` email.
     *  - `to_name` (String): The `to` name (optional).
     *  - `template_id` (String): The SendGrid template id.
     *  - `substitutions` (Object): The template substitutions.
     *
     *
     * In the Bloggify config you will have to provide the following data:
     *
     *  - `key` (String): The SendGrid key.
     *
     * @param {Function} cb The callback function.
     */
    static send (data, cb) {
        const request = BloggifySendgrid._client.emptyRequest()
            , personalizations = {
                substitutions: data.substitutions
              }
            , emailFields = ["to", "bcc", "cc"]

        emailFields.forEach(c => {
            const key = `${c}_email`
                , maybeEmails = data[key]

            if (!maybeEmails) {
                return
            }

            const addresses = personalizations[c] = []

            if (Array.isArray(maybeEmails)) {
                let unique = {}
                maybeEmails.forEach(c => {
                    if (typeof c === "string") {
                        unique[c] = ""
                    } else {
                        unique[c.email] = c.name
                    }
                })
                forEach(unique, (name, email) => {
                    addresses.push({ email: email, name: name })
                })
            } else {
                addresses.push({
                    email: data.to_email
                  , name: data.to_name
                })
            }

            if (!addresses.length) {
                delete personalizations[c]
            }
        })

        if (!(personalizations.cc || []).length && !(personalizations.bcc || []).length && !(personalizations.to || []).length) {
            return cb()
        }

        request.body = {
            subject: data.subject
          , from: {
                email: data.from_email
              , name: data.from_name
            }
          , personalizations: [personalizations],
            template_id: data.template_id
        }

        request.method = "POST"
        request.path = "/v3/mail/send"

        BloggifySendgrid._client.API(request).then(response => {
            cb(null, response)
        }).catch(cb)
    }
}
