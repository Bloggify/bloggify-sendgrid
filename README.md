
# bloggify-sendgrid

 [![Patreon](https://img.shields.io/badge/Support%20me%20on-Patreon-%23e6461a.svg)][patreon] [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/bloggify-sendgrid.svg)](https://www.npmjs.com/package/bloggify-sendgrid) [![Downloads](https://img.shields.io/npm/dt/bloggify-sendgrid.svg)](https://www.npmjs.com/package/bloggify-sendgrid) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Bloggify plugin for sending emails via SendGrid.

## :cloud: Installation

```sh
$ npm i --save bloggify-sendgrid
```


## :clipboard: Example



```js
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
```

## :memo: Documentation


### `send(data, cb)`
Send an email.

#### Params
- **Object** `data`: An object containing the following fields:
 - `subject` (String): The email subject.
 - `from_email` (String): The `from` email.
 - `from_name` (String): The `from` name (optional).
 - `to_email` (String): The `to` email.
 - `to_name` (String): The `to` name (optional).
 - `template_id` (String): The SendGrid template id.
 - `substitutions` (Object): The template substitutions.

In the Bloggify config you will have to provide the following data:

 - `key` (String): The SendGrid key.
- **Function** `cb`: The callback function.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :moneybag: Donations

Another way to support the development of my open-source modules is
to [set up a recurring donation, via Patreon][patreon]. :rocket:

[PayPal donations][paypal-donations] are appreciated too! Each dollar helps.

Thanks! :heart:


## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[patreon]: https://www.patreon.com/ionicabizau
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
