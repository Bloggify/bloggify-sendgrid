"use strict";

const Email = Bloggify.require("bloggify-sendgrid", true);

Email.send({
    to_email: "someone@domain.com"
  , from_email: "me@domain.com"
  , subject: "Hello world!"
  , template_id: "your template id"
  , substitutions: {
      "-name-": "Alice"
    }
}, (err, data) => {
    console.log(err || data);
});
