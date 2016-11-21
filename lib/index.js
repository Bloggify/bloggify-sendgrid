"use strict";

const SendGrid = require("sendgrid");

let sg = null;

exports.init = function bloggifySendgrid (config) {
    sg = SendGrid(config.key);
};

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
exports.send = function (data, cb) {
    var request = sg.emptyRequest()
    request.body = {
        subject: data.subject
      , from: {
            email: data.from_email
          , name: data.from_name
        }
      , personalizations: [
            {
                to: [
                    {
                        email: data.to_email
                      , name: data.to_name
                    }
                ]
              , substitutions: data.substitutions
            }
        ],
        template_id: data.template_id
    };

    request.method = "POST";
    request.path = "/v3/mail/send";

    sg.API(request).then(function (response) {
        cb(null, response);
    }).catch(cb);
};
