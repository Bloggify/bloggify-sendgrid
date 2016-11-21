"use strict";

const SendGrid = require("sendgrid");

let sg = null;

/**
 * bloggifySendgrid
 * Bloggify plugin for sending emails via SendGrid.
 *
 * @name bloggifySendgrid
 * @function
 * @param {Number} a Param descrpition.
 * @param {Number} b Param descrpition.
 * @return {Number} Return description.
 */
exports.init = function bloggifySendgrid (config) {
    sg = SendGrid(config.key);
};

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
